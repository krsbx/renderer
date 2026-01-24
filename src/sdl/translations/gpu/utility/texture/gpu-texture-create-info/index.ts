import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type {
  GPUSampleCount,
  GPUTextureFormat,
  GPUTextureType,
  GPUTextureUsageFlags,
} from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUTextureCreateInfo {
  public static readonly BYTE_SIZE = 36;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, GPUTextureCreateInfo.BYTE_SIZE);
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

  public get type() {
    return this.$view.getInt32(ByteOffset.type, true) as GPUTextureType;
  }

  public set type(value: GPUTextureType) {
    this.$view.setInt32(ByteOffset.type, value, true);
  }

  public get format() {
    return this.$view.getInt32(ByteOffset.format, true) as GPUTextureFormat;
  }

  public set format(value: GPUTextureFormat) {
    this.$view.setInt32(ByteOffset.format, value, true);
  }

  public get usage() {
    return this.$view.getUint32(ByteOffset.usage, true) as GPUTextureUsageFlags;
  }

  public set usage(value: GPUTextureUsageFlags) {
    this.$view.setUint32(ByteOffset.usage, value, true);
  }

  public get width() {
    return this.$view.getUint32(ByteOffset.width, true);
  }

  public set width(value: number) {
    this.$view.setUint32(ByteOffset.width, value, true);
  }

  public get height() {
    return this.$view.getUint32(ByteOffset.height, true);
  }

  public set height(value: number) {
    this.$view.setUint32(ByteOffset.height, value, true);
  }

  public get layerCountOrDepth() {
    return this.$view.getUint32(ByteOffset.layer_count_or_depth, true);
  }

  public set layerCountOrDepth(value: number) {
    this.$view.setUint32(ByteOffset.layer_count_or_depth, value, true);
  }

  public get levelCount() {
    return this.$view.getUint32(ByteOffset.num_levels, true);
  }

  public set levelCount(value: number) {
    this.$view.setUint32(ByteOffset.num_levels, value, true);
  }

  public get sampleCount() {
    return this.$view.getInt32(ByteOffset.sample_count, true) as GPUSampleCount;
  }

  public set sampleCount(value: GPUSampleCount) {
    this.$view.setInt32(ByteOffset.sample_count, value, true);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true);
  }

  public set props(value: number) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
