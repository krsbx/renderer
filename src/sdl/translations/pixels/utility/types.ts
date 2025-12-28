import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import { Color } from './color';

export interface RawColor extends FreeAddress, MemoryAddress {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface RawFColor extends FreeAddress, MemoryAddress {
  r: number;
  g: number;
  b: number;
  a: number;
}

export interface RawPalette extends FreeAddress, MemoryAddress {
  ncolors: number;
  colors: Color[];
  version: number;
  refcount: number;
}

export interface RawPixelFormatDetails extends FreeAddress, MemoryAddress {
  format: number;
  bits_per_pixel: number;
  bytes_per_pixel: number;
  padding: [padding1: number, padding2: number];
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
