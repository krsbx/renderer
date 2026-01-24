import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class AudioStream {
  public static readonly BYTE_SIZE = 28;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, AudioStream.BYTE_SIZE);
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
    return new Uint8Array(this.BYTE_SIZE);
  }

  public get buffer() {
    return Number(this.$view.getBigUint64(ByteOffset.buffer, true)) as Pointer;
  }

  public set buffer(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.buffer, BigInt(value as number), true);
  }

  public get processor() {
    return Number(
      this.$view.getBigUint64(ByteOffset.processor, true)
    ) as Pointer;
  }

  public set processor(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.processor,
      BigInt(value as number),
      true
    );
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
