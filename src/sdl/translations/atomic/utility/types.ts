import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawAtomicInt extends FreeAddress, MemoryAddress {
  value: number;
}
