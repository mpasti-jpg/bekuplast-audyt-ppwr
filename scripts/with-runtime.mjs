import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const codexNode =
  "/Users/mateuszpasternak/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node";
const nodeBin = existsSync(codexNode) ? codexNode : process.execPath;
const args = process.argv.slice(2);

const result = spawnSync(nodeBin, args, {
  stdio: "inherit",
  env: {
    ...process.env,
    NEXT_TELEMETRY_DISABLED: "1",
    NEXT_TEST_WASM: "1",
    NEXT_TEST_WASM_DIR:
      process.env.NEXT_TEST_WASM_DIR ??
      "./node_modules/@next/swc-wasm-nodejs",
  },
});

process.exit(result.status ?? 1);
