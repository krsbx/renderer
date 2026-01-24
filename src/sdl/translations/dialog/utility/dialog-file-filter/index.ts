import { stringToCString } from '@utility/common';
import { CString, ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class DialogFileFilter {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  private $cache: Partial<{
    name: CString;
    pattern: CString;
  }>;

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
    this.$cache = {};
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get name() {
    const nameAddr = this.$view.getBigUint64(ByteOffset.name, true);
    const namePtr = Number(nameAddr) as Pointer;

    return new CString(namePtr).toString();
  }

  public set name(value: string) {
    this.$cache.name = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.name,
      BigInt(this.$cache.name.ptr),
      true
    );
  }

  public get pattern() {
    const patternAddr = this.$view.getBigUint64(ByteOffset.pattern, true);
    const patternPtr = Number(patternAddr) as Pointer;

    return new CString(patternPtr).toString();
  }

  public set pattern(value: string) {
    this.$cache.pattern = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.pattern,
      BigInt(this.$cache.pattern.ptr),
      true
    );
  }
}
