import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawSurface extends FreeAddress, MemoryAddress {
  flags: number;
  format: number;
  w: number;
  h: number;
  pitch: number;
  pixels: bigint;
  refcount: number;
}
