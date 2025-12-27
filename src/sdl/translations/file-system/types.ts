import type { FreeAddress, MemoryAddress } from '../../types/shared';

export interface RawPathInfo extends FreeAddress, MemoryAddress {
  type: number;
  size: bigint;
  create_time: bigint;
  modify_time: bigint;
  access_time: bigint;
}
