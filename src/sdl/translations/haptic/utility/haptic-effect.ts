import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { HapticEffectType } from '../../../ffi/haptic/constant';
import { HapticCondition } from './haptic-condition';
import { HapticConstant } from './haptic-constant';
import { HapticCustom } from './haptic-custom';
import { HapticLeftRight } from './haptic-left-right';
import { HapticPeriodic } from './haptic-periodic';
import { HapticRamp } from './haptic-ramp';

export class HapticEffect {
  public static readonly BYTE_SIZE = 72;

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(...args: [pointer: Pointer, sdl: BaseSDL]) {
    const type = read.u16(args[0], 0);

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
