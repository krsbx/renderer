import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { EventType } from '../../../ffi/events/constant';
import type { MouseButton } from '../../../ffi/mouse/constant';
import type { RawMouseButtonEvent } from '../types';

export class MouseButtonEvent implements RawMouseButtonEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public which: number;
  public button: MouseButton;
  public down: boolean;
  public clicks: number;
  public padding: number;
  public x: number;
  public y: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawMouseButtonEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.which = options.which;
    this.button = options.button;
    this.down = options.down;
    this.clicks = options.clicks;
    this.padding = options.padding;
    this.x = options.x;
    this.y = options.y;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = new Uint8Array(40);
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);
    view.setUint32(20, this.which, true);
    view.setUint8(24, this.button);
    view.setUint8(25, this.down ? 1 : 0);
    view.setUint8(26, this.clicks);
    view.setUint8(27, this.padding);
    view.setFloat32(28, this.x, true);
    view.setFloat32(32, this.y, true);

    return buffer;
  }

  public fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      which: read.u32(pointer, 20),
      button: read.u8(pointer, 24),
      down: read.u8(pointer, 25) === 1,
      clicks: read.u8(pointer, 26),
      padding: read.u8(pointer, 27),
      x: read.f32(pointer, 28),
      y: read.f32(pointer, 32),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawMouseButtonEvent;

    return new MouseButtonEvent(result);
  }

  public fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      which: view.getUint32(20, true),
      button: view.getUint8(24),
      down: view.getUint8(25) === 1,
      clicks: view.getInt8(26),
      padding: view.getInt8(27),
      x: view.getFloat32(28, true),
      y: view.getFloat32(32, true),
      free: null,
      address: null,
    } as RawMouseButtonEvent;

    return new MouseButtonEvent(result);
  }
}
