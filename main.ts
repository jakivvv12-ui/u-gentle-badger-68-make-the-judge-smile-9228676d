import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "A little boy on the train gave me his window seat to watch the sunset, then whispered, 'Don't tell \u2014 I wanted to see it too.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the entry must be one line, 1-200 characters, not only whitespace.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
