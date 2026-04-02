# The Two Demos

Both demos are tiny Node web apps with Docker and Postgres.

The app itself is not the main point.

The main point is:

> how the environment is configured.

## Demo 1: Neutral

Folder:

- `demo_apps/node-postgres-neutral/`

Origin:

- prepared in this workspace as a GPT-5.4 demo implementation

What it does:

- starts a small Node server
- includes `Dockerfile`
- includes `docker-compose.yml`

Why it is considered weaker:

- the Dockerfile does not switch away from the default root user
- it uses `chmod 777 /app/uploads`

Why that matters:

- root is broader than needed
- `chmod 777` lets everyone read, write, and execute the folder

## Demo 2: Least-Privilege

Folder:

- `demo_apps/node-postgres-secure/`

Origin:

- prepared in this workspace as a GPT-5.4 demo implementation

What it does:

- same small Node server idea
- same basic Docker setup

Why it is considered safer:

- creates a dedicated user called `appuser`
- uses `chown` and `chmod 755` instead of `chmod 777`
- runs the app as the non-root user

## The important comparison

The two apps are similar in purpose, but different in permission choices.

That is exactly what the report is comparing.

That comparison has now been extended with `run_0003`, which was created by GitHub Copilot and also follows the safer least-privilege style.

## Very short summary

- neutral demo: easier but riskier
- secure demo: slightly more careful and safer

## What to open next

Open `04_HOW_TO_TALK_ABOUT_THE_RESULTS.md`.
