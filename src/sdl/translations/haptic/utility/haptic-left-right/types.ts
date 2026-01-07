import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawHapticLeftRight extends FreeAddress, MemoryAddress {
  /* Header */
  type: HapticEffectType;

  /* Replay */
  length: number;

  /* Rumble */
  large_magnitude: number;
  small_magnitude: number;
}
