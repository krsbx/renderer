import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawGUID extends FreeAddress, MemoryAddress {
  data: number[];
}
