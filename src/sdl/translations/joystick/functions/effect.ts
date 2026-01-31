import type { SDL } from '@/sdl';
import type { Joystick } from '@/sdl/types/definition';

export function rumbleJoystick(
  this: SDL,
  options: {
    joystick: Joystick;
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
    joystick: Joystick;
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
    joystick: Joystick;
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
