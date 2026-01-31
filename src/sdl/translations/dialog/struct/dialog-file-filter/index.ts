import { BaseStruct } from '@basestruct';
import { stringToCString } from '@utility/common';
import { CString, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class DialogFileFilter extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  private $cache: Partial<{
    name: CString;
    pattern: CString;
  }> = {};

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
