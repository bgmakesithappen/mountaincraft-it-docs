---
title: "0001: Docs platform and review flow"
description: Hugo static site with the Hextra theme, git-backed, every change reviewed.
kind: decision
status: proposed
date: 2026-11-22
---

## Context

The IT team needs shared documentation that volunteers can request changes to without learning git. Safety-relevant and policy content must not change without review. The team wants something light to run, with a small dependency footprint, because npm supply-chain attacks target the machines that install packages.

## Decision

- Build the docs as a static site with Hugo and the Hextra theme, with content as Markdown in git.
- Keep the build free of npm and Node. Hugo is one pinned, checksum-verified binary. The theme and the search library are committed to the repo and updated by reviewed pull request.
- Every change is a pull request that a human reviews. Policy pages also need their owner's approval.
- Non-technical members request changes from Slack (`/wiki-change`). Requests become GitHub issues, and an agent drafts the pull request.
- Frontmatter is checked at build time per page kind (`data/pagekinds.yaml`).
- Scope is the IT team. An org-wide site may follow.

## Alternatives considered

- **Wiki.js, BookStack, Docmost, DokuWiki:** live editing without review, and a server and database to maintain.
- **Starlight (Astro):** the first wireframe. Good editor experience and type-checked frontmatter, but about 400 npm packages in the build.
- **Hugo + Docsy:** still needs npm (PostCSS) to build its CSS, and is heavier than this site needs.
- **Docusaurus:** a large npm dependency tree.
- **MkDocs Material:** in maintenance mode.

## Consequences

- Someone must review pull requests. Each area needs at least two reviewers.
- Theme and search updates are manual: copy a new release into the repo and review the diff.
- Hugo's template language is less friendly than TypeScript for changing the frontmatter checks.
- Building the Slack bot and agent step is extra work up front.
- Hosting must restrict access, because IT docs describe internal systems.
