import type { Int16, UInt32, UInt8 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { JoyBallEventType } from './types';

export class JoyBallEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as JoyBallEventType;
  }

  public set type(value: JoyBallEventType) {
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

  public get ball() {
    return this.$view.getUint8(ByteOffset.ball) as UInt8;
  }

  public set ball(value: UInt8) {
    this.$view.setUint8(ByteOffset.ball, value);
  }

  public get xRel() {
    return this.$view.getInt16(ByteOffset.xrel, true) as Int16;
  }

  public set xRel(value: Int16) {
    this.$view.setInt16(ByteOffset.xrel, value, true);
  }

  public get yRel() {
    return this.$view.getInt16(ByteOffset.yrel, true) as Int16;
  }

  public set yRel(value: Int16) {
    this.$view.setInt16(ByteOffset.yrel, value, true);
  }
}
