import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../../';
import type { EventType } from '../../../../ffi/events/constant';
import type { RawCameraDeviceEvent } from '../types';

export class CameraDeviceEvent implements RawCameraDeviceEvent {
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public which: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawCameraDeviceEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.which = options.which;
    this.free = options.free;
    this.address = options.address;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      which: read.u32(pointer, 16),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawCameraDeviceEvent;

    return new CameraDeviceEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      which: view.getUint32(16, true),
      free: null,
      address: null,
    } as RawCameraDeviceEvent;

    return new CameraDeviceEvent(result);
  }
}
