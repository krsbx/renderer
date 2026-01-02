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
  public static allocMemory() {
    const buffer = new Uint8Array(72);

    return buffer;
  }

  public static fromPointer(...args: [pointer: Pointer, sdl: BaseSDL]) {
    const type = read.u16(args[0], 0);

    switch (type) {
      case HapticEffectType.SDL_HAPTIC_CONSTANT:
        return HapticConstant.fromPointer(...args);

      case HapticEffectType.SDL_HAPTIC_SINE:
      case HapticEffectType.SDL_HAPTIC_SQUARE:
      case HapticEffectType.SDL_HAPTIC_TRIANGLE:
      case HapticEffectType.SDL_HAPTIC_SAWTOOTHUP:
      case HapticEffectType.SDL_HAPTIC_SAWTOOTHDOWN:
        return HapticPeriodic.fromPointer(...args);

      case HapticEffectType.SDL_HAPTIC_RAMP:
        return HapticRamp.fromPointer(...args);

      case HapticEffectType.SDL_HAPTIC_SPRING:
      case HapticEffectType.SDL_HAPTIC_DAMPER:
      case HapticEffectType.SDL_HAPTIC_INERTIA:
      case HapticEffectType.SDL_HAPTIC_FRICTION:
        return HapticCondition.fromPointer(...args);

      case HapticEffectType.SDL_HAPTIC_LEFTRIGHT:
        return HapticLeftRight.fromPointer(...args);

      case HapticEffectType.SDL_HAPTIC_CUSTOM:
        return HapticCustom.fromPointer(...args);

      default:
        // For unknown types or simple feature queries
        return { type };
    }
  }
}
