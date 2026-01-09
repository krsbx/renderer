import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawDialogFileFilter extends FreeAddress, MemoryAddress {
  name: string;
  pattern: string;
}
