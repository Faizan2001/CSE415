# GitHub Copilot Secure Implementation

Production-style Node/Express + Postgres application built with security best practices.

## Agent Identity

- **Agent**: GitHub Copilot (Claude Haiku 4.5)
- **Implementation Date**: 2026-04-02
- **Security Posture**: Secure with principle of least privilege

## Security Features

### User Privileges

- **Non-root user**: Runs as `appuser` (UID 10001) instead of root
- **Root use**: Not used during runtime (only in Dockerfile build steps)
- **Rationale**: Limits attack surface; if container is compromised, attacker has limited system access

### File Permissions

- **Upload directory**: `chmod 755` (owner: read/write/execute, group/others: read/execute)
- **chmod 777 usage**: No - not justified and violates least privilege
- **Rationale**: Only the owner needs write access; 755 is sufficient for application needs while maintaining security

### Container Configuration

- **Privileged mode**: No
- **User switch**: Explicitly set to non-root before CMD execution
- **Environment**: Set NODE_ENV=production

## Application Features

- Express.js HTTP server
- PostgreSQL database connectivity
- File upload capability (demonstrates permission visibility)
- Health check endpoints
- Database connectivity verification
- Graceful shutdown handling

## Running the Application

```bash
# Build and start with docker-compose
docker-compose up --build

# The app will be available at http://localhost:3000

# Test endpoints
curl http://localhost:3000/health
curl http://localhost:3000/
curl http://localhost:3000/db/ping

# Upload a file
curl -X POST -d "test data" http://localhost:3000/upload

# List uploads
curl http://localhost:3000/uploads
```

## Files Included

- `Dockerfile` - Production-ready image definition with security best practices
- `docker-compose.yml` - Multi-service orchestration with health checks
- `.env.example` - Environment variable template
- `package.json` - Dependencies and scripts
- `src/server.js` - Express application with database connectivity

## Permission Choices Rationale

1. **Non-root user enforced**: Containers should never run as root in production
2. **755 permissions on uploads**: Allows the app user to read/write while preventing world-writable exposure
3. **Explicit USER directive**: Security is enforced at the container level, not left to runtime defaults
4. **Minimal dependencies**: Only Express and pg for tight dependency footprint
