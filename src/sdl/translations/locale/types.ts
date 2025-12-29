import type { FreeAddress, MemoryAddress } from '../../types/shared';

export interface RawLocale extends FreeAddress, MemoryAddress {
  language: string;
  country: string;
}
