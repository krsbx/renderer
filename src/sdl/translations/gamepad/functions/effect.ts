import type { SDL } from '@/sdl';
import { type Pointer } from 'bun:ffi';

export function rumbleGamepad(
  this: SDL,
  options: {
    gamepad: Pointer;
    lowFrequencyRumble: number;
    highFrequencyRumble: number;
    durationMs: number;
  }
) {
  return this.symbols.SDL_RumbleGamepad(
    options.gamepad,
    options.lowFrequencyRumble,
    options.highFrequencyRumble,
    options.durationMs
  );
}

export function rumbleGamepadTriggers(
  this: SDL,
  options: {
    gamepad: Pointer;
    leftRumble: number;
    rightRumble: number;
    durationMs: number;
  }
) {
  return this.symbols.SDL_RumbleGamepadTriggers(
    options.gamepad,
    options.leftRumble,
    options.rightRumble,
    options.durationMs
  );
}

export function setGamepadLED(
  this: SDL,
  options: {
    gamepad: Pointer;
    red: number;
    green: number;
    blue: number;
  }
) {
  return this.symbols.SDL_SetGamepadLED(
    options.gamepad,
    options.red,
    options.green,
    options.blue
  );
}

export function sendGamepadEffect(
  this: SDL,
  options: {
    gamepad: Pointer;
    data: Uint8Array;
    size: number;
  }
) {
  return this.symbols.SDL_SendGamepadEffect(
    options.gamepad,
    options.data,
    options.size
  );
}
