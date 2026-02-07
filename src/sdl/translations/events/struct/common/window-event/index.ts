import type { Int32, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { WindowEventType } from './types';

export class WindowEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as WindowEventType;
  }

  public set type(value: WindowEventType) {
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

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true) as UInt32;
  }

  public set windowID(value: UInt32) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }

  public get data1() {
    return this.$view.getInt32(ByteOffset.data1, true) as Int32;
  }

  public set data1(value: Int32) {
    this.$view.setInt32(ByteOffset.data1, value, true);
  }

  public get data2() {
    return this.$view.getInt32(ByteOffset.data2, true) as Int32;
  }

  public set data2(value: Int32) {
    this.$view.setInt32(ByteOffset.data2, value, true);
  }
}
