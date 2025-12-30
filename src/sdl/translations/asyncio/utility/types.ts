import type { Pointer } from 'bun:ffi';
import type {
  AsyncIOResult,
  AsyncIOTaskType,
} from '../../../ffi/asyncio/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawAsyncIOOutcome extends FreeAddress, MemoryAddress {
  asyncio: Pointer | null;
  type: AsyncIOTaskType;
  result: AsyncIOResult;
  buffer: Pointer | null;
  offset: bigint;
  bytes_requested: bigint;
  bytes_transferred: bigint;
  userdata: Pointer | null;
}
