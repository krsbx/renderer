import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { AtomicInt } from '../../atomic/utility/atomic-int';

export interface RawInitState extends FreeAddress, MemoryAddress {
  status: AtomicInt;
  thread: bigint;
  reserved: bigint;
}
