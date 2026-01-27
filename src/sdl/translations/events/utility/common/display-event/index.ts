import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { DisplayEventType } from './types';

export class DisplayEvent {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, DisplayEvent.BYTE_SIZE);
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

  public static create(data?: StructInit<DisplayEvent>) {
    const instance = new DisplayEvent(DisplayEvent.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as DisplayEventType;
  }

  public set type(value: DisplayEventType) {
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

  public get displayId() {
    return this.$view.getUint32(ByteOffset.displayID, true);
  }

  public set displayID(value: number) {
    this.$view.setUint32(ByteOffset.displayID, value, true);
  }

  public get data1() {
    return this.$view.getInt32(ByteOffset.data1, true);
  }

  public set data1(value: number) {
    this.$view.setInt32(ByteOffset.data1, value, true);
  }

  public get data2() {
    return this.$view.getInt32(ByteOffset.data2, true);
  }

  public set data2(value: number) {
    this.$view.setInt32(ByteOffset.data2, value, true);
  }
}
