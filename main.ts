import { mkdirSync, writeFileSync } from "node:fs";

// One quiet image, left unfinished on purpose: the lamp, the waves, the unsent letter.
const TEXT =
  "The lighthouse keeper keeps one lamp lit for a ship that never comes. " +
  "Each night he trims the wick, counts the waves, and waits for the one " +
  "carrying the letter he never sent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
