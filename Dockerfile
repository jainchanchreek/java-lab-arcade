FROM node:20-bookworm-slim

RUN apt-get update \
  && apt-get install -y --no-install-recommends openjdk-17-jdk-headless ca-certificates \
  && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY server.js ./server.js
COPY public ./public

RUN useradd --system --create-home --home-dir /home/appuser appuser
USER appuser

EXPOSE 3000

CMD ["node", "server.js"]
