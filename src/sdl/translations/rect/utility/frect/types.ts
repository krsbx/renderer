import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawFRect extends FreeAddress, MemoryAddress {
  x: number;
  y: number;
  w: number;
  h: number;
}
