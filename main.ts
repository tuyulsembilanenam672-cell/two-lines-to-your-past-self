// Two Lines to Your Past Self — make.fun entry
// The program writes the two-line warning to /output/entry.txt.
// Gate (from the kit's competition.yaml / RULES.txt): UTF-8 text,
// 1 to 280 characters, not only whitespace, exactly two lines.
// Judge brief: line 1 warns the past self about one specific moment
// in a single sentence; line 2 says in one sentence why that moment
// mattered and what changed because of it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "When Dad offers you the last slice of cake, take it — he's not being generous, he's testing you.";
const LINE_2 =
  "You said no to be polite, he ate it smiling, and that was the day you learned good manners cost cake.";

const ENTRY = `${LINE_1}\n${LINE_2}`;

// Runtime gate: the exact checks the sealed scorer applies,
// plus the two-line shape the judge brief requires.
const lines = ENTRY.split("\n");
if (lines.length !== 2) throw new Error(`expected 2 lines, got ${lines.length}`);
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`expected 1-280 chars, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) throw new Error("entry is only whitespace");
for (const line of lines) {
  if (!line.trim()) throw new Error("blank line in entry");
  if (line !== line.trim()) throw new Error("line has leading/trailing space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(
  `wrote /output/entry.txt (${ENTRY.length} chars, ${Buffer.byteLength(ENTRY, "utf8")} bytes)`,
);
