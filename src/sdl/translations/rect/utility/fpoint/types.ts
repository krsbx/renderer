import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawFPoint extends FreeAddress, MemoryAddress {
  x: number;
  y: number;
}
