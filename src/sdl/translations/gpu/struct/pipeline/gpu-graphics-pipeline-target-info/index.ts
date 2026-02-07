import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import type { GPUTextureFormat } from '@sdl/ffi/constant/gpu';
import { CStruct } from '@utility/cstruct';
import type { Pointer } from 'bun:ffi';
import { GPUColorTargetDescription } from '../../color-target';
import { ByteOffset } from './constant';

export class GPUGraphicsPipelineTargetInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public $colorTargetDescBuffer: Uint8Array | null = null;

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
    this.colorTargetsCount = value.length as UInt32;

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
    return this.$view.getUint32(ByteOffset.num_color_targets, true) as UInt32;
  }

  public set colorTargetsCount(value: UInt32) {
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
