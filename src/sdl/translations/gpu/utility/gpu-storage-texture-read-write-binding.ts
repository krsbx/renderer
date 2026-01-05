import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawGPUStorageTextureReadWriteBinding } from './types';

export class GPUStorageTextureReadWriteBinding
  implements RawGPUStorageTextureReadWriteBinding
{
  public static readonly BYTE_SIZE = 24;

  public texture: Pointer;
  public mip_level: number;
  public layer: number;
  public cycle: boolean;
  public padding1: number;
  public padding2: number;
  public padding3: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUStorageTextureReadWriteBinding) {
    this.texture = options.texture;
    this.mip_level = options.mip_level;
    this.layer = options.layer;
    this.cycle = options.cycle;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.padding3 = options.padding3;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUStorageTextureReadWriteBinding.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.texture), true);
    view.setUint32(8, this.mip_level, true);
    view.setUint32(12, this.layer, true);
    view.setInt8(16, this.cycle ? 1 : 0);
    view.setInt8(17, this.padding1);
    view.setInt8(18, this.padding2);
    view.setInt8(19, this.padding3);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      texture: read.ptr(pointer, 0),
      mip_level: read.u32(pointer, 8),
      layer: read.u32(pointer, 12),
      cycle: read.u8(pointer, 16) === 1,
      padding1: read.u8(pointer, 17),
      padding2: read.u8(pointer, 18),
      padding3: read.u8(pointer, 19),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUStorageTextureReadWriteBinding;

    return new GPUStorageTextureReadWriteBinding(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      texture: view.getBigUint64(0, true) as unknown as Pointer,
      mip_level: view.getUint32(8, true),
      layer: view.getUint32(12, true),
      cycle: view.getUint8(16) === 1,
      padding1: view.getUint8(17),
      padding2: view.getUint8(18),
      padding3: view.getUint8(19),
      free: null,
      address: null,
    } as RawGPUStorageTextureReadWriteBinding;

    return new GPUStorageTextureReadWriteBinding(result);
  }
}
