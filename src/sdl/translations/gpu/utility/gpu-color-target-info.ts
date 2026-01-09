import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPULoadOp, GPUStoreOp } from '../../../ffi/gpu/constant';
import { FColor } from '../../pixels/utility/fcolor/fcolor.snapshot';
import type { RawGPUColorTargetInfo } from './types';

export class GPUColorTargetInfo implements RawGPUColorTargetInfo {
  public static readonly BYTE_SIZE = 72;

  public texture: Pointer;
  public mip_level: number;
  public layer_or_depth_plane: number;
  public clear_color: FColor;
  public load_op: GPULoadOp;
  public store_op: GPUStoreOp;
  public resolve_texture: Pointer;
  public resolve_mip_level: number;
  public resolve_layer: number;
  public cycle: boolean;
  public cycle_resolve_texture: boolean;
  public padding1: number;
  public padding2: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUColorTargetInfo) {
    this.texture = options.texture;
    this.mip_level = options.mip_level;
    this.layer_or_depth_plane = options.layer_or_depth_plane;
    this.clear_color = options.clear_color;
    this.load_op = options.load_op;
    this.store_op = options.store_op;
    this.resolve_texture = options.resolve_texture;
    this.resolve_mip_level = options.resolve_mip_level;
    this.resolve_layer = options.resolve_layer;
    this.cycle = options.cycle;
    this.cycle_resolve_texture = options.cycle_resolve_texture;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUColorTargetInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.texture ?? 0n), true);
    view.setUint32(8, this.mip_level, true);
    view.setUint32(12, this.layer_or_depth_plane, true);

    // clear_color is an FColor (4 floats)
    buffer.set(this.clear_color.toMemory(), 16);

    view.setInt32(32, this.load_op, true);
    view.setInt32(36, this.store_op, true);

    // Note the 4-byte gap here to align the 8-byte pointer at 48
    view.setBigUint64(48, BigInt(this.resolve_texture ?? 0n), true);
    view.setUint32(56, this.resolve_mip_level, true);
    view.setUint32(60, this.resolve_layer, true);

    view.setUint8(64, this.cycle ? 1 : 0);
    view.setUint8(65, this.cycle_resolve_texture ? 1 : 0);
    view.setUint8(66, this.padding1);
    view.setUint8(67, this.padding2);

    return buffer;
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result: RawGPUColorTargetInfo = {
      texture: read.ptr(pointer, 0),
      mip_level: read.u32(pointer, 8),
      layer_or_depth_plane: read.u32(pointer, 12),
      clear_color: FColor.fromPointer(
        (BigInt(pointer) + 16n) as unknown as Pointer,
        sdl
      ),
      load_op: read.i32(pointer, 32),
      store_op: read.i32(pointer, 36),
      resolve_texture: read.ptr(pointer, 48),
      resolve_mip_level: read.u32(pointer, 56),
      resolve_layer: read.u32(pointer, 60),
      cycle: read.u8(pointer, 64) === 1,
      cycle_resolve_texture: read.u8(pointer, 65) === 1,
      padding1: read.u8(pointer, 66),
      padding2: read.u8(pointer, 67),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUColorTargetInfo;

    return new GPUColorTargetInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result: RawGPUColorTargetInfo = {
      texture: view.getBigUint64(0, true) as unknown as Pointer,
      mip_level: view.getUint32(8, true),
      layer_or_depth_plane: view.getUint32(12, true),
      clear_color: FColor.fromMemory(data.slice(16, 32)),
      load_op: view.getInt32(32, true),
      store_op: view.getInt32(36, true),
      resolve_texture: view.getBigUint64(48, true) as unknown as Pointer,
      resolve_mip_level: view.getUint32(56, true),
      resolve_layer: view.getUint32(60, true),
      cycle: view.getUint8(64) === 1,
      cycle_resolve_texture: view.getUint8(65) === 1,
      padding1: view.getUint8(66),
      padding2: view.getUint8(67),
      free: null,
      address: null,
    } as RawGPUColorTargetInfo;

    return new GPUColorTargetInfo(result);
  }
}
