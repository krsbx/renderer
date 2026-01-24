import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { JoyHatPosition } from '../../../../../ffi/joystick/constant';
import { ByteOffset } from './constant';
import type { JoyHatEventType } from './types';

export class JoyHatEvent {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, JoyHatEvent.BYTE_SIZE);
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

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as JoyHatEventType;
  }

  public set type(value: JoyHatEventType) {
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

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true);
  }

  public set which(value: number) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get hat() {
    return this.$view.getUint8(ByteOffset.hat);
  }

  public set hat(value: number) {
    this.$view.setUint8(ByteOffset.hat, value);
  }

  public get value() {
    return this.$view.getUint8(ByteOffset.value) as JoyHatPosition;
  }

  public set value(value: JoyHatPosition) {
    this.$view.setUint8(ByteOffset.value, value);
  }
}
