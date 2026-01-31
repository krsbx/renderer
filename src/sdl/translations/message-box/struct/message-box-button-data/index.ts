import { BaseStruct } from '@basestruct';
import type { MessageBoxButtonFlags } from '@sdl/ffi/constant/message-box';
import { stringToCString } from '@utility/common';
import { CString, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class MessageBoxButtonData extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  private $cache: Partial<{
    text: CString;
  }> = {};

  public get flags() {
    return this.$view.getUint32(
      ByteOffset.flags,
      true
    ) as MessageBoxButtonFlags;
  }

  public set flags(value: MessageBoxButtonFlags) {
    this.$view.setUint32(ByteOffset.flags, value, true);
  }

  public get buttonId() {
    return this.$view.getInt32(ByteOffset.buttonID, true);
  }

  public set buttonID(value: number) {
    this.$view.setInt32(ByteOffset.buttonID, value, true);
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
