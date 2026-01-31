import type { SDL } from '@/sdl';
import type { Gamepad } from '@/sdl/types/definition';

export function rumbleGamepad(
  this: SDL,
  options: {
    gamepad: Gamepad;
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
    gamepad: Gamepad;
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
    gamepad: Gamepad;
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
    gamepad: Gamepad;
    data: Uint8Array;
  }
) {
  return this.symbols.SDL_SendGamepadEffect(
    options.gamepad,
    options.data,
    options.data.byteLength
  );
}
