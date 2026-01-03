import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { DropEventType, RawDropEvent } from '../types';

export class DropEvent implements RawDropEvent {
  public static readonly BYTE_SIZE = 48;

  public type: DropEventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public x: number;
  public y: number;
  public source: string;
  public data: string;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawDropEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.x = options.x;
    this.y = options.y;
    this.source = options.source;
    this.data = options.data;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = DropEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);
    view.setFloat32(20, this.x, true);
    view.setFloat32(24, this.y, true);
    view.setBigUint64(32, 0n, true);
    view.setBigUint64(40, 0n, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const sourceAddr = read.ptr(pointer, 32);
    const dataAddr = read.ptr(pointer, 40);

    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      x: read.f32(pointer, 20),
      y: read.f32(pointer, 24),
      source: sourceAddr
        ? new CString(sourceAddr as unknown as Pointer).toString()
        : '',
      data: dataAddr
        ? new CString(dataAddr as unknown as Pointer).toString()
        : '',
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawDropEvent;

    return new DropEvent(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const sourceAddr = view.getBigUint64(32, true);
    const dataAddr = view.getBigUint64(40, true);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      x: view.getFloat32(20, true),
      y: view.getFloat32(24, true),
      source:
        sourceAddr !== 0n
          ? new CString(sourceAddr as unknown as Pointer).toString()
          : '',
      data:
        dataAddr !== 0n
          ? new CString(dataAddr as unknown as Pointer).toString()
          : '',
      free: null,
      address: null,
    } as RawDropEvent;

    return new DropEvent(result);
  }
}
