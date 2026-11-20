# Plan: Mountaincraft IT Docs

A living plan. Change it by pull request, and add a line to the change log at the bottom.

## Goal

The IT team has one reviewed, current source of truth for Mountaincraft Makerspace's technology. Any member can request a change from Slack without knowing git. Nothing goes live without human review.

## Decided

| Decision | Detail | Record |
|---|---|---|
| Static docs site, not a wiki | Starlight (Astro), Markdown in git | `decisions/0001` |
| Every change is reviewed | Pull requests, human merge, CODEOWNERS for policies | `decisions/0001` |
| Scope is the IT team | Org-wide site is a later option (see Phase 4) | `decisions/0001` |
| Requests come from Slack | `/wiki-change` → GitHub issue → agent drafts PR → review → merge → Slack notice | `decisions/0001` |
| Page kinds with checked frontmatter | service, runbook, policy, decision; the build fails on invalid fields | `src/content.config.ts` |
| No secrets in the repo | Pages name password-manager items only; CI scans for secrets | `AGENTS.md`, `start-here/conventions.md` |

## Open decisions

| # | Question | Options | Leaning | Needs |
|---|---|---|---|---|
| D1 | Who can **read** the site? | IT team only / all members / public | IT team, or members | IT lead |
| D2 | Hosting and access control | A: Cloudflare Pages + Cloudflare Access (free tier, login by email code or Google). B: self-hosted Caddy on a makerspace box or VPS, behind Cloudflare Tunnel + Access | A (no server to run) | D1, Cloudflare account owned by the org |
| D3 | Domain | e.g. `it-docs.<domain>` | | Whoever controls DNS |
| D4 | Slack bot runtime | Cloudflare Worker (HTTP) / small container (Socket Mode) | Worker, if D2 = A | D2 |
| D5 | Agent API key | Org-owned Anthropic key with a monthly spend limit | | Treasurer or board |
| D6 | Hardware inventory location | Pages in this site / linked spreadsheet | | IT team |
| D7 | Read access for Slack-only members | Do requesters need to see the preview, or only the result? | | D1 |

## Phases

### P0: Wireframe (done 2026-11-19)

- [x] Starlight scaffold, section layout, sidebar
- [x] Frontmatter schema per page kind; tested that invalid pages fail the build
- [x] Metadata strip under page titles (status, owner, review date, overdue warning after 180 days)
- [x] Page templates, change-request issue form, PR template, CODEOWNERS placeholders, CI workflow draft
- [x] Agent rules (`AGENTS.md`)
- [x] Example service and runbook pages (marked EXAMPLE)

### P1: Repo and hosting (blocked: no access to the org GitHub yet)

- [ ] Get access to the org GitHub; transfer `bgmakesithappen/mountaincraft-it-docs` (currently public) into the org as a **private** repo before any real IT content is added
- [ ] Create teams `it-team` and `it-leads`; fill in `CODEOWNERS`
- [ ] Branch protection on `main`: PR required, 1 approval, code-owner review, build check required
- [ ] Pin GitHub Actions to commit SHAs
- [ ] Secret scanning: gitleaks-action needs a free license key for org repos; get one or run the gitleaks binary directly
- [ ] Settle D1–D3; set `site` and `editLink` in `astro.config.mjs`
- [ ] Deploy `main`; preview deploy per PR behind the same access control
- [ ] All accounts (GitHub org, Cloudflare, domain, Slack app) owned by the makerspace, with at least two admins; credentials in the org password manager

### P2: Content

- [ ] List current services; one service page each
- [ ] Network walk-through → network overview, VLAN table
- [ ] Policies: acceptable use, account access and offboarding, data retention (need owner approval)
- [ ] Settle D6; start hardware inventory
- [ ] Runbooks for the five most common requests or outages
- [ ] At least two reviewers per section
- [ ] Remove EXAMPLE pages

### P3: Change-request pipeline

- [ ] Slack app (free plan: custom app, slash command, modal; counts toward the 10-integration limit)
- [ ] `/wiki-change` modal with the same fields as `.github/ISSUE_TEMPLATE/change-request.yml`
- [ ] Bot creates the issue, records the requester, uploads photos (commit to repo or object storage)
- [ ] Agent drafts a PR when an issue gets the `agent-draft` label (Claude GitHub Action; settle D5)
- [ ] Bot posts in the channel when the change deploys, and replies to the requester when a request is closed without a change
- [ ] Urgent requests: notify IT leads directly; agree on a fast-track rule

### P4: Expansion (later, optional)

If other teams or the whole org want docs:

- **Option A: one site, a section per team.** One repo; CODEOWNERS per folder; access per path. Easiest to search; access rules get more complex.
- **Option B: separate site per team or org.** Copy this repo as a template; shared schema and components. Simpler access; content is split across sites.

Decide when a second team asks. Keep the schema and `PageTitle` component free of IT-specific assumptions so either option works.

## Risks

- **Review bottleneck.** Requests pile up if reviewers drift away. Mitigation: two reviewers per section; a weekly reminder of open PRs.
- **Secrets leak into a page or issue.** Mitigation: CI secret scan, agent rules, the issue form warning, private repo.
- **Single maintainer.** Mitigation: org-owned accounts, two admins, this plan and the README in the repo.
- **Stale pages.** Mitigation: `last_reviewed` and the overdue warning; quarterly review of overdue pages.

## Change log

- 2026-11-19: Plan created with the P0 wireframe.
- 2026-11-20: Named for Mountaincraft Makerspace.
- 2026-11-20: Pushed to `bgmakesithappen/mountaincraft-it-docs`, public for preview while content is placeholder only.
