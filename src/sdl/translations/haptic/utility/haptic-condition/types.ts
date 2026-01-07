import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import type { FreeAddress, MemoryAddress } from '../../../../types/shared';
import type { HapticDirection } from '../haptic-direction/haptic-direction.snapshot';

export interface RawHapticCondition extends FreeAddress, MemoryAddress {
  /* Header */
  type: HapticEffectType;
  direction: HapticDirection;

  /* Replay */
  length: number;
  delay: number;

  /* Trigger */
  button: number;
  interval: number;

  /* Condition */
  right_sat: [number, number, number];
  left_sat: [number, number, number];
  right_coeff: [number, number, number];
  left_coeff: [number, number, number];
  deadband: [number, number, number];
  center: [number, number, number];
}
