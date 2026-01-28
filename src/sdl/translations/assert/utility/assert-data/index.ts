import { BaseStruct } from '@/utility/base-struct';
import { stringToCString } from '@utility/common';
import { CString, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class AssertData extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  private $cache: Partial<{
    condition: CString;
    filename: CString;
    function: CString;
  }> = {};

  public get alwaysIgnore() {
    return this.$view.getUint8(ByteOffset.always_ignore) === 1;
  }

  public set alwaysIgnore(value: boolean) {
    this.$view.setUint8(ByteOffset.always_ignore, value ? 1 : 0);
  }

  public get triggerCount() {
    return this.$view.getUint32(ByteOffset.trigger_count, true);
  }

  public set triggerCount(value: number) {
    this.$view.setUint32(ByteOffset.trigger_count, value, true);
  }

  public get condition() {
    const conditionAddr = this.$view.getBigUint64(ByteOffset.condition, true);
    const conditionPtr = Number(conditionAddr) as Pointer;

    return new CString(conditionPtr).toString();
  }

  public set condition(value: string) {
    this.$cache.condition = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.condition,
      BigInt(this.$cache.condition.ptr),
      true
    );
  }

  public get filename() {
    const filenameAddr = this.$view.getBigUint64(ByteOffset.filename, true);
    const filenamePtr = Number(filenameAddr) as Pointer;

    return new CString(filenamePtr).toString();
  }

  public set filename(value: string) {
    this.$cache.filename = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.filename,
      BigInt(this.$cache.filename.ptr),
      true
    );
  }

  public get lineNum() {
    return this.$view.getInt32(ByteOffset.linenum, true);
  }

  public set lineNum(value: number) {
    this.$view.setInt32(ByteOffset.linenum, value, true);
  }

  public get function() {
    const functionAdr = this.$view.getBigUint64(ByteOffset.function, true);
    const functionPtr = Number(functionAdr) as Pointer;

    return new CString(functionPtr).toString();
  }

  public set function(value: string) {
    this.$cache.function = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.function,
      BigInt(this.$cache.function.ptr),
      true
    );
  }

  public get next(): AssertData | null {
    const nextAddr = this.$view.getBigUint64(ByteOffset.next, true) as
      | bigint
      | null;

    if (!nextAddr || nextAddr === 0n) return null;

    const nextPtr = Number(nextAddr) as Pointer;

    return new AssertData(nextPtr);
  }
}
