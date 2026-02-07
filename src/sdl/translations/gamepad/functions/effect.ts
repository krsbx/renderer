import type { SDL } from '@/sdl';
import type { Gamepad } from '@/sdl/types/definition';
import type { UInt8, UInt16, UInt32 } from '@/types/primitive';

export function rumbleGamepad(
  this: SDL,
  options: {
    gamepad: Gamepad;
    lowFrequencyRumble: UInt16;
    highFrequencyRumble: UInt16;
    durationMs: UInt32;
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
    leftRumble: UInt16;
    rightRumble: UInt16;
    durationMs: UInt32;
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
    red: UInt8;
    green: UInt8;
    blue: UInt8;
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
