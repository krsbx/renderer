import { type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { TouchDeviceType } from '../../../ffi/touch/constant';
import { CStruct } from '../../../utility/cstruct';
import { Finger } from '../utility';

export function getTouchDevices(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetTouchDevices(countStruct.$address);

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const devices: bigint[] = [];

  for (let i = 0; i < count; i++) {
    const deviceId = list.getValue(i * CStruct.BYTE_SIZE.u64, 'u64');

    devices.push(deviceId);
  }

  this.symbols.SDL_free(listPtr);

  return devices;
}

export function getTouchDeviceName(this: SDL, touchId: bigint) {
  return this.symbols.SDL_GetTouchDeviceName(touchId);
}

export function getTouchDeviceType(this: SDL, touchId: bigint) {
  return this.symbols.SDL_GetTouchDeviceType(touchId) as TouchDeviceType;
}

export function getTouchFingers(this: SDL, touchId: bigint) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetTouchFingers(
    touchId,
    countStruct.$address
  ) as Pointer | null;

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const fingers: Finger[] = [];

  for (let i = 0; i < count; i++) {
    const fingerPtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (!fingerPtr) continue;

    const sdlFinger = new Finger(fingerPtr);
    // Clone the finger so it become a snapshot
    const finger = new Finger(sdlFinger.$memory.slice());

    fingers.push(finger);
  }

  this.symbols.SDL_free(listPtr);

  return fingers;
}
