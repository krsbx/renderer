import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class AtomicU32 {
  public static readonly BYTE_SIZE = 4;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, AtomicU32.BYTE_SIZE);
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

  public static create(data?: StructInit<AtomicU32>) {
    const instance = new AtomicU32(AtomicU32.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get value() {
    return this.$view.getUint32(ByteOffset.value, true);
  }

  public set value(value: number) {
    this.$view.setUint32(ByteOffset.value, value, true);
  }
}
