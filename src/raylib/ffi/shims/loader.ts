import { cc } from 'bun:ffi';
import path from 'node:path';
import { ShimDefinition } from './definition';

export function loadShim(headerPath: string) {
  const headerDir = path.dirname(headerPath);

  return cc({
    source: path.join(__dirname, 'core.c'),
    flags: [
      `-I${headerDir}`, // For raylib.h
      `-I${__dirname}`, // For categories/*.c and macro.h
    ],
    symbols: ShimDefinition,
  });
}
