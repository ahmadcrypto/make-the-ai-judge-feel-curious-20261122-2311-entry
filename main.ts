import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The lighthouse keeper leaves one lamp lit for a ship that never comes. " +
  "Each night he trims the wick, counts the waves, and wonders which of them " +
  "is carrying the letter he never sent.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
