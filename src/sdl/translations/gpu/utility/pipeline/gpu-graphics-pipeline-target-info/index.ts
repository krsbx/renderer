import type { StructInit } from '@/types/shared';
import { CStruct } from '@/utility/cstruct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
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

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get colorTargetDescriptions() {
    if (!this.colorTargetsCount) return [];

    const colorTargetDescriptionsAddr = this.$view.getBigUint64(
      ByteOffset.color_target_descriptions,
      true
    );

    if (!colorTargetDescriptionsAddr || colorTargetDescriptionsAddr === 0n)
      return [];

    const colorTargetDescriptionsPtr = Number(
      colorTargetDescriptionsAddr
    ) as Pointer;

    return CStruct.readArray(
      GPUColorTargetDescription,
      colorTargetDescriptionsPtr,
      this.colorTargetsCount
    );
  }

  public set colorTargetDescriptions(value: GPUColorTargetDescription[]) {
    this.colorTargetsCount = value.length;

    if (this.colorTargetsCount === 0) {
      this.$view.setBigUint64(ByteOffset.color_target_descriptions, 0n, true);
      this.$colorTargetDescBuffer = null;
      return;
    }

    const { address, buffer } = CStruct.writeArray(
      value,
      GPUColorTargetDescription.BYTE_SIZE
    );

    this.$colorTargetDescBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.color_target_descriptions,
      BigInt(address),
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
