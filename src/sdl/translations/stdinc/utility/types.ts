import type { Pointer } from 'bun:ffi';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawAlignmentTest extends FreeAddress, MemoryAddress {
  a: number;
  b: Pointer;
}
