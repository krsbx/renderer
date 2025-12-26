import { type Pointer } from 'bun:ffi';

export interface WidthHeight {
  w: number;
  h: number;
}

export interface Vector2 {
  x: number;
  y: number;
}

export interface Vector3 extends Vector2 {
  z: number;
}

export interface FreeAddress {
  /**
   * Free the address from the memory
   */
  free: (() => void) | null;
}

export interface MemoryAddress {
  /**
   * The address to resource in memory
   */
  address: Pointer | null;
}
