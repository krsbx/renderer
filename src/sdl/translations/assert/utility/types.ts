import type { Pointer } from 'bun:ffi';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawAssertData extends FreeAddress, MemoryAddress {
  always_ignore: boolean /**< true if app should always continue when assertion is triggered. */;
  trigger_count: number /**< Number of times this assertion has been triggered. */;
  condition: string /**< A string of this assert's test code. */;
  filename: string /**< The source file where this assert lives. */;
  linenum: number /**< The line in `filename` where this assert lives. */;
  function: string /**< The name of the function where this assert lives. */;
  next: Pointer | null /**< next item in the linked list. */;
}
