import { CString, ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class AssertData {
  public static readonly BYTE_SIZE = 48;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, AssertData.BYTE_SIZE);
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

  public get always_ignore() {
    return this.$view.getUint8(ByteOffset.always_ignore) === 1;
  }

  public set always_ignore(value: boolean) {
    this.$view.setUint8(ByteOffset.always_ignore, value ? 1 : 0);
  }

  public get trigger_count() {
    return this.$view.getUint32(ByteOffset.trigger_count, true);
  }

  public set trigger_count(value: number) {
    this.$view.setUint32(ByteOffset.trigger_count, value, true);
  }

  public get condition() {
    const conditionPtr = this.$view.getBigUint64(
      ByteOffset.condition,
      true
    ) as unknown as Pointer;

    return new CString(conditionPtr);
  }

  public set condition(value: CString) {
    this.$view.setBigUint64(ByteOffset.condition, BigInt(value.ptr), true);
  }

  public get filename() {
    const filenamePtr = this.$view.getBigUint64(
      ByteOffset.filename,
      true
    ) as unknown as Pointer;

    return new CString(filenamePtr);
  }

  public set filename(value: CString) {
    this.$view.setBigUint64(ByteOffset.filename, BigInt(value.ptr), true);
  }

  public get linenum() {
    return this.$view.getInt32(ByteOffset.linenum, true);
  }

  public set linenum(value: number) {
    this.$view.setInt32(ByteOffset.linenum, value, true);
  }

  public get function() {
    const functionPtr = this.$view.getBigUint64(
      ByteOffset.function,
      true
    ) as unknown as Pointer;

    return new CString(functionPtr);
  }

  public set function(value: CString) {
    this.$view.setBigUint64(ByteOffset.function, BigInt(value.ptr), true);
  }

  public get next(): AssertData | null {
    const next = this.$view.getBigUint64(
      ByteOffset.next,
      true
    ) as unknown as Pointer | null;

    if (!next || next === (0n as unknown as Pointer)) return null;

    return new AssertData(next);
  }
}
