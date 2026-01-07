import type { PathType } from '../../../ffi/file-system/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawPathInfo extends FreeAddress, MemoryAddress {
  type: PathType;
  size: bigint;
  create_time: bigint;
  modify_time: bigint;
  access_time: bigint;
}
