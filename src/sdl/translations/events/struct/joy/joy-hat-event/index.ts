import { BaseStruct } from '@basestruct';
import type { JoyHatPosition } from '@sdl/ffi/constant/joystick';
import { ByteOffset } from './constant';
import type { JoyHatEventType } from './types';

export class JoyHatEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

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
