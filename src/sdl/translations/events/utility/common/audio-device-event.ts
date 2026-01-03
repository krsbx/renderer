import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { AudioDeviceEventType, RawAudioDeviceEvent } from '../types';

export class AudioDeviceEvent implements RawAudioDeviceEvent {
  public static readonly BYTE_SIZE = 24;

  public type: AudioDeviceEventType;
  public reserved: number;
  public timestamp: bigint;
  public which: number;
  public recording: boolean;
  public padding1: number;
  public padding2: number;
  public padding3: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawAudioDeviceEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.which = options.which;
    this.recording = options.recording;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.padding3 = options.padding3;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = AudioDeviceEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.which, true);
    view.setUint8(20, this.recording ? 1 : 0);
    view.setUint8(21, this.padding1);
    view.setUint8(22, this.padding2);
    view.setUint8(23, this.padding3);

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
      which: read.u32(pointer, 16),
      recording: read.u8(pointer, 20) === 1,
      padding1: read.u8(pointer, 21),
      padding2: read.u8(pointer, 22),
      padding3: read.u8(pointer, 23),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawAudioDeviceEvent;

    return new AudioDeviceEvent(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      which: view.getUint32(16, true),
      recording: view.getUint8(20) === 1,
      padding1: view.getUint8(21),
      padding2: view.getUint8(22),
      padding3: view.getUint8(23),
      free: null,
      address: null,
    } as RawAudioDeviceEvent;

    return new AudioDeviceEvent(result);
  }
}
