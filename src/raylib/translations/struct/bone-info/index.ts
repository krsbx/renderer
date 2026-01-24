import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class BoneInfo {
  public static readonly BYTE_SIZE = 36;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, BoneInfo.BYTE_SIZE);
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

  public get name() {
    const bytes = this.$memory.subarray(ByteOffset.name, ByteOffset.name + 32);
    const nullIndex = bytes.indexOf(0);
    const validBytes = nullIndex === -1 ? bytes : bytes.subarray(0, nullIndex);
    return new TextDecoder().decode(validBytes);
  }

  public set name(value: string) {
    const bytes = new TextEncoder().encode(value);
    const dest = this.$memory.subarray(ByteOffset.name, ByteOffset.name + 32);

    dest.fill(0);
    dest.set(bytes.subarray(0, Math.min(bytes.length, 31)));
  }

  public get parent() {
    return this.$view.getInt32(ByteOffset.parent, true);
  }

  public set parent(value: number) {
    this.$view.setInt32(ByteOffset.parent, value, true);
  }
}
