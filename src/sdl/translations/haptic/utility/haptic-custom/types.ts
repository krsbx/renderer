import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import type { FreeAddress, MemoryAddress } from '../../../../types/shared';
import type { HapticDirection } from '../haptic-direction/haptic-direction.snapshot';

export interface RawHapticCustom extends FreeAddress, MemoryAddress {
  /* Header */
  type: HapticEffectType;
  direction: HapticDirection;

  /* Replay */
  length: number;
  delay: number;

  /* Trigger */
  button: number;
  interval: number;

  /* Custom */
  channels: number;
  period: number;
  samples: number;
  data: Uint16Array;

  /* Envelope */
  attack_length: number;
  attack_level: number;
  fade_length: number;
  fade_level: number;
}
