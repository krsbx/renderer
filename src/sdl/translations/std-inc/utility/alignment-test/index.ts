import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class AlignmentTest {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, AlignmentTest.BYTE_SIZE);
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

  public static create(data?: StructInit<AlignmentTest>) {
    const instance = new AlignmentTest(AlignmentTest.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get a() {
    return this.$view.getUint8(ByteOffset.a);
  }

  public set a(value: number) {
    this.$view.setUint8(ByteOffset.a, value);
  }

  public get b() {
    const addr = this.$view.getBigUint64(ByteOffset.b, true);

    return Number(addr) as Pointer;
  }

  public set b(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.b, BigInt(value), true);
  }
}
