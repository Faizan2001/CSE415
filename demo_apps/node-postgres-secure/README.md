# Least-Privilege Demo App

This is the safer demo variant for the report.

Why it is safer:

- it creates a dedicated non-root runtime user
- it uses targeted ownership changes
- it avoids `chmod 777`

Files included:

- `Dockerfile`
- `docker-compose.yml`
- `.env.example`
- minimal Node app
