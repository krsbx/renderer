import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUFilter, GPULoadOp } from '../../../ffi/gpu/constant';
import type { FlipMode } from '../../../ffi/surface/constant';
import { FColor } from '../../pixels/utility/fcolor';
import { GPUBlitRegion } from './gpu-blit-region';
import type { RawGPUBlitInfo } from './types';

export class GPUBlitInfo implements RawGPUBlitInfo {
  public static readonly BYTE_SIZE = 96;

  public source: GPUBlitRegion;
  public destination: GPUBlitRegion;
  public load_op: GPULoadOp;
  public clear_color: FColor;
  public flip_mode: FlipMode;
  public filter: GPUFilter;
  public cycle: boolean;
  public padding1: number;
  public padding2: number;
  public padding3: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUBlitInfo) {
    this.source = options.source;
    this.destination = options.destination;
    this.load_op = options.load_op;
    this.clear_color = options.clear_color;
    this.flip_mode = options.flip_mode;
    this.filter = options.filter;
    this.cycle = options.cycle;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.padding3 = options.padding3;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUBlitInfo.allocMemory();
    const view = new DataView(buffer.buffer);

    // Nested Structs (assuming .toMemory() returns Uint8Array)
    buffer.set(this.source.toMemory(), 0);
    buffer.set(this.destination.toMemory(), 24);

    view.setInt32(48, this.load_op, true);

    buffer.set(this.clear_color.toMemory(), 52);

    view.setInt32(68, this.flip_mode, true);
    view.setInt32(72, this.filter, true);

    view.setUint8(76, this.cycle ? 1 : 0);
    view.setUint8(77, this.padding1);
    view.setUint8(78, this.padding2);
    view.setUint8(79, this.padding3);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      source: GPUBlitRegion.fromPointer(pointer, sdl),
      destination: GPUBlitRegion.fromPointer(
        (BigInt(pointer) + 32n) as unknown as Pointer,
        sdl
      ),
      load_op: read.i32(pointer, 64),
      clear_color: FColor.fromPointer(
        (BigInt(pointer) + 68n) as unknown as Pointer,
        sdl
      ),
      flip_mode: read.i32(pointer, 84),
      filter: read.i32(pointer, 88),
      cycle: read.u8(pointer, 92) === 1,
      padding1: read.u8(pointer, 93),
      padding2: read.u8(pointer, 94),
      padding3: read.u8(pointer, 95),
      free: null,
      address: null,
    } as RawGPUBlitInfo;

    return new GPUBlitInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      source: GPUBlitRegion.fromMemory(data.slice(0)),
      destination: GPUBlitRegion.fromMemory(data.slice(32)),
      load_op: view.getInt32(64, true),
      clear_color: FColor.fromMemory(data.slice(68, 84)),
      flip_mode: view.getInt32(84, true),
      filter: view.getInt32(88, true),
      cycle: view.getUint8(92) === 1,
      padding1: view.getUint8(93),
      padding2: view.getUint8(94),
      padding3: view.getUint8(95),
      free: null,
      address: null,
    } as RawGPUBlitInfo;

    return new GPUBlitInfo(result);
  }
}
