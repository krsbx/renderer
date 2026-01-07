import type { HapticDirectionType } from '../../../../ffi/haptic/constant';
import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawHapticDirection extends FreeAddress, MemoryAddress {
  type: HapticDirectionType;
  dir: [number, number, number];
}
