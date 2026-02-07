import type { PenID, WindowID } from '@/sdl/types/definition';
import type { Float, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import type { PenInputFlags } from '@sdl/ffi/constant/pen';
import { ByteOffset } from './constant';
import type { PenTouchEventType } from './types';

export class PenTouchEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as PenTouchEventType;
  }

  public set type(value: PenTouchEventType) {
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

  public get pressure() {
    return this.$view.getFloat32(ByteOffset.pressure, true) as Float;
  }

  public set pressure(value: Float) {
    this.$view.setFloat32(ByteOffset.pressure, value, true);
  }

  public get eraser() {
    return this.$view.getInt8(ByteOffset.eraser) === 1;
  }

  public set eraser(value: boolean) {
    this.$view.setInt8(ByteOffset.eraser, value ? 1 : 0);
  }

  public get down() {
    return this.$view.getInt8(ByteOffset.down) === 1;
  }

  public set down(value: boolean) {
    this.$view.setInt8(ByteOffset.down, value ? 1 : 0);
  }
}
