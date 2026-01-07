import type { FreeAddress, MemoryAddress } from '../../../../types/shared';
import type { Color } from '../color/color.snapshot';

export interface RawPalette extends FreeAddress, MemoryAddress {
  ncolors: number;
  colors: Color[];
  version: number;
  refcount: number;
}
