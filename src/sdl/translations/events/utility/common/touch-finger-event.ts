import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { RawTouchFingerEvent, TouchFingerEventType } from '../types';

export class TouchFingerEvent implements RawTouchFingerEvent {
  public type: TouchFingerEventType;
  public reserved: number;
  public timestamp: bigint;
  public touchID: bigint;
  public fingerID: bigint;
  public x: number;
  public y: number;
  public dx: number;
  public dy: number;
  public pressure: number;
  public windowID: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawTouchFingerEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.touchID = options.touchID;
    this.fingerID = options.fingerID;
    this.x = options.x;
    this.y = options.y;
    this.dx = options.dx;
    this.dy = options.dy;
    this.pressure = options.pressure;
    this.windowID = options.windowID;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = TouchFingerEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setBigUint64(16, this.touchID, true);
    view.setBigUint64(24, this.fingerID, true);
    view.setFloat32(32, this.x, true);
    view.setFloat32(36, this.y, true);
    view.setFloat32(40, this.dx, true);
    view.setFloat32(44, this.dy, true);
    view.setFloat32(48, this.pressure, true);
    view.setUint32(52, this.windowID, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(56);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      touchID: read.u64(pointer, 16),
      fingerID: read.u64(pointer, 24),
      x: read.f32(pointer, 32),
      y: read.f32(pointer, 36),
      dx: read.f32(pointer, 40),
      dy: read.f32(pointer, 44),
      pressure: read.f32(pointer, 48),
      windowID: read.u32(pointer, 52),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawTouchFingerEvent;

    return new TouchFingerEvent(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      touchID: view.getBigUint64(16, true),
      fingerID: view.getBigUint64(24, true),
      x: view.getFloat32(32, true),
      y: view.getFloat32(36, true),
      dx: view.getFloat32(40, true),
      dy: view.getFloat32(44, true),
      pressure: view.getFloat32(48, true),
      windowID: view.getUint32(52, true),
      free: null,
      address: null,
    } as RawTouchFingerEvent;

    return new TouchFingerEvent(result);
  }
}
