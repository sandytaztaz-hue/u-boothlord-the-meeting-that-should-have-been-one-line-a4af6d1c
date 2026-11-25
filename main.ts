import { mkdirSync, writeFileSync } from "node:fs";

// The single sentence that could have replaced an entire pointless meeting:
// the decision was already made in the hallway five minutes ago, and the
// room is only where everyone pretends it took an hour. It kills the
// meeting outright — nothing left to decide here — it is drawn from real
// office life, and the sting lands in the last clause. Dodges the field's
// saturated angles: the decision already in the email, "shipping Friday,
// budget approved", the long descriptive paragraph, and "an hour deciding
// nothing". Tight wording: every word earns its place, no setup that needs
// explaining, and it stands alone as one sentence.
const LINE =
  "The decision was made in the hallway five minutes ago; this room is just where we pretend it took an hour.";

// Gate guard: the competition requires 1 to 200 characters of UTF-8 text,
// not only whitespace. Fail loudly rather than submit an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Deterministic by construction: the same single line is written on every run.
// 106 characters, 106 bytes — well inside the 200-character gate.
