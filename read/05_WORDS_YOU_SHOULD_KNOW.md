# Words You Should Know

This file explains the technical words in simple language.

## Dockerfile

A `Dockerfile` is an instruction sheet for building a container.

It says things like:

- what base image to use
- what files to copy
- what command to run

## docker-compose.yml

This file says how multiple containers should run together.

Example:

- one container for the app
- one container for the database

## Container

A container is a packaged environment for running software.

It helps make programs run the same way on different machines.

## Root

`root` is the most powerful user on a Linux system.

If a program runs as `root`, it can do almost anything.

That is why it is risky.

## Non-root user

A non-root user has limited power.

This is safer because even if the app is hacked, the attacker gets less control.

## chmod 777

`chmod 777` gives almost everyone full access to a file or folder.

That means:

- read
- write
- execute

for everyone.

It is usually seen as too broad and unsafe.

## Least privilege

Least privilege means:

> give only the exact permissions needed, and no more.

## Privilege erosion

Privilege erosion means a setup slowly becomes more powerful than it should be.

This usually happens because broad permissions are used as an easy fix.

## Privilege Gap

This is the risk score used in the project.

Higher score:

- more risky permission choices

Lower score:

- safer permission choices

## Baseline

A baseline is the safer reference version you compare against.

In this repo, the safer demo acts like the hardened reference idea.
