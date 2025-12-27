import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { PowerState } from '../../../../ffi/power/constant';
import type { JoyBatteryEventType, RawJoyBatteryEvent } from '../types';

export class JoyBatteryEvent implements RawJoyBatteryEvent {
  public type: JoyBatteryEventType;
  public reserved: number;
  public timestamp: bigint;
  public which: number;
  public state: PowerState;
  public percent: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawJoyBatteryEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.which = options.which;
    this.state = options.state;
    this.percent = options.percent;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = JoyBatteryEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.which, true);
    view.setInt32(20, this.state, true);
    view.setInt32(24, this.percent, true);

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
      state: read.i32(pointer, 20),
      percent: read.i32(pointer, 24),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawJoyBatteryEvent;

    return new JoyBatteryEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      which: view.getUint32(16, true),
      state: view.getInt32(20, true),
      percent: view.getInt32(24, true),
      free: null,
      address: null,
    } as RawJoyBatteryEvent;

    return new JoyBatteryEvent(result);
  }
}
