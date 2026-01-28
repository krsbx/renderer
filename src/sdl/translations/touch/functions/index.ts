import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import type { TouchDeviceType } from '../../../ffi/touch/constant';
import { Finger } from '../utility';

export function getTouchDevices(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetTouchDevices(countStruct.$address);

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const devices = CStruct.readArrayPrimitive(listPtr, count, 'u64');

  this.symbols.SDL_free(listPtr);

  return devices;
}

export function getTouchDeviceName(this: SDL, touchId: bigint) {
  return this.symbols.SDL_GetTouchDeviceName(touchId).toString();
}

export function getTouchDeviceType(this: SDL, touchId: bigint) {
  return this.symbols.SDL_GetTouchDeviceType(touchId) as TouchDeviceType;
}

export function getTouchFingers(this: SDL, touchId: bigint) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetTouchFingers(
    touchId,
    countStruct.$address
  );

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const fingers = CStruct.readArray(Finger, listPtr, count, true);

  this.symbols.SDL_free(listPtr);

  return fingers;
}
