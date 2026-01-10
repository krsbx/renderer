import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUColorTargetBlendState {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUColorTargetBlendState.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get src_color_blendfactor() {
    return this.$view.getInt32(ByteOffset.src_color_blendfactor, true);
  }

  public set src_color_blendfactor(value: number) {
    this.$view.setInt32(ByteOffset.src_color_blendfactor, value, true);
  }

  public get dst_color_blendfactor() {
    return this.$view.getInt32(ByteOffset.dst_color_blendfactor, true);
  }

  public set dst_color_blendfactor(value: number) {
    this.$view.setInt32(ByteOffset.dst_color_blendfactor, value, true);
  }

  public get color_blend_op() {
    return this.$view.getInt32(ByteOffset.color_blend_op, true);
  }

  public set color_blend_op(value: number) {
    this.$view.setInt32(ByteOffset.color_blend_op, value, true);
  }

  public get src_alpha_blendfactor() {
    return this.$view.getInt32(ByteOffset.src_alpha_blendfactor, true);
  }

  public set src_alpha_blendfactor(value: number) {
    this.$view.setInt32(ByteOffset.src_alpha_blendfactor, value, true);
  }

  public get dst_alpha_blendfactor() {
    return this.$view.getInt32(ByteOffset.dst_alpha_blendfactor, true);
  }

  public set dst_alpha_blendfactor(value: number) {
    this.$view.setInt32(ByteOffset.dst_alpha_blendfactor, value, true);
  }

  public get alpha_blend_op() {
    return this.$view.getInt32(ByteOffset.alpha_blend_op, true);
  }

  public set alpha_blend_op(value: number) {
    this.$view.setInt32(ByteOffset.alpha_blend_op, value, true);
  }

  public get color_write_mask() {
    return this.$view.getInt32(ByteOffset.color_write_mask, true);
  }

  public set color_write_mask(value: number) {
    this.$view.setInt32(ByteOffset.color_write_mask, value, true);
  }

  public get enable_blend() {
    return this.$view.getUint8(ByteOffset.enable_blend) === 1;
  }

  public set enable_blend(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_blend, value ? 1 : 0);
  }

  public get enable_color_write_mask() {
    return this.$view.getUint8(ByteOffset.enable_color_write_mask) === 1;
  }

  public set enable_color_write_mask(value: boolean) {
    this.$view.setUint8(ByteOffset.enable_color_write_mask, value ? 1 : 0);
  }
}
