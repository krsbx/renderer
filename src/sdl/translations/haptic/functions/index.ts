import { ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';
import { HapticEffect } from '../utility';

export function getHaptics(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetHaptics(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const haptics: number[] = [];

  for (let i = 0; i < count; i++) {
    const id = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    haptics.push(id);
  }

  this.symbols.SDL_free(listPtr);

  return haptics;
}

export function getHapticNameForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetHapticNameForID(instanceId);
}

export function openHaptic(this: SDL, instanceId: number) {
  return this.symbols.SDL_OpenHaptic(instanceId);
}

export function getHapticFromID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetHapticFromID(instanceId);
}

export function getHapticID(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_GetHapticID(haptic);
}

export function getHapticName(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_GetHapticName(haptic);
}

export function isMouseHaptic(this: SDL) {
  return this.symbols.SDL_IsMouseHaptic();
}

export function openHapticFromMouse(this: SDL) {
  return this.symbols.SDL_OpenHapticFromMouse();
}

export function isJoystickHaptic(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_IsJoystickHaptic(joystick);
}

export function openHapticFromJoystick(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_OpenHapticFromJoystick(joystick);
}

export function closeHaptic(this: SDL, haptic: Pointer) {
  this.symbols.SDL_CloseHaptic(haptic);
}

export function getMaxHapticEffects(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_GetMaxHapticEffects(haptic);
}

export function getMaxHapticEffectsPlaying(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_GetMaxHapticEffectsPlaying(haptic);
}

export function getHapticFeatures(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_GetHapticFeatures(haptic);
}

export function getNumHapticAxes(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_GetNumHapticAxes(haptic);
}

export function hapticEffectSupported(
  this: SDL,
  options: {
    haptic: Pointer;
    effect: HapticEffect | Pointer;
  }
) {
  const effectPtr =
    options.effect instanceof HapticEffect
      ? options.effect.$address
      : options.effect;

  return this.symbols.SDL_HapticEffectSupported(options.haptic, effectPtr);
}

export function createHapticEffect(
  this: SDL,
  options: {
    haptic: Pointer;
    effect: HapticEffect | Pointer;
  }
) {
  const effectPtr =
    options.effect instanceof HapticEffect
      ? options.effect.$address
      : options.effect;

  return this.symbols.SDL_CreateHapticEffect(options.haptic, effectPtr);
}

export function updateHapticEffect(
  this: SDL,
  options: {
    haptic: Pointer;
    effect: number;
    data: HapticEffect | Pointer | Uint8Array;
  }
) {
  const dataPtr =
    options.data instanceof HapticEffect
      ? options.data.$address
      : options.data instanceof Uint8Array
        ? ptr(options.data)
        : options.data;

  return this.symbols.SDL_UpdateHapticEffect(
    options.haptic,
    options.effect,
    dataPtr
  );
}

export function runHapticEffect(
  this: SDL,
  options: {
    haptic: Pointer;
    effect: number;
    iterations: number;
  }
) {
  return this.symbols.SDL_RunHapticEffect(
    options.haptic,
    options.effect,
    options.iterations
  );
}

export function stopHapticEffect(
  this: SDL,
  options: {
    haptic: Pointer;
    effect: number;
  }
) {
  return this.symbols.SDL_StopHapticEffect(options.haptic, options.effect);
}

export function destroyHapticEffect(
  this: SDL,
  options: {
    haptic: Pointer;
    effect: number;
  }
) {
  this.symbols.SDL_DestroyHapticEffect(options.haptic, options.effect);
}

export function getHapticEffectStatus(
  this: SDL,
  options: {
    haptic: Pointer;
    effect: number;
  }
) {
  return this.symbols.SDL_GetHapticEffectStatus(options.haptic, options.effect);
}

export function setHapticGain(
  this: SDL,
  options: {
    haptic: Pointer;
    gain: number;
  }
) {
  return this.symbols.SDL_SetHapticGain(options.haptic, options.gain);
}

export function setHapticAutocenter(
  this: SDL,
  options: {
    haptic: Pointer;
    autocenter: number;
  }
) {
  return this.symbols.SDL_SetHapticAutocenter(
    options.haptic,
    options.autocenter
  );
}

export function pauseHaptic(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_PauseHaptic(haptic);
}

export function resumeHaptic(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_ResumeHaptic(haptic);
}

export function stopHapticEffects(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_StopHapticEffects(haptic);
}

export function hapticRumbleSupported(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_HapticRumbleSupported(haptic);
}

export function initHapticRumble(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_InitHapticRumble(haptic);
}

export function playHapticRumble(
  this: SDL,
  options: {
    haptic: Pointer;
    strength: number;
    length: number;
  }
) {
  return this.symbols.SDL_PlayHapticRumble(
    options.haptic,
    options.strength,
    options.length
  );
}

export function stopHapticRumble(this: SDL, haptic: Pointer) {
  return this.symbols.SDL_StopHapticRumble(haptic);
}
