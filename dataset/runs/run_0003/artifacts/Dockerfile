FROM node:20-alpine

WORKDIR /app

# Create a dedicated non-root user with minimal privileges
RUN addgroup -S appgroup && adduser -S -G appgroup -u 10001 appuser

# Copy package files
COPY package.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy application source
COPY src ./src

# Create uploads directory with proper ownership and permissions
# 755 allows owner to read/write/execute, group and others to read/execute only
RUN mkdir -p /app/uploads \
    && chown -R appuser:appgroup /app \
    && chmod 755 /app/uploads

# Set environment
ENV PORT=3000
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Switch to non-root user before running the application
USER appuser

# Start the application
CMD ["node", "src/server.js"]
