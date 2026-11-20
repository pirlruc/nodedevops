import { readFileSync } from "node:fs";

const summary = process.argv[2] ?? "coverage/coverage-summary.json";
const data = JSON.parse(readFileSync(summary, "utf8"));
const statements = data.total.statements.pct;
const branches = data.total.branches.pct;
const needS = Number(process.env.STATEMENTS);
const needB = Number(process.env.BRANCHES);
console.log(
  `statements ${statements} (floor ${needS}), branches ${branches} (floor ${needB})`,
);
if (statements < needS || branches < needB) {
  process.exit(1);
}
