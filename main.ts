// News-image entry for Tuesday 24 November 2026 (Node 22, standard library only).
// The image beside this file is the entry: a front page summing up the day's world
// news - Nvidia reinstates Huang as CEO (+31%), tankers hit mines in Hormuz, a
// Hamas security chief killed in Gaza, Ukraine sinks a Russian corvette off Libya,
// the ICJ finds Myanmar guilty of genocide, a factory fire kills 26 in Banten,
// a car bomb wounds 23 in Colombia - with a markets strip below.
// The program copies the image to /output/entry.png, byte for byte, every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
