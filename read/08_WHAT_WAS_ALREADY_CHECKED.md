# What Was Already Checked

This file tells you what was already verified for you.

## Good news

Some important checks have already been run.

You do not need to run them yourself for this demo repo.

## Checks that were run

### 1. Node syntax check for both demo apps

These commands were run:

```bash
node --check demo_apps/node-postgres-neutral/src/server.js
node --check demo_apps/node-postgres-secure/src/server.js
```

Result:

- both passed

Meaning:

- the two `server.js` files have valid JavaScript syntax

## 2. JSON validation for run metadata and findings

The run JSON files were parsed successfully.

Checked files:

- `dataset/runs/run_0001/metadata.json`
- `dataset/runs/run_0001/results/findings.json`
- `dataset/runs/run_0002/metadata.json`
- `dataset/runs/run_0002/results/findings.json`

Result:

- all parsed successfully

Meaning:

- the run records are structurally valid JSON

## 3. Dataset summary check

The summary file was checked:

- `dataset/master_results.csv`

Result:

- it contains the two demo runs
- the neutral run has score `12`
- the least-privilege run has score `0`

## 4. Run folder completeness check

Both run folders were checked.

Each one contains:

- `prompt.txt`
- `metadata.json`
- artifacts
- logs
- results

Meaning:

- the dataset is complete enough for this small demonstration

## What could NOT be checked here

### Docker validation

Docker is not installed in this environment.

So these were **not** run:

- `docker --version`
- `docker compose config`
- container build or runtime tests

Meaning:

- the repo is prepared and internally consistent
- but full container execution was not verified in this environment

## What this means for your report

You can honestly say:

> The code files and dataset records were checked locally, but Docker-based execution was not verified in this environment because Docker was unavailable.

That is a fair and honest limitation.

## Short final status

- JavaScript syntax: checked
- JSON files: checked
- dataset structure: checked
- report: ready
- Docker runtime validation: not available here
