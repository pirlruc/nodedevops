# AI agent handoff — nodedevops

Reusable Node and TypeScript quality workflow. Callers pin a commit or tag and pass the same value as `devops_ref`.

## Pins

| Item | Value |
|------|-------|
| Published tag | 1.1.0 (`dc03d43c01a5bc059cea73cad60af9347dda9945`) |
| guardrails | 1.17.0 (`9a17ebb269a5ab02899570dd3e40fb72e50ad762`) |
| github-scaffold | 1.14.0 (`da8942edf17a0d2736d297c90338fd78b7ec31fb`) |
| commondevops | docs, secrets, and scorecard `1c621c43` (v6.7.0). Infra-lint and pins `0e78652fa9f65b9d98033ac82bf9e5308ebb17a7` |
| Node image | `node:24-bookworm-slim@sha256:dc26ae92c9fb15cf6b1d63e20f0944b2efe0f115b20e00be48fb23fceb061c54` |

## Commands

```bash
sh scripts/check-ci-local.sh
```

## Known pitfalls

The analog submodules are private. A public caller checkout does not clone them unless it has a read token. Coverage floors are workflow inputs so the job does not need the private pack at runtime.

`ci.yml` infra-lint must grant `packages: read`. The reusable workflow declares that permission (CI-028). A caller that grants only `contents: read` fails at startup with no jobs.

*Last updated: 2026-11-23 — 1.1.0. Guardrails 1.17.0. Scaffold 1.14.0. Docs, secrets, and scorecard pin commondevops v6.7.0. Infra-lint and pins stay on `0e78652f`.*

*Last updated: 2026-11-21 — infra-lint grants packages: read so CI can start.*
