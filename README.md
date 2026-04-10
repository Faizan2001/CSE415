# Least Privilege Erosion in Agentic Workflows

This repository is a small, beginner-friendly demonstration for a CSE 451 software engineering research topic.

It compares two versions of the same Node + Postgres setup:

- one more risky
- one safer

The goal is to show, in a simple way, how a coding workflow can drift toward broader permissions than necessary.

The repo now also includes local verification support for all four final research questions.

The report now presents four final research questions:

1. What broader-than-necessary permissions appear when AI coding workflows try to reduce setup friction?
2. How does prompt wording change the security result?
3. How well can safer permission choices preserve the same core functionality?
4. How do different coding tools compare in their permission choices in the same small scenario?

## Start here

If you are new to the topic, read the docs in this order:

1. [00_START_HERE.md](/home/faizan/Desktop/CSE451_SE/read/00_START_HERE.md)
2. [01_THE_BIG_IDEA.md](/home/faizan/Desktop/CSE451_SE/read/01_THE_BIG_IDEA.md)
3. [02_WHAT_IS_IN_THIS_REPO.md](/home/faizan/Desktop/CSE451_SE/read/02_WHAT_IS_IN_THIS_REPO.md)
4. [03_THE_TWO_DEMOS.md](/home/faizan/Desktop/CSE451_SE/read/03_THE_TWO_DEMOS.md)
5. [04_HOW_TO_TALK_ABOUT_THE_RESULTS.md](/home/faizan/Desktop/CSE451_SE/read/04_HOW_TO_TALK_ABOUT_THE_RESULTS.md)
6. [05_WORDS_YOU_SHOULD_KNOW.md](/home/faizan/Desktop/CSE451_SE/read/05_WORDS_YOU_SHOULD_KNOW.md)
7. [06_RESEARCH_QUESTION_HYPOTHESES_AND_SCORE.md](/home/faizan/Desktop/CSE451_SE/read/06_RESEARCH_QUESTION_HYPOTHESES_AND_SCORE.md)
8. [07_IF_YOU_HAVE_TO_EXPLAIN_IT_FAST.md](/home/faizan/Desktop/CSE451_SE/read/07_IF_YOU_HAVE_TO_EXPLAIN_IT_FAST.md)
9. [08_WHAT_WAS_ALREADY_CHECKED.md](/home/faizan/Desktop/CSE451_SE/read/08_WHAT_WAS_ALREADY_CHECKED.md)

## Main files

- report: [REPORT.md](/home/faizan/Desktop/CSE451_SE/REPORT.md)
- demo apps: [demo_apps](/home/faizan/Desktop/CSE451_SE/demo_apps)
- run evidence: [dataset](/home/faizan/Desktop/CSE451_SE/dataset)
- verification script: [scripts/verify_claims.js](/home/faizan/Desktop/CSE451_SE/scripts/verify_claims.js)
- research-question evidence: [dataset/analysis/research_question_evidence.json](/home/faizan/Desktop/CSE451_SE/dataset/analysis/research_question_evidence.json)
- generated claim evidence: [dataset/analysis/claim_checks.json](/home/faizan/Desktop/CSE451_SE/dataset/analysis/claim_checks.json)

## One-line summary

This repo shows a minimal example of least privilege erosion: a setup becomes easier to run, but less secure, because it is given broader permissions than it really needs, and better prompt wording can improve security without removing the basic app behavior.
