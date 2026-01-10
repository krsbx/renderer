import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUTextureFormat } from '../../../../../ffi/gpu/constant';
import { GPUColorTargetDescription } from '../../color-target';
import { ByteOffset } from './constant';

export class GPUGraphicsPipelineTargetInfo {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public $colorTargetDescBuffer: Uint8Array | null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(
        data,
        0,
        GPUGraphicsPipelineTargetInfo.BYTE_SIZE
      );
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.$colorTargetDescBuffer = null;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get color_target_descriptions() {
    const numColorTargets = this.num_color_targets;
    const colorTargetDescriptionsAddr = this.$view.getBigUint64(
      ByteOffset.color_target_descriptions,
      true
    );

    if (
      !numColorTargets ||
      !colorTargetDescriptionsAddr ||
      colorTargetDescriptionsAddr === 0n
    )
      return [];

    const colorTargetDescriptions: GPUColorTargetDescription[] = [];
    const colorTargetDescriptionsPtr = Number(
      colorTargetDescriptionsAddr
    ) as Pointer;

    for (let i = 0; i < numColorTargets; i++) {
      const offset = i * GPUColorTargetDescription.BYTE_SIZE;
      const colorTargetDescriptionPtr = (colorTargetDescriptionsPtr +
        offset) as Pointer;

      colorTargetDescriptions.push(
        new GPUColorTargetDescription(colorTargetDescriptionPtr)
      );
    }

    return colorTargetDescriptions;
  }

  public set color_target_descriptions(value: GPUColorTargetDescription[]) {
    this.num_color_targets = value.length;

    if (this.num_color_targets === 0) {
      this.$view.setBigUint64(ByteOffset.color_target_descriptions, 0n, true);
      this.$colorTargetDescBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      GPUColorTargetDescription.BYTE_SIZE * this.num_color_targets
    );

    for (let i = 0; i < this.num_color_targets; i++) {
      const offset = i * GPUColorTargetDescription.BYTE_SIZE;

      buffer.set(value[i]!.$memory, offset);
    }

    this.$colorTargetDescBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.color_target_descriptions,
      BigInt(ptr(buffer)),
      true
    );
  }

  public get num_color_targets() {
    return this.$view.getUint32(ByteOffset.num_color_targets, true);
  }

  public set num_color_targets(value: number) {
    this.$view.setUint32(ByteOffset.num_color_targets, value, true);
  }

  public get depth_stencil_format() {
    return this.$view.getInt32(
      ByteOffset.depth_stencil_format,
      true
    ) as GPUTextureFormat;
  }

  public set depth_stencil_format(value: GPUTextureFormat) {
    this.$view.setInt32(ByteOffset.depth_stencil_format, value, true);
  }

  public get has_depth_stencil_target() {
    return this.$view.getUint8(ByteOffset.has_depth_stencil_target) === 1;
  }

  public set has_depth_stencil_target(value: boolean) {
    this.$view.setUint8(ByteOffset.has_depth_stencil_target, value ? 1 : 0);
  }
}
