import type { SDL } from '@/sdl';
import type { Joystick } from '@/sdl/types/definition';
import type { UInt8, UInt16, UInt32 } from '@/types/primitive';

export function rumbleJoystick(
  this: SDL,
  options: {
    joystick: Joystick;
    lowFrequencyRumble: UInt16;
    highFrequencyRumble: UInt16;
    durationMs: UInt32;
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
    joystick: Joystick;
    leftRumble: UInt16;
    rightRumble: UInt16;
    durationMs: UInt32;
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
    joystick: Joystick;
    red: UInt8;
    green: UInt8;
    blue: UInt8;
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
    joystick: Joystick;
    data: Uint8Array;
  }
) {
  return this.symbols.SDL_SendJoystickEffect(
    options.joystick,
    options.data,
    options.data.byteLength
  );
}
