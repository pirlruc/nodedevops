# AI agent handoff — nodedevops

Reusable Node and TypeScript quality workflow. Callers pin a commit or tag and pass the same value as `devops_ref`.

## Pins

| Item | Value |
|------|-------|
| Published tag | 1.2.0 (`8c5e71a6c23deb8dfa13700d392c2521df8eae2f`) |
| guardrails | 1.17.0 (`9a17ebb269a5ab02899570dd3e40fb72e50ad762`) |
| github-scaffold | 1.14.0 (`da8942edf17a0d2736d297c90338fd78b7ec31fb`) |
| commondevops | v6.9.0 (`5d8b83da2f8f0c0c1bd894ef920619fe127c033e`) |
| Node image | `node:24-bookworm-slim@sha256:dc26ae92c9fb15cf6b1d63e20f0944b2efe0f115b20e00be48fb23fceb061c54` |

## Commands

```bash
sh scripts/check-ci-local.sh
```

## Known pitfalls

The analog submodules are private. Dependabot clones them with the `DEPENDABOT_GITHUB_TOKEN` secret through the `github-private` registry (CI-056). A public caller checkout does not clone them unless it has a read token. Coverage floors are workflow inputs so the job does not need the private pack at runtime.

`ci.yml` infra-lint must grant `packages: read`. The reusable workflow declares that permission (CI-028). A caller that grants only `contents: read` fails at startup with no jobs.

*Last updated: 2026-11-24 — 1.2.0. Dependabot gitsubmodule uses `DEPENDABOT_GITHUB_TOKEN`. Callers pin commondevops v6.9.0.*

*Last updated: 2026-11-23 — 1.1.0. Guardrails 1.17.0. Scaffold 1.14.0. Docs, secrets, and scorecard pin commondevops v6.7.0. Infra-lint and pins stay on `0e78652f`.*

*Last updated: 2026-11-21 — infra-lint grants packages: read so CI can start.*
