import type { Pointer } from 'bun:ffi';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawAssertData extends FreeAddress, MemoryAddress {
  always_ignore: boolean;
  trigger_count: number;
  condition: string;
  filename: string;
  linenum: number;
  function: string;
  next: Pointer | null;
}
