import { RAYLIB_ASSETS_PATH } from '@/utility/constant';
import { cc } from 'bun:ffi';
import path from 'node:path';
import { ShimDefinition } from './definition';

const SHIMS_PATH = path.join(RAYLIB_ASSETS_PATH, 'shims');

export function loadShim(headerPath: string) {
  const headerDir = path.dirname(headerPath);

  return cc({
    source: path.join(SHIMS_PATH, 'core.c'),
    flags: [
      `-I${headerDir}`, // For raylib.h
      `-I${SHIMS_PATH}`, // For categories/*.c and macro.h
    ],
    symbols: ShimDefinition,
  });
}
