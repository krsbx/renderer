import { CString, ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { MessageBoxFlags } from '../../../../ffi/message-box/constant';
import { MessageBoxButtonData } from '../message-box-button-data';
import { MessageBoxColorScheme } from '../message-box-color-scheme';
import { ByteOffset } from './constant';

export class MessageBoxData {
  public static readonly BYTE_SIZE = 56;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public $buttonsBuffer: Uint8Array | null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, MessageBoxData.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
    this.$buttonsBuffer = null;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get flags() {
    return this.$view.getUint32(ByteOffset.flags, true) as MessageBoxFlags;
  }

  public set flags(value: MessageBoxFlags) {
    this.$view.setUint32(ByteOffset.flags, value, true);
  }

  public get window() {
    const addr = this.$view.getBigUint64(ByteOffset.window, true);

    if (!addr || addr === 0n) return null;

    return Number(addr) as Pointer;
  }

  public get title() {
    const addr = this.$view.getBigUint64(ByteOffset.title, true);
    const ptr = Number(addr) as Pointer;

    return new CString(ptr);
  }

  public set title(value: CString) {
    this.$view.setBigUint64(ByteOffset.title, BigInt(value.ptr), true);
  }

  public get message() {
    const addr = this.$view.getBigUint64(ByteOffset.message, true);
    const ptr = Number(addr) as Pointer;

    return new CString(ptr);
  }

  public set message(value: CString) {
    this.$view.setBigUint64(ByteOffset.message, BigInt(value.ptr), true);
  }

  public get buttonCount() {
    return this.$view.getInt32(ByteOffset.numbuttons, true);
  }

  public set buttonCount(value: number) {
    this.$view.setInt32(ByteOffset.numbuttons, value, true);
  }

  public get buttons() {
    if (!this.buttonCount) return [];

    const buttonsAddr = this.$view.getBigUint64(ByteOffset.buttons, true);

    if (!buttonsAddr || buttonsAddr === 0n) return [];

    const buttons: MessageBoxButtonData[] = [];

    for (let i = 0; i < this.buttonCount; i++) {
      const offset = BigInt(i) * BigInt(MessageBoxButtonData.BYTE_SIZE);
      const touchpadAdr = buttonsAddr + offset;
      const touchpadPtr = Number(touchpadAdr) as Pointer;

      buttons.push(new MessageBoxButtonData(touchpadPtr));
    }

    return buttons;
  }

  public set buttons(value: MessageBoxButtonData[]) {
    this.buttonCount = value.length;

    if (this.buttonCount === 0) {
      this.$view.setBigUint64(ByteOffset.buttons, 0n, true);
      this.$buttonsBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      MessageBoxButtonData.BYTE_SIZE * this.buttonCount
    );

    for (let i = 0; i < this.buttonCount; i++) {
      const offset = i * MessageBoxButtonData.BYTE_SIZE;

      buffer.set(value[i]!.$memory, offset);
    }

    this.$buttonsBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.buttons,
      BigInt(ptr(this.$buttonsBuffer)),
      true
    );
  }

  public get colorScheme() {
    const colorSchemeAddr = this.$view.getBigUint64(
      ByteOffset.colorScheme,
      true
    );

    if (!colorSchemeAddr || colorSchemeAddr === 0n) return null;

    const colorSchemePtr = Number(colorSchemeAddr) as Pointer;

    return new MessageBoxColorScheme(colorSchemePtr);
  }

  public set colorScheme(value: MessageBoxColorScheme | null) {
    if (!value) {
      this.$view.setBigUint64(ByteOffset.colorScheme, 0n, true);
      return;
    }

    this.$view.setBigUint64(
      ByteOffset.colorScheme,
      BigInt(value.$address),
      true
    );
  }
}
