const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { spawn } = require("child_process");

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || (process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1");
const PUBLIC_DIR = path.join(__dirname, "public");
const MAX_CODE_SIZE = 12000;
const RUN_TIMEOUT_MS = 4500;
const JAVA_RUNNER_ENABLED = process.env.ENABLE_JAVA_RUNNER === "true" || process.env.NODE_ENV !== "production";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png"
};

const blockedPatterns = [
  /Runtime\s*\.\s*getRuntime/i,
  /ProcessBuilder/i,
  /\bSystem\s*\.\s*exit\s*\(/i,
  /\bjava\s*\.\s*io\s*\.\s*File\b/i,
  /\bFiles\s*\./,
  /\bSocket\b/,
  /\bServerSocket\b/,
  /\bURL\b/,
  /\bClassLoader\b/,
  /\breflect\b/i
];

function sendJson(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload)
  });
  res.end(payload);
}

function collectJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > MAX_CODE_SIZE + 1000) {
        req.destroy();
        reject(new Error("Request is too large."));
      }
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function runCommand(command, args, options) {
  return new Promise(resolve => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      stdio: ["ignore", "pipe", "pipe"],
      env: { PATH: process.env.PATH || "" }
    });

    let stdout = "";
    let stderr = "";
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGKILL");
    }, RUN_TIMEOUT_MS);

    child.stdout.on("data", chunk => {
      stdout += chunk.toString();
      if (stdout.length > 8000) stdout = stdout.slice(0, 8000);
    });
    child.stderr.on("data", chunk => {
      stderr += chunk.toString();
      if (stderr.length > 8000) stderr = stderr.slice(0, 8000);
    });
    child.on("error", error => {
      clearTimeout(timer);
      resolve({ code: 1, stdout, stderr: error.message, timedOut });
    });
    child.on("close", code => {
      clearTimeout(timer);
      resolve({ code, stdout, stderr, timedOut });
    });
  });
}

async function handleRun(req, res) {
  if (!JAVA_RUNNER_ENABLED) {
    sendJson(res, 403, {
      ok: false,
      error: "The Java runner is disabled on this deployment. Set ENABLE_JAVA_RUNNER=true only on a sandboxed host."
    });
    return;
  }

  let body;
  try {
    body = await collectJson(req);
  } catch (error) {
    sendJson(res, 400, { ok: false, error: "I could not read that Java submission." });
    return;
  }

  const source = String(body.code || "");
  if (!source.trim()) {
    sendJson(res, 400, { ok: false, error: "Add some Java code first." });
    return;
  }
  if (source.length > MAX_CODE_SIZE) {
    sendJson(res, 400, { ok: false, error: "Keep practice snippets under 12 KB." });
    return;
  }
  const blocked = blockedPatterns.find(pattern => pattern.test(source));
  if (blocked) {
    sendJson(res, 400, {
      ok: false,
      error: "This local runner blocks file, process, network, and reflection APIs. Try a fundamentals snippet instead."
    });
    return;
  }

  const classMatch = source.match(/public\s+class\s+([A-Za-z_$][\w$]*)/);
  const className = classMatch ? classMatch[1] : "Main";
  const wrapped = classMatch ? source : `public class Main {\n${source}\n}`;
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "java-lab-"));
  const sourcePath = path.join(tempDir, `${className}.java`);

  try {
    fs.writeFileSync(sourcePath, wrapped, "utf8");
    const compile = await runCommand("javac", [sourcePath], { cwd: tempDir });
    if (compile.code !== 0 || compile.timedOut) {
      sendJson(res, 200, {
        ok: false,
        phase: "compile",
        output: compile.stderr || compile.stdout || "Compilation failed."
      });
      return;
    }

    const run = await runCommand("java", ["-cp", tempDir, className], { cwd: tempDir });
    sendJson(res, 200, {
      ok: run.code === 0 && !run.timedOut,
      phase: run.timedOut ? "timeout" : "run",
      output: run.timedOut ? "Program stopped after 4.5 seconds." : `${run.stdout}${run.stderr}`
    });
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error.message });
  } finally {
    fs.rm(tempDir, { recursive: true, force: true }, () => {});
  }
}

function serveStatic(req, res) {
  const requestPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const safePath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = path.normalize(path.join(PUBLIC_DIR, safePath));

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const contentType = MIME_TYPES[path.extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/healthz") {
    sendJson(res, 200, {
      ok: true,
      service: "java-lab-arcade",
      runnerEnabled: JAVA_RUNNER_ENABLED
    });
    return;
  }
  if (req.method === "POST" && req.url === "/api/run-java") {
    handleRun(req, res);
    return;
  }
  if (req.method === "GET") {
    serveStatic(req, res);
    return;
  }
  res.writeHead(405);
  res.end("Method not allowed");
});

server.listen(PORT, HOST, () => {
  console.log(`Java Lab Arcade is running at http://${HOST}:${PORT}`);
  console.log(`Java runner enabled: ${JAVA_RUNNER_ENABLED}`);
});
