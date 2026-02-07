import type { WindowID } from '@/sdl/types/definition';
import type { Float, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { stringToCString } from '@utility/common';
import { CString, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { DropEventType } from './types';

export class DropEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  private $cache: Partial<{
    source: CString;
    data: CString;
  }> = {};

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as DropEventType;
  }

  public set type(value: DropEventType) {
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

  public get source() {
    const sourceAddr = this.$view.getBigUint64(ByteOffset.source, true);
    const sourcePtr = Number(sourceAddr) as Pointer;

    return new CString(sourcePtr).toString();
  }

  public set source(value: string) {
    this.$cache.source = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.source,
      BigInt(this.$cache.source.ptr),
      true
    );
  }

  public get data() {
    const dataAddr = this.$view.getBigUint64(ByteOffset.data, true);
    const dataPtr = Number(dataAddr) as Pointer;

    return new CString(dataPtr).toString();
  }

  public set data(value: string) {
    this.$cache.data = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.data,
      BigInt(this.$cache.data.ptr),
      true
    );
  }
}
