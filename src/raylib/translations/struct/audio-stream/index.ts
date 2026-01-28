import { BaseStruct } from '@/utility/base-struct';
import { type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class AudioStream extends BaseStruct {
  public static override readonly BYTE_SIZE = 28;

  public get buffer() {
    const bufferAddr = this.$view.getBigUint64(ByteOffset.buffer, true);

    return Number(bufferAddr) as Pointer;
  }

  public set buffer(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.buffer, BigInt(value), true);
  }

  public get processor() {
    const processorAddr = this.$view.getBigUint64(ByteOffset.processor, true);

    return Number(processorAddr) as Pointer;
  }

  public set processor(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.processor, BigInt(value), true);
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
}
