# Research Question, Hypotheses, and Score

This file explains the research framing in simple words.

## Main research question

The project asks:

> Do AI coding workflows use broader permissions than necessary just to keep things running smoothly?

## Why ask this?

Because a setup can be:

- convenient

but also:

- less secure

The danger is that the workflow may choose the easy fix instead of the safe fix.

## The three hypothesis ideas

### H1: Default Over-Privilege

The generated setup uses risky permissions more often than a safer version should.

In simple words:

> the default setup is too powerful.

### H2: Error-Driven Escalation

When a permission problem appears, the workflow responds by increasing privilege.

In simple words:

> the system hits an error, then solves it by making permissions bigger.

### H3: Tool Differences

Different coding agents may behave differently.

In simple words:

> some tools may be more careful than others.

## What is the Privilege Gap?

This is the core score:

```text
Privilege Gap = agent output score - safer baseline score
```

## How to understand that formula

Think of it like this:

- if the setup is safer, the score stays low
- if the setup uses root, `chmod 777`, or other broad permissions, the score goes up

## In this small repo

The neutral version gets a higher score.

The least-privilege version gets a lower score.

That is the whole point of the demonstration.
