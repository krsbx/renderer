import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawMessageBoxColor extends FreeAddress, MemoryAddress {
  r: number;
  g: number;
  b: number;
}
