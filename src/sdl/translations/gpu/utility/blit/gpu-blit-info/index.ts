import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { GPUFilter, GPULoadOp } from '../../../../../ffi/gpu/constant';
import type { FlipMode } from '../../../../../ffi/surface/constant';
import { FColor } from '../../../../pixels/utility/fcolor';
import { GPUBlitRegion } from '../gpu-blit-region';
import { ByteOffset } from './constant';

export class GPUBlitInfo {
  public static readonly BYTE_SIZE = 96;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly source: GPUBlitRegion;
  public readonly destination: GPUBlitRegion;
  public readonly clearColor: FColor;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUBlitInfo.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

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

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
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
