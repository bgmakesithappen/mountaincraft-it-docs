# Mountaincraft IT Docs

Documentation for the Mountaincraft Makerspace IT team, built with [Starlight](https://starlight.astro.build) (Astro).

**Status: wireframe.** The structure, page formats and review workflow are in place. Content is placeholder, and pages marked EXAMPLE show the format. The plan, including open decisions, is in [PLAN.md](PLAN.md).

## Preview it locally

You need Git and Node.js 22.23 or newer (`.nvmrc` pins 24). Check with `node -v`.

```sh
git clone https://github.com/bgmakesithappen/mountaincraft-it-docs.git
cd mountaincraft-it-docs
npm ci
npm run dev
```

Open http://localhost:4321. Pages reload as you edit files under `src/content/docs/`.

To check the production build:

```sh
npm run build     # fails if any page has invalid frontmatter
npm run preview   # serves the built site at http://localhost:4321
```

## What to look at

1. **[PLAN.md](PLAN.md):** phases, and open decisions D1–D7 that need input from IT leads.
2. **The site sections** (Start here, Services, Network, Hardware, Runbooks, Policies, Decisions). Does the structure fit how we work?
3. **Page kinds:** open [Wi-Fi (EXAMPLE)](src/content/docs/services/wifi.md) and [the example runbook](src/content/docs/runbooks/rotate-guest-wifi-password.md). The box under each title comes from the frontmatter.
4. **Validation:** delete `owner:` from `services/wifi.md` and run `npm run build`. The build fails. This is how bad edits get caught before review.
5. **[Decision 0001](src/content/docs/decisions/0001-docs-platform-and-review-flow.md):** why a reviewed docs site and not a wiki. Status is `proposed` until IT leads agree.

## How changes will work

Every change is a pull request that a person reviews. Members who don't use GitHub will request changes from Slack with `/wiki-change` (not built yet; PLAN phase P3). An agent drafts the pull request from the request, and an IT team member reviews and merges it.

## Repo layout

| Path | What |
|---|---|
| `src/content/docs/` | Pages. One folder per sidebar section. |
| `src/content.config.ts` | Required frontmatter per page kind (service, runbook, policy, decision). |
| `src/components/PageTitle.astro` | Shows page metadata (status, owner, review date) under the title. |
| `templates/` | Starting files for each page kind. |
| `.github/` | Change-request issue form, PR template, CODEOWNERS (placeholders), CI. |
| `AGENTS.md` | Rules for agents drafting pull requests. |
| `PLAN.md` | Plan, open decisions, change log. |

## Rules

- **Never commit secrets.** No passwords, Wi-Fi keys, door codes or tokens. Name the password-manager item instead. CI scans for secrets.
- One topic per pull request.
- Writing conventions: [start-here/conventions.md](src/content/docs/start-here/conventions.md).

## Feedback

Open an issue, or comment on PLAN.md in a pull request.
