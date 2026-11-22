# Mountaincraft IT Docs

Documentation for the Mountaincraft Makerspace IT team, built with [Hugo](https://gohugo.io) and the [Hextra](https://github.com/imfing/hextra) theme.

**Status: wireframe.** The structure, page formats and review workflow are in place. Content is placeholder, and pages marked EXAMPLE show the format. The plan, including open decisions, is in [PLAN.md](PLAN.md).

No npm or Node.js. The build needs only the Hugo binary. The theme and the search library are committed to the repo, so builds don't download anything.

## Preview it locally

You need Git and Hugo 0.146 or newer (CI uses 0.167.0). Check with `hugo version`.

| OS | Install Hugo |
|---|---|
| macOS | `brew install hugo` |
| Windows | `winget install Hugo.Hugo.Extended` |
| Debian/Ubuntu | Download the `.deb` from [Hugo releases](https://github.com/gohugoio/hugo/releases) (the apt package is often too old) |
| Arch | `sudo pacman -S hugo` |

```sh
git clone https://github.com/bgmakesithappen/mountaincraft-it-docs.git
cd mountaincraft-it-docs
hugo server
```

Open http://localhost:1313. Pages reload as you edit files under `content/`.

To check the production build:

```sh
hugo --gc --minify   # fails if any page has invalid frontmatter; output in public/
```

## What to look at

1. **[PLAN.md](PLAN.md):** phases, and open decisions D1–D7 that need input from IT leads.
2. **The site sections** (Start here, Services, Network, Hardware, Runbooks, Policies, Decisions). Does the structure fit how we work?
3. **Page kinds:** open [Wi-Fi (EXAMPLE)](content/services/wifi.md) and [the example runbook](content/runbooks/rotate-guest-wifi-password.md). The box under each title comes from the frontmatter.
4. **Validation:** delete `owner:` from `content/services/wifi.md` and run `hugo`. The build fails and names the page and field. This is how bad edits get caught before review.
5. **[Decision 0001](content/decisions/0001-docs-platform-and-review-flow.md):** why a reviewed docs site and not a wiki, and why Hugo. Status is `proposed` until IT leads agree.

## How changes will work

Every change is a pull request that a person reviews. Members who don't use GitHub will request changes from Slack with `/wiki-change` (not built yet; PLAN phase P3). An agent drafts the pull request from the request, and an IT team member reviews and merges it.

## Repo layout

| Path | What |
|---|---|
| `content/` | Pages. One folder per sidebar section; `_index.md` is the section page. |
| `data/pagekinds.yaml` | Required frontmatter per page kind (service, runbook, policy, decision). |
| `layouts/_partials/page-meta.html` | Checks each page against `pagekinds.yaml` (build fails on errors) and shows the metadata box under the title. |
| `assets/css/custom.css` | Styles for the metadata box. |
| `assets/lib/` | Local copy of FlexSearch for site search. |
| `themes/hextra/` | Vendored Hextra theme. See `themes/hextra/VENDORED.md` for version and how to update. |
| `hugo.toml` | Site configuration. |
| `templates/` | Starting files for each page kind. |
| `.github/` | Change-request issue form, PR template, CODEOWNERS (placeholders), CI. |
| `AGENTS.md` | Rules for agents drafting pull requests. |
| `PLAN.md` | Plan, open decisions, change log. |

## Updating dependencies

There are two, both committed and reviewed like any other change:

- **Hextra:** replace `themes/hextra/` with the files from a newer release tag, review the diff, update `VENDORED.md`.
- **FlexSearch:** replace `assets/lib/flexsearch.bundle.min.js` with the matching version. Hextra's release notes name the version it expects.

Bump the Hugo version and checksum in `.github/workflows/build.yml` when you upgrade Hugo.

## Rules

- **Never commit secrets.** No passwords, Wi-Fi keys, door codes or tokens. Name the password-manager item instead. CI scans for secrets.
- One topic per pull request.
- Writing conventions: [start-here/conventions.md](content/start-here/conventions.md).

## Feedback

Open an issue, or comment on PLAN.md in a pull request.
