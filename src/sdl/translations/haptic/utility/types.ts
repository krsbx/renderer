import {
  HapticDirectionType,
  HapticEffectType,
} from '../../../ffi/haptic/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { HapticDirection } from './haptic-direction';

export interface RawHapticDirection extends FreeAddress, MemoryAddress {
  type: HapticDirectionType;
  dir: [number, number, number];
}

export interface RawHapticConstant extends FreeAddress, MemoryAddress {
  /* Header */
  type: HapticEffectType;
  direction: HapticDirection;

  /* Replay */
  length: number;
  delay: number;

  /* Trigger */
  button: number;
  interval: number;

  /* Constant */
  level: number;

  /* Envelope */
  attack_length: number;
  attack_level: number;
  fade_length: number;
  fade_level: number;
}

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

export interface RawHapticRamp extends FreeAddress, MemoryAddress {
  /* Header */
  type: HapticEffectType;
  direction: HapticDirection;

  /* Replay */
  length: number;
  delay: number;

  /* Trigger */
  button: number;
  interval: number;

  /* Ramp */
  start: number;
  end: number;

  /* Envelope */
  attack_length: number;
  attack_level: number;
  fade_length: number;
  fade_level: number;
}

export interface RawHapticLeftRight extends FreeAddress, MemoryAddress {
  /* Header */
  type: HapticEffectType;

  /* Replay */
  length: number;

  /* Rumble */
  large_magnitude: number;
  small_magnitude: number;
}

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
