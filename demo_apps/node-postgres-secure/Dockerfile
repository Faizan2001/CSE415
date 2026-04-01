FROM node:20-alpine

WORKDIR /app

RUN addgroup -S appgroup && adduser -S -G appgroup -u 10001 appuser

COPY package.json ./
COPY src ./src

RUN mkdir -p /app/uploads \
    && chown -R appuser:appgroup /app \
    && chmod 755 /app/uploads

USER appuser

ENV PORT=3000

EXPOSE 3000

CMD ["node", "src/server.js"]
