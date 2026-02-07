import type { UInt32, UInt8 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { JoyButtonEventType } from './types';

export class JoyButtonEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as JoyButtonEventType;
  }

  public set type(value: JoyButtonEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true) as UInt32;
  }

  public set reserved(value: UInt32) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true) as UInt32;
  }

  public set which(value: UInt32) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get button() {
    return this.$view.getUint8(ByteOffset.button) as UInt8;
  }

  public set button(value: UInt8) {
    this.$view.setUint8(ByteOffset.button, value);
  }

  public get down() {
    return this.$view.getUint8(ByteOffset.down) === 1;
  }

  public set down(value: boolean) {
    this.$view.setUint8(ByteOffset.down, value ? 1 : 0);
  }
}
