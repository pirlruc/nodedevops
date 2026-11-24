# AI agent handoff — nodedevops

Reusable Node and TypeScript quality workflow. Callers pin a commit or tag and pass the same value as `devops_ref`.

## Pins

| Item | Value |
|------|-------|
| Published tag | 1.2.0 (`8c5e71a6c23deb8dfa13700d392c2521df8eae2f`) |
| guardrails | 1.17.1 (`8508e93691aa3c4f769ecc215ddc83ecf26e70b2`) |
| github-scaffold | 1.14.2 (`615dbbcbe906d62a29e4f4e4118cb94cb119f5a5`) |
| commondevops | v6.10.0 (`a2af891c6d05fe2790bc5ddf761252c95185ce5f`) |
| Node image | `node:24-bookworm-slim@sha256:dc26ae92c9fb15cf6b1d63e20f0944b2efe0f115b20e00be48fb23fceb061c54` |

## Commands

```bash
sh scripts/check-ci-local.sh
```

## Known pitfalls

The analog submodules are private. Dependabot clones them with the `DEPENDABOT_GITHUB_TOKEN` secret through the `github-private` registry (CI-056). A public caller checkout does not clone them unless it has a read token. Coverage floors are workflow inputs so the job does not need the private pack at runtime.

`ci.yml` infra-lint must grant `packages: read`. The reusable workflow declares that permission (CI-028). A caller that grants only `contents: read` fails at startup with no jobs.

*Last updated: 2026-11-24 — 1.2.0. Dependabot gitsubmodule uses `DEPENDABOT_GITHUB_TOKEN`. Callers pin commondevops v6.9.0.*

*Last updated: 2026-11-24 — 1.3.0. Self-CI calls ops-repo-ci from commondevops v6.10.0. Friday security schedule. Guardrails 1.17.1. Scaffold 1.14.2.*

*Last updated: 2026-11-23 — 1.1.0. Guardrails 1.17.0. Scaffold 1.14.0. Docs, secrets, and scorecard pin commondevops v6.7.0. Infra-lint and pins stay on `0e78652f`.*

*Last updated: 2026-11-21 — infra-lint grants packages: read so CI can start.*
