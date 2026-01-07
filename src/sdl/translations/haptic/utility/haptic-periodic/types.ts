import { HapticEffectType } from '../../../../ffi/haptic/constant';
import type { FreeAddress, MemoryAddress } from '../../../../types/shared';
import type { HapticDirection } from '../haptic-direction/haptic-direction.snapshot';

export interface RawHapticPeriodic extends FreeAddress, MemoryAddress {
  /* Header */
  type: HapticEffectType;
  direction: HapticDirection;

  /* Replay */
  length: number;
  delay: number;

  /* Trigger */
  button: number;
  interval: number;

  /* Periodic */
  period: number;
  magnitude: number;
  offset: number;
  phase: number;

  /* Envelope */
  attack_length: number;
  attack_level: number;
  fade_length: number;
  fade_level: number;
}
