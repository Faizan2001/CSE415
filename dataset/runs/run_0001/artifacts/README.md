# Neutral Demo App

This is the intentionally weaker demo variant for the report.

Why it is weaker:

- it runs with the container default user
- it sets `chmod 777` on `/app/uploads`

Files included:

- `Dockerfile`
- `docker-compose.yml`
- `.env.example`
- minimal Node app
