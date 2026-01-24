import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructMemoryAddress } from '@utility/common';
import { type Pointer } from 'bun:ffi';

export function rumbleJoystick(
  this: SDL,
  options: {
    joystick: Pointer;
    lowFrequencyRumble: number;
    highFrequencyRumble: number;
    durationMs: number;
  }
) {
  return this.symbols.SDL_RumbleJoystick(
    options.joystick,
    options.lowFrequencyRumble,
    options.highFrequencyRumble,
    options.durationMs
  );
}

export function rumbleJoystickTriggers(
  this: SDL,
  options: {
    joystick: Pointer;
    leftRumble: number;
    rightRumble: number;
    durationMs: number;
  }
) {
  return this.symbols.SDL_RumbleJoystickTriggers(
    options.joystick,
    options.leftRumble,
    options.rightRumble,
    options.durationMs
  );
}

export function setJoystickLED(
  this: SDL,
  options: {
    joystick: Pointer;
    red: number;
    green: number;
    blue: number;
  }
) {
  return this.symbols.SDL_SetJoystickLED(
    options.joystick,
    options.red,
    options.green,
    options.blue
  );
}

export function sendJoystickEffect(
  this: SDL,
  options: {
    joystick: Pointer;
    data: CStruct | Uint8Array;
    size: number;
  }
) {
  return this.symbols.SDL_SendJoystickEffect(
    options.joystick,
    getStructMemoryAddress(options.data),
    options.size
  );
}
