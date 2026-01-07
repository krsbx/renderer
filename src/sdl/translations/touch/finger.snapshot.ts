import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import { ByteOffset } from './constant';
import type { RawFinger } from './types';

export class Finger implements RawFinger {
  public static readonly BYTE_SIZE = 24;

  public id: bigint;
  public x: number;
  public y: number;
  public pressure: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawFinger) {
    this.id = options.id;
    this.x = options.x;
    this.y = options.y;
    this.pressure = options.pressure;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = Finger.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(ByteOffset.id, this.id, true);
    view.setFloat32(ByteOffset.x, this.x, true);
    view.setFloat32(ByteOffset.y, this.y, true);
    view.setFloat32(ByteOffset.pressure, this.pressure, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      id: read.u64(pointer, ByteOffset.id),
      x: read.f32(pointer, ByteOffset.x),
      y: read.f32(pointer, ByteOffset.y),
      pressure: read.f32(pointer, ByteOffset.pressure),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawFinger;

    return new Finger(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      id: view.getBigUint64(ByteOffset.id, true),
      x: view.getFloat32(ByteOffset.x, true),
      y: view.getFloat32(ByteOffset.y, true),
      pressure: view.getFloat32(ByteOffset.pressure, true),
      free: null,
      address: null,
    } as RawFinger;

    return new Finger(result);
  }
}
