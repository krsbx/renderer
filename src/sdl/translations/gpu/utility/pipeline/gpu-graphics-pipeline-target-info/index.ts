import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUTextureFormat } from '../../../../../ffi/gpu/constant';
import { GPUColorTargetDescription } from '../../color-target';
import { ByteOffset } from './constant';

export class GPUGraphicsPipelineTargetInfo {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public $colorTargetDescBuffer: Uint8Array | null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
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

  public get colorTargetDescriptions() {
    const colorTargetsCount = this.colorTargetsCount;
    const colorTargetDescriptionsAddr = this.$view.getBigUint64(
      ByteOffset.color_target_descriptions,
      true
    );

    if (
      !colorTargetsCount ||
      !colorTargetDescriptionsAddr ||
      colorTargetDescriptionsAddr === 0n
    )
      return [];

    const colorTargetDescriptions: GPUColorTargetDescription[] = [];
    const colorTargetDescriptionsPtr = Number(
      colorTargetDescriptionsAddr
    ) as Pointer;

    for (let i = 0; i < colorTargetsCount; i++) {
      const offset = i * GPUColorTargetDescription.BYTE_SIZE;
      const colorTargetDescriptionPtr = (colorTargetDescriptionsPtr +
        offset) as Pointer;

      colorTargetDescriptions.push(
        new GPUColorTargetDescription(colorTargetDescriptionPtr)
      );
    }

    return colorTargetDescriptions;
  }

  public set colorTargetDescriptions(value: GPUColorTargetDescription[]) {
    this.colorTargetsCount = value.length;

    if (this.colorTargetsCount === 0) {
      this.$view.setBigUint64(ByteOffset.color_target_descriptions, 0n, true);
      this.$colorTargetDescBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      GPUColorTargetDescription.BYTE_SIZE * this.colorTargetsCount
    );

    for (let i = 0; i < this.colorTargetsCount; i++) {
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

  public get colorTargetsCount() {
    return this.$view.getUint32(ByteOffset.num_color_targets, true);
  }

  public set colorTargetsCount(value: number) {
    this.$view.setUint32(ByteOffset.num_color_targets, value, true);
  }

  public get depthStencilFormat() {
    return this.$view.getInt32(
      ByteOffset.depth_stencil_format,
      true
    ) as GPUTextureFormat;
  }

  public set depthStencilFormat(value: GPUTextureFormat) {
    this.$view.setInt32(ByteOffset.depth_stencil_format, value, true);
  }

  public get hasDepthStencilTarget() {
    return this.$view.getUint8(ByteOffset.has_depth_stencil_target) === 1;
  }

  public set hasDepthStencilTarget(value: boolean) {
    this.$view.setUint8(ByteOffset.has_depth_stencil_target, value ? 1 : 0);
  }
}
