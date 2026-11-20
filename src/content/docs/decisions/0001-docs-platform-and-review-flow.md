---
title: "0001: Docs platform and review flow"
description: Starlight static site, git-backed, every change reviewed.
kind: decision
status: proposed
date: 2026-11-19
---

## Context

The IT team needs shared documentation that volunteers can request changes to without learning git. Safety-relevant and policy content must not change without review. The team wants something light to run.

## Decision

- Build the docs as a static site with Starlight (Astro), with content as Markdown in git.
- Every change is a pull request that a human reviews. Policy pages also need their owner's approval.
- Non-technical members request changes from Slack (`/wiki-change`). Requests become GitHub issues, and an agent drafts the pull request.
- Frontmatter is checked at build time per page kind.
- Scope is the IT team. An org-wide site may follow.

## Alternatives considered

- **Wiki.js, BookStack, Docmost, DokuWiki:** live editing without review, and a server and database to maintain.
- **Docusaurus:** heavier output and dependencies, no frontmatter checks.
- **MkDocs Material:** in maintenance mode.

## Consequences

- Someone must review pull requests. Each area needs at least two reviewers.
- Building the Slack bot and agent step is extra work up front.
- Hosting must restrict access, because IT docs describe internal systems.
