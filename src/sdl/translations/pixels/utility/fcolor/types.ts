import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawFColor extends FreeAddress, MemoryAddress {
  r: number;
  g: number;
  b: number;
  a: number;
}
