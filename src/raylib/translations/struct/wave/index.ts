import { BaseStruct } from '@/utility/base-struct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Wave extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  private $data: Uint16Array | null = null;

  public get frameCount() {
    return this.$view.getUint32(ByteOffset.frameCount, true);
  }

  public set frameCount(value: number) {
    this.$view.setUint32(ByteOffset.frameCount, value, true);
  }

  public get sampleRate() {
    return this.$view.getUint32(ByteOffset.sampleRate, true);
  }

  public set sampleRate(value: number) {
    this.$view.setUint32(ByteOffset.sampleRate, value, true);
  }

  public get sampleSize() {
    return this.$view.getUint32(ByteOffset.sampleSize, true);
  }

  public set sampleSize(value: number) {
    this.$view.setUint32(ByteOffset.sampleSize, value, true);
  }

  public get channels() {
    return this.$view.getUint32(ByteOffset.channels, true);
  }

  public set channels(value: number) {
    this.$view.setUint32(ByteOffset.channels, value, true);
  }

  public get data_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.data, true)) as Pointer;
  }

  public set data_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.data, BigInt(value), true);
    this.$data = null;
  }

  public get data() {
    if (this.$data) return this.$data;

    const ptr = this.data_ptr;

    if (!ptr) return null;

    // Calculate byte size: frameCount * channels * (sampleSize / 8)
    const byteSize = this.frameCount * this.channels * (this.sampleSize / 8);
    const buffer = toArrayBuffer(ptr, 0, byteSize);

    this.$data = new Uint16Array(buffer);

    return this.$data;
  }
}
