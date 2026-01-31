import { BaseStruct } from '@basestruct';
import { stringToCString } from '@utility/common';
import { CString, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { TextInputEventType } from './types';
export class TextInputEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  private $cache: Partial<{
    text: CString;
  }> = {};

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as TextInputEventType;
  }

  public set type(value: TextInputEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true);
  }

  public set reserved(value: number) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true);
  }

  public set windowID(value: number) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }

  public get text() {
    const textAddr = this.$view.getBigUint64(ByteOffset.text, true);
    const textPtr = Number(textAddr) as Pointer;

    return new CString(textPtr).toString();
  }

  public set text(value: string) {
    this.$cache.text = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.text,
      BigInt(this.$cache.text.ptr),
      true
    );
  }
}
