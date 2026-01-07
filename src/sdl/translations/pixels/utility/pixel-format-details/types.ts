import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawPixelFormatDetails extends FreeAddress, MemoryAddress {
  format: number;
  bits_per_pixel: number;
  bytes_per_pixel: number;
  Rmask: number;
  Gmask: number;
  Bmask: number;
  Amask: number;
  Rbits: number;
  Gbits: number;
  Bbits: number;
  Abits: number;
  Rshift: number;
  Gshift: number;
  Bshift: number;
  Ashift: number;
}
