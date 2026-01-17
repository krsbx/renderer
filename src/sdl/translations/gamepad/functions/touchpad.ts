import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';

export function getNumGamepadTouchpads(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetNumGamepadTouchpads(gamepad);
}

export function getNumGamepadTouchpadFingers(
  this: SDL,
  options: {
    gamepad: Pointer;
    touchpad: number;
  }
) {
  return this.symbols.SDL_GetNumGamepadTouchpadFingers(
    options.gamepad,
    options.touchpad
  );
}

export function getGamepadTouchpadFinger(
  this: SDL,
  options: {
    gamepad: Pointer;
    touchpad: number;
    finger: number;
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
    downStruct.$address,
    xStruct.$address,
    yStruct.$address,
    pressureStruct.$address
  );

  if (!success) return null;

  return {
    down: downStruct.getValue(0, 'u8') === 1,
    x: xStruct.getValue(0, 'f32'),
    y: yStruct.getValue(0, 'f32'),
    pressure: pressureStruct.getValue(0, 'f32'),
  };
}
