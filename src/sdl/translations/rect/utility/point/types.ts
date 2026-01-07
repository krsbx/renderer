import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawPoint extends FreeAddress, MemoryAddress {
  x: number;
  y: number;
}
