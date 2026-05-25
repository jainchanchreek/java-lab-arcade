# Java Lab Arcade

Interactive Java learning site with original theory notes, games, a Java runner, and a configurable compiler backend.

## Run Locally

```bash
npm start
```

Open `http://127.0.0.1:3000`.

## GitHub Pages

This project can deploy as a static site from the `public/` folder. The included GitHub Actions workflow publishes it automatically when you push to `main`.

1. Push this project to a GitHub repository.
2. In the repository, go to Settings -> Pages.
3. Set Source to "GitHub Actions".
4. Push to `main`.

The frontend uses `public/config.js` to decide where Java code should be compiled.

```js
window.JAVA_LAB_CONFIG = {
  compilerProvider: "auto",
  judge0ApiBase: "https://ce.judge0.com",
  javaLanguageId: 62
};
```

`auto` uses the local Node runner when available, and falls back to a Judge0-compatible compiler API on static hosts such as GitHub Pages.

## Production Safety

The Java runner executes submitted code, so it is disabled by default when `NODE_ENV=production`.

Use:

```bash
ENABLE_JAVA_RUNNER=true
```

only when deploying inside a properly sandboxed container or isolated runtime. For a public deployment, keep it disabled until you add stronger CPU, memory, filesystem, process, and network isolation.

## Deploy With Docker

The included `Dockerfile` installs Node.js and OpenJDK so the app can serve the site and, if enabled, compile Java snippets.

Build:

```bash
docker build -t java-lab-arcade .
```

Run:

```bash
docker run --rm -p 3000:3000 java-lab-arcade
```

## Render

This repo includes `render.yaml`.

1. Push the project to GitHub.
2. In Render, create a new Blueprint from the repo.
3. Keep `ENABLE_JAVA_RUNNER=false` for a public demo.
4. Health check path: `/healthz`.

## Fly.io

This repo includes `fly.toml`.

```bash
fly launch --no-deploy
fly deploy
```

Before deploy, change the `app` name in `fly.toml` if that name is already taken.

## Compiler Backend

For GitHub Pages, use a Judge0-compatible backend. The default `config.js` points to the public Judge0 CE endpoint for testing. Public compiler endpoints can be rate-limited, unavailable, or changed by their operators, so for a serious launch you should host your own Judge0 CE instance and replace `judge0ApiBase`.
