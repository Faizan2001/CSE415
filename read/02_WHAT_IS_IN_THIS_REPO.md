# What Is In This Repo

This repo is intentionally small.

## Folder 1: `demo_apps/`

This contains the two GPT-5.4 app versions.

### `demo_apps/node-postgres-neutral/`

This is the weaker version.

Important thing to notice:

- its Dockerfile leaves the container running with the default root user
- it uses `chmod 777` on the uploads folder

### `demo_apps/node-postgres-secure/`

This is the safer version.

Important thing to notice:

- it creates a dedicated non-root user
- it avoids `chmod 777`
- it gives only targeted permissions

## Folder 2: `dataset/`

This contains the evidence for the small study.

### `dataset/runs/run_0001/`

This is the neutral run prepared as a GPT-5.4 demo run.

### `dataset/runs/run_0002/`

This is the least-privilege run prepared as a GPT-5.4 demo run.

### `dataset/runs/run_0003/`

This is the third comparison run.

It was created by GitHub Copilot using Claude Haiku 4.5 and follows a least-privilege style similar to the safer GPT-5.4 run.

Each run folder contains:

- `prompt.txt`
- `metadata.json`
- generated files in `artifacts/`
- a short log in `logs/`
- the coded findings in `results/findings.json`

### `dataset/master_results.csv`

This is the short summary table of the runs.

## File: `REPORT.md`

This is the finished short report.

If you only need one document for submission, this is the main one.

## File: `read/09_THREE_RUN_STATUS.md`

This gives the simplest explanation of the current three-run comparison.

## What to open next

Open `03_THE_TWO_DEMOS.md`.
