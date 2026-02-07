import type { PenID, WindowID } from '@/sdl/types/definition';
import type { Float, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import type { PenAxis, PenInputFlags } from '@sdl/ffi/constant/pen';
import { ByteOffset } from './constant';
import type { PenAxisEventType } from './types';

export class PenAxisEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as PenAxisEventType;
  }

  public set type(value: PenAxisEventType) {
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
    return this.$view.getUint32(ByteOffset.windowID, true) as WindowID;
  }

  public set windowID(value: WindowID) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true) as PenID;
  }

  public set which(value: PenID) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get penState() {
    return this.$view.getUint32(ByteOffset.pen_state, true) as PenInputFlags;
  }

  public set penState(value: PenInputFlags) {
    this.$view.setUint32(ByteOffset.pen_state, value, true);
  }

  public get x() {
    return this.$view.getFloat32(ByteOffset.x, true) as Float;
  }

  public set x(value: Float) {
    this.$view.setFloat32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getFloat32(ByteOffset.y, true) as Float;
  }

  public set y(value: Float) {
    this.$view.setFloat32(ByteOffset.y, value, true);
  }

  public get axis() {
    return this.$view.getInt32(ByteOffset.axis, true) as PenAxis;
  }

  public set axis(value: PenAxis) {
    this.$view.setInt32(ByteOffset.axis, value, true);
  }

  public get value() {
    return this.$view.getFloat32(ByteOffset.value, true) as Float;
  }

  public set value(value: Float) {
    this.$view.setFloat32(ByteOffset.value, value, true);
  }
}
