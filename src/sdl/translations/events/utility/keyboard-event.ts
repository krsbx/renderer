import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { EventType } from '../../../ffi/events/constant';
import type { RawKeyboardEvent } from '../types';

export class KeyboardEvent implements RawKeyboardEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public which: number;
  public scancode: number;
  public key: number;
  public mod: number;
  public raw: number;
  public down: boolean;
  public repeat: boolean;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawKeyboardEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.which = options.which;
    this.scancode = options.scancode;
    this.key = options.key;
    this.mod = options.mod;
    this.raw = options.raw;
    this.down = options.down;
    this.repeat = options.repeat;
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
    view.setUint32(24, this.scancode, true);
    view.setUint32(28, this.key, true);
    view.setUint16(32, this.mod, true);
    view.setUint16(34, this.raw, true);
    view.setUint8(36, this.down ? 1 : 0);
    view.setUint8(37, this.repeat ? 1 : 0);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      which: read.u32(pointer, 20),
      scancode: read.u32(pointer, 24),
      key: read.u32(pointer, 28),
      mod: read.u16(pointer, 32),
      raw: read.u16(pointer, 34),
      down: read.u8(pointer, 36) === 1,
      repeat: read.u8(pointer, 37) === 1,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawKeyboardEvent;

    return new KeyboardEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      which: view.getUint32(20, true),
      scancode: view.getUint32(24, true),
      key: view.getUint32(28, true),
      mod: view.getUint16(32, true),
      raw: view.getUint16(34, true),
      down: view.getUint8(36) === 1,
      repeat: view.getUint8(37) === 1,
      free: null,
      address: null,
    } as RawKeyboardEvent;

    return new KeyboardEvent(result);
  }
}
