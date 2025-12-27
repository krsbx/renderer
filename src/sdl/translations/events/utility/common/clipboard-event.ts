import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { ClipboardEventType, RawClipboardEvent } from '../types';

export class ClipboardEvent implements RawClipboardEvent {
  public type: ClipboardEventType;
  public reserved: number;
  public timestamp: bigint;
  public owner: boolean;
  public num_mime_types: number;
  public mime_types: string[];
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawClipboardEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.owner = options.owner;
    this.num_mime_types = options.num_mime_types;
    this.mime_types = options.mime_types;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = ClipboardEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint8(16, this.owner ? 1 : 0);
    view.setInt32(20, this.num_mime_types, true);
    view.setBigUint64(24, 0n, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(32);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const numMimeTypes = read.i32(pointer, 20);
    const mimeTypesPtr = read.ptr(pointer, 24) as Pointer | null;
    const mimeTypes: string[] = [];

    if (mimeTypesPtr && numMimeTypes > 0) {
      for (let i = 0; i < numMimeTypes; i++) {
        const strPtr = read.ptr(mimeTypesPtr, i * 8) as Pointer | null;

        if (!strPtr) continue;

        mimeTypes.push(new CString(strPtr).toString());
      }
    }

    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      owner: read.u8(pointer, 16) === 1,
      num_mime_types: numMimeTypes,
      mime_types: mimeTypes,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawClipboardEvent;

    return new ClipboardEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);
    const numMimeTypes = view.getInt32(20, true);
    const mimeTypesAddr = view.getBigUint64(
      24,
      true
    ) as unknown as Pointer | null;
    const mimeTypes: string[] = [];

    if (mimeTypesAddr && numMimeTypes > 0) {
      for (let i = 0; i < numMimeTypes; i++) {
        const strPtr = read.ptr(mimeTypesAddr, i * 8) as Pointer | null;

        if (!strPtr) continue;

        mimeTypes.push(new CString(strPtr).toString());
      }
    }

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      owner: view.getInt8(16) === 1,
      num_mime_types: numMimeTypes,
      mime_types: mimeTypes,
      free: null,
      address: null,
    } as RawClipboardEvent;

    return new ClipboardEvent(result);
  }
}
