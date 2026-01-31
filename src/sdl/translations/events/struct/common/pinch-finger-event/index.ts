import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { PinchFingerEventType } from './types';

export class PinchFingerEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as PinchFingerEventType;
  }

  public set type(value: PinchFingerEventType) {
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

  public get scale() {
    return this.$view.getFloat32(ByteOffset.scale, true);
  }

  public set scale(value: number) {
    this.$view.setFloat32(ByteOffset.scale, value, true);
  }

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true);
  }

  public set windowID(value: number) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }
}
