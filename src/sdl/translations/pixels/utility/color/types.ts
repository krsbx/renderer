import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawColor extends FreeAddress, MemoryAddress {
  r: number;
  g: number;
  b: number;
  a: number;
}
