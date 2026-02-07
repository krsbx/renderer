import type { SDL } from '@/sdl';
import type { Gamepad } from '@/sdl/types/definition';
import type { Float, Int32 } from '@/types/primitive';
import { CStruct } from '@cstruct';

export function getNumGamepadTouchpads(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetNumGamepadTouchpads(gamepad) as Int32;
}

export function getNumGamepadTouchpadFingers(
  this: SDL,
  options: {
    gamepad: Gamepad;
    touchpad: Int32;
  }
) {
  return this.symbols.SDL_GetNumGamepadTouchpadFingers(
    options.gamepad,
    options.touchpad
  ) as Int32;
}

export function getGamepadTouchpadFinger(
  this: SDL,
  options: {
    gamepad: Gamepad;
    touchpad: Int32;
    finger: Int32;
  }
) {
  const downStruct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const xStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const yStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });
  const pressureStruct = new CStruct({ length: CStruct.BYTE_SIZE.f32 });

  const success = this.symbols.SDL_GetGamepadTouchpadFinger(
    options.gamepad,
    options.touchpad,
    options.finger,
    downStruct.$memory,
    xStruct.$memory,
    yStruct.$memory,
    pressureStruct.$memory
  );

  if (!success) return null;

  return {
    down: downStruct.getValue(0, 'u8') === 1,
    x: xStruct.getValue(0, 'f32') as Float,
    y: yStruct.getValue(0, 'f32') as Float,
    pressure: pressureStruct.getValue(0, 'f32') as Float,
  };
}
