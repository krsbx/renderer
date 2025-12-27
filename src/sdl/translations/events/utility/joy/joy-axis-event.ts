import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { JoyAxisEventType, RawJoyAxisEvent } from '../types';

export class JoyAxisEvent implements RawJoyAxisEvent {
  public type: JoyAxisEventType;
  public reserved: number;
  public timestamp: bigint;
  public which: number;
  public axis: number;
  public padding1: number;
  public padding2: number;
  public padding3: number;
  public value: number;
  public padding4: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawJoyAxisEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.which = options.which;
    this.axis = options.axis;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.padding3 = options.padding3;
    this.value = options.value;
    this.padding4 = options.padding4;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = JoyAxisEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.which, true);
    view.setUint8(20, this.axis);
    view.setUint8(21, this.padding1);
    view.setUint8(22, this.padding2);
    view.setUint8(23, this.padding3);
    view.setInt16(24, this.value, true);
    view.setInt16(26, this.padding4);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(32);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      which: read.u32(pointer, 16),
      axis: read.u8(pointer, 20),
      padding1: read.u8(pointer, 21),
      padding2: read.u8(pointer, 22),
      padding3: read.u8(pointer, 23),
      value: read.i16(pointer, 24),
      padding4: read.i16(pointer, 26),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawJoyAxisEvent;

    return new JoyAxisEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      which: view.getUint32(16, true),
      axis: view.getUint8(20),
      padding1: view.getUint8(21),
      padding2: view.getUint8(22),
      padding3: view.getUint8(23),
      value: view.getInt16(24, true),
      padding4: view.getInt16(26),
      free: null,
      address: null,
    } as RawJoyAxisEvent;

    return new JoyAxisEvent(result);
  }
}
