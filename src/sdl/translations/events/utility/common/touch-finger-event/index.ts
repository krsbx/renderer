import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { TouchFingerEventType } from './types';

export class TouchFingerEvent {
  public static readonly BYTE_SIZE = 56;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, TouchFingerEvent.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<TouchFingerEvent>) {
    const instance = new TouchFingerEvent(TouchFingerEvent.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as TouchFingerEventType;
  }

  public set type(value: TouchFingerEventType) {
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

  public get touchId() {
    return this.$view.getBigUint64(ByteOffset.touchID, true);
  }

  public set touchID(value: bigint) {
    this.$view.setBigUint64(ByteOffset.touchID, value, true);
  }

  public get fingerId() {
    return this.$view.getBigUint64(ByteOffset.fingerID, true);
  }

  public set fingerID(value: bigint) {
    this.$view.setBigUint64(ByteOffset.fingerID, value, true);
  }

  public get x() {
    return this.$view.getFloat32(ByteOffset.x, true);
  }

  public set x(value: number) {
    this.$view.setFloat32(ByteOffset.x, value, true);
  }

  public get y() {
    return this.$view.getFloat32(ByteOffset.y, true);
  }

  public set y(value: number) {
    this.$view.setFloat32(ByteOffset.y, value, true);
  }

  public get dx() {
    return this.$view.getFloat32(ByteOffset.dx, true);
  }

  public set dx(value: number) {
    this.$view.setFloat32(ByteOffset.dx, value, true);
  }

  public get dy() {
    return this.$view.getFloat32(ByteOffset.dy, true);
  }

  public set dy(value: number) {
    this.$view.setFloat32(ByteOffset.dy, value, true);
  }

  public get pressure() {
    return this.$view.getFloat32(ByteOffset.pressure, true);
  }

  public set pressure(value: number) {
    this.$view.setFloat32(ByteOffset.pressure, value, true);
  }

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true);
  }

  public set windowID(value: number) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }
}
