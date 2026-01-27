import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Wave {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  // Cached data array
  private $data: number[] | null = null;
  private $dataView: DataView | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Wave.BYTE_SIZE);
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

  public static create(data?: StructInit<Wave>) {
    const instance = new Wave(Wave.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

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
    this.$view.setBigUint64(ByteOffset.data, BigInt(value as number), true);
    this.$data = null;
    this.$dataView = null;
  }

  public get data() {
    const ptr = this.data_ptr;
    if (!ptr) return null;
    if (this.$data) return this.$data;

    // Calculate byte size: frameCount * channels * (sampleSize / 8)
    const byteSize = this.frameCount * this.channels * (this.sampleSize / 8);
    // Length in uint16 elements
    const length = Math.floor(byteSize / 2);
    const buffer = toArrayBuffer(ptr, 0, byteSize);
    this.$dataView = new DataView(buffer);

    this.$data = new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);
        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }
        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }
        return this.$dataView!.getUint16(index * 2, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);
        if (Number.isNaN(index) || index < 0 || index >= length) return false;
        this.$dataView!.setUint16(index * 2, value, true);
        return true;
      },
    }) as never;

    return this.$data;
  }
}
