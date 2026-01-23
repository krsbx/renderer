import { type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { getStructMemoryAddress } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';

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
    data: CStruct | Pointer | Uint8Array;
    size: number;
  }
) {
  return this.symbols.SDL_SendGamepadEffect(
    options.gamepad,
    getStructMemoryAddress(options.data),
    options.size
  );
}
