import { BaseStruct, type BaseStructOptions } from '@basestruct';
import type { GPUFilter, GPULoadOp } from '@sdl/ffi/constant/gpu';
import type { FlipMode } from '@sdl/ffi/constant/surface';
import { FColor } from '../../../../pixels/struct';
import { GPUBlitRegion } from '../gpu-blit-region';
import { ByteOffset } from './constant';

export class GPUBlitInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 96;

  public readonly source: GPUBlitRegion;
  public readonly destination: GPUBlitRegion;
  public readonly clearColor: FColor;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.source = new GPUBlitRegion(
      this.$memory.subarray(
        ByteOffset.source,
        ByteOffset.source + GPUBlitRegion.BYTE_SIZE
      )
    );
    this.destination = new GPUBlitRegion(
      this.$memory.subarray(
        ByteOffset.destination,
        ByteOffset.destination + GPUBlitRegion.BYTE_SIZE
      )
    );
    this.clearColor = new FColor(
      this.$memory.subarray(
        ByteOffset.clear_color,
        ByteOffset.clear_color + FColor.BYTE_SIZE
      )
    );
  }

  public get loadOp() {
    return this.$view.getInt32(ByteOffset.load_op, true) as GPULoadOp;
  }

  public set loadOp(value: GPULoadOp) {
    this.$view.setInt32(ByteOffset.load_op, value, true);
  }

  public get flipMode() {
    return this.$view.getInt32(ByteOffset.flip_mode, true) as FlipMode;
  }

  public set flipMode(value: FlipMode) {
    this.$view.setInt32(ByteOffset.flip_mode, value, true);
  }

  public get filter() {
    return this.$view.getInt32(ByteOffset.filter, true) as GPUFilter;
  }

  public set filter(value: GPUFilter) {
    this.$view.setInt32(ByteOffset.filter, value, true);
  }

  public get cycle() {
    return this.$view.getUint8(ByteOffset.cycle) === 1;
  }

  public set cycle(value: boolean) {
    this.$view.setUint8(ByteOffset.cycle, value ? 1 : 0);
  }
}
