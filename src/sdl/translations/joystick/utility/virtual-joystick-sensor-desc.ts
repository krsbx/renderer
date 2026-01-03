import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { SensorType } from '../../../ffi/sensor/constant';
import type { RawVirtualJoystickSensorDesc } from './types';

export class VirtualJoystickSensorDesc implements RawVirtualJoystickSensorDesc {
  public static readonly BYTE_SIZE = 8;

  public type: SensorType;
  public rate: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawVirtualJoystickSensorDesc) {
    this.type = options.type;
    this.rate = options.rate;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = VirtualJoystickSensorDesc.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.type, true);
    view.setFloat32(4, this.rate, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.i32(pointer, 0),
      rate: read.f32(pointer, 4),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawVirtualJoystickSensorDesc;

    return new VirtualJoystickSensorDesc(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getInt32(0, true),
      rate: view.getFloat32(4, true),
      free: null,
      address: null,
    } as RawVirtualJoystickSensorDesc;

    return new VirtualJoystickSensorDesc(result);
  }
}
