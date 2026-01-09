import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawFinger extends FreeAddress, MemoryAddress {
  id: bigint;
  x: number;
  y: number;
  pressure: number;
}
