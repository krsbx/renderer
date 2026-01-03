import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { PinchFingerEventType, RawPinchFingerEvent } from '../types';

export class PinchFingerEvent implements RawPinchFingerEvent {
  public static readonly BYTE_SIZE = 24;

  public type: PinchFingerEventType;
  public reserved: number;
  public timestamp: bigint;
  public scale: number;
  public windowID: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawPinchFingerEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.scale = options.scale;
    this.windowID = options.windowID;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = PinchFingerEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setFloat32(16, this.scale, true);
    view.setUint32(20, this.windowID, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      scale: read.f32(pointer, 16),
      windowID: read.u32(pointer, 20),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawPinchFingerEvent;

    return new PinchFingerEvent(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      scale: view.getFloat32(16, true),
      windowID: view.getUint32(20, true),
      free: null,
      address: null,
    } as RawPinchFingerEvent;

    return new PinchFingerEvent(result);
  }
}
