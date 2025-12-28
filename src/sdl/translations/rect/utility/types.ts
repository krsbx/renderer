import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawPoint extends FreeAddress, MemoryAddress {
  x: number;
  y: number;
}

export interface RawFPoint extends FreeAddress, MemoryAddress {
  x: number;
  y: number;
}

export interface RawRect extends FreeAddress, MemoryAddress {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface RawFRect extends FreeAddress, MemoryAddress {
  x: number;
  y: number;
  w: number;
  h: number;
}
