import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { AtomicInt } from '../../atomic/utility/atomic-int.snapshot.ts';

export interface RawInitState extends FreeAddress, MemoryAddress {
  status: AtomicInt;
  thread: bigint;
  reserved: bigint;
}
