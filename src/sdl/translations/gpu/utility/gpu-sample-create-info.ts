import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type {
  GPUCompareOp,
  GPUFilter,
  GPUSamplerAddressMode,
  GPUSamplerMipmapMode,
} from '../../../ffi/gpu/constant';
import type { RawGPUSamplerCreateInfo } from './types';

export class GPUSamplerCreateInfo implements RawGPUSamplerCreateInfo {
  public static readonly BYTE_SIZE = 56;

  public min_filter: GPUFilter;
  public mag_filter: GPUFilter;
  public mipmap_mode: GPUSamplerMipmapMode;
  public address_mode_u: GPUSamplerAddressMode;
  public address_mode_v: GPUSamplerAddressMode;
  public address_mode_w: GPUSamplerAddressMode;
  public mip_lod_bias: number;
  public max_anisotropy: number;
  public compare_op: GPUCompareOp;
  public min_lod: number;
  public max_lod: number;
  public enable_anisotropy: boolean;
  public enable_compare: boolean;
  public padding1: number;
  public padding2: number;
  public props: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUSamplerCreateInfo) {
    this.min_filter = options.min_filter;
    this.mag_filter = options.mag_filter;
    this.mipmap_mode = options.mipmap_mode;
    this.address_mode_u = options.address_mode_u;
    this.address_mode_v = options.address_mode_v;
    this.address_mode_w = options.address_mode_w;
    this.mip_lod_bias = options.mip_lod_bias;
    this.max_anisotropy = options.max_anisotropy;
    this.compare_op = options.compare_op;
    this.min_lod = options.min_lod;
    this.max_lod = options.max_lod;
    this.enable_anisotropy = options.enable_anisotropy;
    this.enable_compare = options.enable_compare;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.props = options.props;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUSamplerCreateInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(0, this.min_filter, true);
    view.setInt32(4, this.mag_filter, true);
    view.setInt32(8, this.mipmap_mode, true);
    view.setInt32(12, this.address_mode_u, true);
    view.setInt32(16, this.address_mode_v, true);
    view.setInt32(20, this.address_mode_w, true);
    view.setFloat32(24, this.mip_lod_bias, true);
    view.setFloat32(28, this.max_anisotropy, true);
    view.setInt32(32, this.compare_op, true);
    view.setFloat32(36, this.min_lod, true);
    view.setFloat32(40, this.max_lod, true);
    view.setUint8(44, this.enable_anisotropy ? 1 : 0);
    view.setUint8(45, this.enable_compare ? 1 : 0);
    view.setUint8(46, this.padding1);
    view.setUint8(47, this.padding2);
    view.setUint32(48, this.props, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      min_filter: read.i32(pointer, 0),
      mag_filter: read.i32(pointer, 4),
      mipmap_mode: read.i32(pointer, 8),
      address_mode_u: read.i32(pointer, 12),
      address_mode_v: read.i32(pointer, 16),
      address_mode_w: read.i32(pointer, 20),
      mip_lod_bias: read.f32(pointer, 24),
      max_anisotropy: read.f32(pointer, 28),
      compare_op: read.i32(pointer, 32),
      min_lod: read.f32(pointer, 36),
      max_lod: read.f32(pointer, 40),
      enable_anisotropy: read.u8(pointer, 44) === 1,
      enable_compare: read.u8(pointer, 45) === 1,
      padding1: read.u8(pointer, 46),
      padding2: read.u8(pointer, 47),
      props: read.u32(pointer, 48),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUSamplerCreateInfo;

    return new GPUSamplerCreateInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      min_filter: view.getInt32(0, true),
      mag_filter: view.getInt32(4, true),
      mipmap_mode: view.getInt32(8, true),
      address_mode_u: view.getInt32(12, true),
      address_mode_v: view.getInt32(16, true),
      address_mode_w: view.getInt32(20, true),
      mip_lod_bias: view.getFloat32(24, true),
      max_anisotropy: view.getFloat32(28, true),
      compare_op: view.getInt32(32, true),
      min_lod: view.getFloat32(36, true),
      max_lod: view.getFloat32(40, true),
      enable_anisotropy: view.getUint8(44) === 1,
      enable_compare: view.getUint8(45) === 1,
      padding1: view.getUint8(46),
      padding2: view.getUint8(47),
      props: view.getUint32(48, true),
      free: null,
      address: null,
    } as RawGPUSamplerCreateInfo;

    return new GPUSamplerCreateInfo(result);
  }
}
