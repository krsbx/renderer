import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { HapticEffectType } from '../../../../ffi/haptic/constant';
import { HapticCondition } from '../haptic-condition/haptic-condition.snapshot';
import { HapticConstant } from '../haptic-constant/haptic-constant.snapshot';
import { HapticCustom } from '../haptic-custom/haptic-custom.snapshot';
import { HapticLeftRight } from '../haptic-left-right/haptic-left-right.snapshot';
import { HapticPeriodic } from '../haptic-periodic/haptic-periodic.snapshot';
import { HapticRamp } from '../haptic-ramp/haptic-ramp.snapshot';
import { ByteOffset } from './constant';

export class HapticEffect {
  public static readonly BYTE_SIZE = 72;

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(...args: [pointer: Pointer, sdl: BaseSDL]) {
    const type = read.u16(args[0], ByteOffset.type);

    switch (type) {
      case HapticEffectType.CONSTANT:
        return HapticConstant.fromPointer(...args);

      case HapticEffectType.SINE:
      case HapticEffectType.SQUARE:
      case HapticEffectType.TRIANGLE:
      case HapticEffectType.SAWTOOTHUP:
      case HapticEffectType.SAWTOOTHDOWN:
        return HapticPeriodic.fromPointer(...args);

      case HapticEffectType.RAMP:
        return HapticRamp.fromPointer(...args);

      case HapticEffectType.SPRING:
      case HapticEffectType.DAMPER:
      case HapticEffectType.INERTIA:
      case HapticEffectType.FRICTION:
        return HapticCondition.fromPointer(...args);

      case HapticEffectType.LEFTRIGHT:
        return HapticLeftRight.fromPointer(...args);

      case HapticEffectType.CUSTOM:
        return HapticCustom.fromPointer(...args);

      default:
        // For unknown types or simple feature queries
        return { type };
    }
  }
}
