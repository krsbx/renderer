import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { RawRenderEvent, RenderEventType } from '../types';

export class RenderEvent implements RawRenderEvent {
  public type: RenderEventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawRenderEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = RenderEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(24);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawRenderEvent;

    return new RenderEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      free: null,
      address: null,
    } as RawRenderEvent;

    return new RenderEvent(result);
  }
}
