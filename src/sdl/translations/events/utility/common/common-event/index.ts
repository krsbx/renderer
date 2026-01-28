import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';
import type { CommonEventType } from './types';

export class CommonEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as CommonEventType;
  }

  public set type(value: CommonEventType) {
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
}
