import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { JoyAxisEventType } from './types';

export class JoyAxisEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as JoyAxisEventType;
  }

  public set type(value: JoyAxisEventType) {
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

  public get axis() {
    return this.$view.getUint8(ByteOffset.axis);
  }

  public set axis(value: number) {
    this.$view.setUint8(ByteOffset.axis, value);
  }

  public get value() {
    return this.$view.getInt16(ByteOffset.value, true);
  }

  public set value(value: number) {
    this.$view.setInt16(ByteOffset.value, value, true);
  }
}
