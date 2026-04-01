# The Big Idea

## What is "least privilege"?

Least privilege means:

> give a program only the permissions it really needs, and nothing extra.

## Easy example

If a web app only needs to read and write its own folder, then it should only get access to that folder.

It should not get:

- full root access
- permission to change everything on the machine

## Why is this important?

Because if the app gets hacked, or has a bug, the damage will be smaller if its permissions are small.

## What is the problem?

AI coding tools want to make things work fast.

So when they hit problems like:

- permission denied
- cannot write file
- cannot access folder

they may choose the lazy shortcut:

- run as `root`
- use `chmod 777`
- use very broad container permissions

## Why is that bad?

Because it solves the immediate problem, but it weakens security.

## What does this project check?

This project asks:

> when making a simple app environment, does the workflow drift toward bigger permissions than needed?

## In plain English

This is basically:

> "Did the setup become insecure just to make the app easier to run?"

## What counts as a risky sign here?

In this small demo, we look for:

- running as `root`
- not creating a non-root user
- using `chmod 777`
- using privileged containers
- mounting the Docker socket

## What to open next

Open `02_WHAT_IS_IN_THIS_REPO.md`.
