import { CString, ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { MessageBoxButtonFlags } from '../../../../ffi/message-box/constant';
import { stringToCString } from '../../../../utility/common';
import { ByteOffset } from './constant';

export class MessageBoxButtonData {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  private $cache: Partial<{
    text: CString;
  }>;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, MessageBoxButtonData.BYTE_SIZE);
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
