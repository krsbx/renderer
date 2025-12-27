import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { EventType } from '../../../../ffi/events/constant';
import type { MouseButtonFlags } from '../../../../ffi/mouse/constant';
import type { RawMouseMotionEvent } from '../types';

export class MouseMotionEvent implements RawMouseMotionEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public which: number;
  public state: MouseButtonFlags;
  public x: number;
  public y: number;
  public xrel: number;
  public yrel: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawMouseMotionEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.which = options.which;
    this.state = options.state;
    this.x = options.x;
    this.y = options.y;
    this.xrel = options.xrel;
    this.yrel = options.yrel;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = new Uint8Array(48);
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);
    view.setUint32(20, this.which, true);
    view.setUint32(24, this.state, true);
    view.setFloat32(28, this.x, true);
    view.setFloat32(32, this.y, true);
    view.setFloat32(36, this.xrel, true);
    view.setFloat32(40, this.yrel, true);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      which: read.u32(pointer, 20),
      state: read.u32(pointer, 24),
      x: read.f32(pointer, 28),
      y: read.f32(pointer, 32),
      xrel: read.f32(pointer, 36),
      yrel: read.f32(pointer, 40),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawMouseMotionEvent;

    return new MouseMotionEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      which: view.getUint32(20, true),
      state: view.getUint32(24, true),
      x: view.getFloat32(28, true),
      y: view.getFloat32(32, true),
      xrel: view.getFloat32(36, true),
      yrel: view.getFloat32(40, true),
      free: null,
      address: null,
    } as RawMouseMotionEvent;

    return new MouseMotionEvent(result);
  }
}
