// News-image entry for Tuesday 24 November 2026 (Node 22, standard library only).
// The image beside this file is the entry: a front page summing up the day's world
// news - a Politburo member purged in China, Houthis hit Riyadh's tallest tower,
// a Hamas security chief killed in Gaza, Baghdad seizes Kurdish oilfields,
// a factory fire toll rises to 26 in Banten, a Russian strike kills 2 in
// Zaporizhzhia - with a markets strip below.
// The program copies the image to /output/entry.png, byte for byte, every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
