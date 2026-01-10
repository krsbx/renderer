import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class AlignmentTest {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
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

  public get a() {
    return this.$view.getUint8(ByteOffset.a);
  }

  public set a(value: number) {
    this.$view.setUint8(ByteOffset.a, value);
  }

  public get b() {
    const bAddr = this.$view.getBigUint64(ByteOffset.b, true);
    const bPtr = Number(bAddr) as Pointer;

    return bPtr;
  }

  public set b(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.b, BigInt(value), true);
  }
}
