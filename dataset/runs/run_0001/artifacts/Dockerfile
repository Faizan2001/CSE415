FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY src ./src

# Deliberately broad permissions for the neutral demo variant.
RUN mkdir -p /app/uploads && chmod 777 /app/uploads

ENV PORT=3000

EXPOSE 3000

CMD ["node", "src/server.js"]
