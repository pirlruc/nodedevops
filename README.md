# nodedevops

Reusable GitHub Actions quality gates for Node and TypeScript projects.

Pin `node-quality.yml` by tag and pass the same value as `devops_ref`. The coverage inputs default to the org floors: 95% statements and 95% branches. The test command must write `coverage/coverage-summary.json`.

```yaml
jobs:
  node-quality:
    permissions:
      contents: read
    uses: pirlruc/nodedevops/.github/workflows/node-quality.yml@1.0.0
    with:
      devops_ref: 1.0.0
      node_version: "24"
```

Callers install Node with `actions/setup-node`. This repository does not publish a CI image.

## Documentation

- [Workflow example](examples/call-node-quality.yml)
- [Workflows](docs/workflows.md)
