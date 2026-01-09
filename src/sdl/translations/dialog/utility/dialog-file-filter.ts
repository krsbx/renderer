import { CString, ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class DialogFileFilter {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, DialogFileFilter.BYTE_SIZE);
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

  public get name() {
    const namePtr = this.$view.getBigUint64(
      ByteOffset.name,
      true
    ) as unknown as Pointer;

    return new CString(namePtr);
  }

  public set name(value: CString) {
    this.$view.setBigUint64(ByteOffset.name, BigInt(value.ptr), true);
  }

  public get pattern() {
    const patternPtr = this.$view.getBigUint64(
      ByteOffset.pattern,
      true
    ) as unknown as Pointer;

    return new CString(patternPtr);
  }

  public set pattern(value: CString) {
    this.$view.setBigUint64(ByteOffset.pattern, BigInt(value.ptr), true);
  }
}
