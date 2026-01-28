import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { AudioStream } from '../audio-stream';
import { ByteOffset } from './constant';

export class Music {
  public static readonly BYTE_SIZE = 48;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly stream: AudioStream;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Music.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.stream = new AudioStream(
      this.$memory.subarray(
        ByteOffset.stream,
        ByteOffset.stream + AudioStream.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get frameCount() {
    return this.$view.getUint32(ByteOffset.frameCount, true);
  }

  public set frameCount(value: number) {
    this.$view.setUint32(ByteOffset.frameCount, value, true);
  }

  public get looping() {
    return this.$view.getUint8(ByteOffset.looping) !== 0;
  }

  public set looping(value: boolean) {
    this.$view.setUint8(ByteOffset.looping, value ? 1 : 0);
  }

  public get ctxType() {
    return this.$view.getInt32(ByteOffset.ctxType, true);
  }

  public set ctxType(value: number) {
    this.$view.setInt32(ByteOffset.ctxType, value, true);
  }

  public get ctxData_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.ctxData, true)) as Pointer;
  }

  public set ctxData_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.ctxData, BigInt(value as number), true);
  }

  public ctxData() {
    const ptr = this.ctxData_ptr;
    const buffer = toArrayBuffer(ptr);

    return new Uint8Array(buffer);
  }
}
