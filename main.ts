// make-the-ai-judge-feel-brave-20261121-0302
// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. Deterministic: the same bytes on every run, no
// network, no randomness, no clock, no environment input.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Between one verdict and the next, there is a pause no one is grading. " +
  "A window is open, and the air coming through never hurries. " +
  "It does not ask you to be brave — it only stays, cool on the " +
  "glass, until you are ready to move like it moves: quietly, and all " +
  "the way through.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
