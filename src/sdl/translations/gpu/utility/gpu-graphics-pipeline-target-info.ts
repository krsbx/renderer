import { ptr, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUTextureFormat } from '../../../ffi/gpu/constant';
import { GPUColorTargetDescription } from './gpu-color-target-description';
import type { RawGPUGraphicsPipelineTargetInfo } from './types';

export class GPUGraphicsPipelineTargetInfo
  implements RawGPUGraphicsPipelineTargetInfo
{
  public static readonly BYTE_SIZE = 24;

  public color_target_descriptions: GPUColorTargetDescription[];
  public num_color_targets: number;
  public depth_stencil_format: GPUTextureFormat;
  public has_depth_stencil_target: boolean;
  public padding1: number;
  public padding2: number;
  public padding3: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUGraphicsPipelineTargetInfo) {
    this.color_target_descriptions = options.color_target_descriptions;
    this.num_color_targets = options.num_color_targets;
    this.depth_stencil_format = options.depth_stencil_format;
    this.has_depth_stencil_target = options.has_depth_stencil_target;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.padding3 = options.padding3;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUGraphicsPipelineTargetInfo.allocMemory();
    const view = new DataView(buffer.buffer);
    let colorTargetDescriptionsPtr: Pointer | null = null;

    const arrayBuffer = new Uint8Array(
      this.num_color_targets * GPUColorTargetDescription.BYTE_SIZE
    );

    if (this.num_color_targets > 0) {
      for (let i = 0; i < this.num_color_targets; i++) {
        const colorTargetDescription = this.color_target_descriptions[i];

        if (!colorTargetDescription) continue;

        const descBuffer = colorTargetDescription.toMemory();
        const offset = i * GPUColorTargetDescription.BYTE_SIZE;

        arrayBuffer.set(descBuffer, offset);
      }

      colorTargetDescriptionsPtr = ptr(arrayBuffer);
    }

    view.setBigUint64(
      0,
      colorTargetDescriptionsPtr ? BigInt(colorTargetDescriptionsPtr) : 0n,
      true
    );
    view.setUint32(8, this.num_color_targets, true);
    view.setInt32(12, this.depth_stencil_format, true);
    view.setUint8(16, this.has_depth_stencil_target ? 1 : 0);
    view.setUint8(17, this.padding1);
    view.setUint8(18, this.padding2);
    view.setUint8(19, this.padding3);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const numColorTargets = read.i32(pointer, 8);
    const colorTargetDescriptionsPtr = read.ptr(pointer, 0) as Pointer | null;
    const colorTargetDescriptions: GPUColorTargetDescription[] = [];

    if (colorTargetDescriptionsPtr && numColorTargets > 0) {
      for (let i = 0; i < numColorTargets; i++) {
        const offset = BigInt(i) * BigInt(GPUColorTargetDescription.BYTE_SIZE);
        const colorTargetDescriptionPtr = (BigInt(colorTargetDescriptionsPtr) +
          offset) as unknown as Pointer | null;

        if (!colorTargetDescriptionPtr) continue;

        colorTargetDescriptions.push(
          GPUColorTargetDescription.fromPointer(colorTargetDescriptionPtr, sdl)
        );
      }
    }

    const result = {
      color_target_descriptions: colorTargetDescriptions,
      num_color_targets: numColorTargets,
      depth_stencil_format: read.i32(pointer, 12),
      has_depth_stencil_target: read.u8(pointer, 16) === 1,
      padding1: read.u8(pointer, 17),
      padding2: read.u8(pointer, 18),
      padding3: read.u8(pointer, 19),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUGraphicsPipelineTargetInfo;

    return new GPUGraphicsPipelineTargetInfo(result);
  }

  public static fromMemory(data: Uint8Array, sdl: BaseSDL) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const numColorTargets = view.getUint32(8, true);
    const colorTargetDescriptionsPtr = view.getBigUint64(
      0,
      true
    ) as unknown as Pointer | null;
    const colorTargetDescriptions: GPUColorTargetDescription[] = [];

    if (colorTargetDescriptionsPtr && numColorTargets > 0) {
      for (let i = 0; i < numColorTargets; i++) {
        const offset = BigInt(i) * BigInt(GPUColorTargetDescription.BYTE_SIZE);
        const colorTargetDescriptionPtr = (BigInt(colorTargetDescriptionsPtr) +
          offset) as unknown as Pointer | null;

        if (!colorTargetDescriptionPtr) continue;

        colorTargetDescriptions.push(
          GPUColorTargetDescription.fromPointer(colorTargetDescriptionPtr, sdl)
        );
      }
    }

    const result = {
      color_target_descriptions: colorTargetDescriptions,
      num_color_targets: numColorTargets,
      depth_stencil_format: view.getInt32(12, true),
      has_depth_stencil_target: view.getUint8(16) === 1,
      padding1: view.getUint8(17),
      padding2: view.getUint8(18),
      padding3: view.getUint8(19),
      free: null,
      address: null,
    } as RawGPUGraphicsPipelineTargetInfo;

    return new GPUGraphicsPipelineTargetInfo(result);
  }
}
