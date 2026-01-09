import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawAudioSpec extends FreeAddress, MemoryAddress {
  format: number;
  channels: number;
  freq: number;
}
