import { BaseStruct } from '@basestruct';
import type { Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { UserEventType } from './types';

export class UserEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 40;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as UserEventType;
  }

  public set type(value: UserEventType) {
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

  public get code() {
    return this.$view.getInt32(ByteOffset.code, true);
  }

  public set code(value: number) {
    this.$view.setInt32(ByteOffset.code, value, true);
  }

  public get data1() {
    const addr = this.$view.getBigUint64(ByteOffset.data1, true);

    return Number(addr) as Pointer;
  }

  public set data1(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.data1, BigInt(value), true);
  }

  public get data2() {
    const addr = this.$view.getBigUint64(ByteOffset.data2, true);

    return Number(addr) as Pointer;
  }

  public set data2(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.data2, BigInt(value), true);
  }
}
