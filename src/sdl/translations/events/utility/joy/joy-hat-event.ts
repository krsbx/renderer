import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { EventType } from '../../../../ffi/events/constant';
import type { RawJoyHatEvent } from '../types';

export class JoyHatEvent implements RawJoyHatEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public which: number;
  public hat: number;
  public value: number;
  public padding1: number;
  public padding2: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawJoyHatEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.which = options.which;
    this.hat = options.hat;
    this.value = options.value;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = JoyHatEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.which, true);
    view.setUint8(20, this.hat);
    view.setUint8(21, this.value);
    view.setUint8(22, this.padding1);
    view.setUint8(23, this.padding2);

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
      hat: read.u8(pointer, 20),
      value: read.u8(pointer, 21),
      padding1: read.u8(pointer, 22),
      padding2: read.u8(pointer, 23),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawJoyHatEvent;

    return new JoyHatEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      which: view.getUint32(16, true),
      hat: view.getUint8(20),
      value: view.getUint8(21),
      padding1: view.getUint8(22),
      padding2: view.getUint8(23),
      free: null,
      address: null,
    } as RawJoyHatEvent;

    return new JoyHatEvent(result);
  }
}
