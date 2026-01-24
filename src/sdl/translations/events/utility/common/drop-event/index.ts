import { stringToCString } from '@utility/common';
import { CString, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { DropEventType } from './types';
export class DropEvent {
  public static readonly BYTE_SIZE = 48;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  private $cache: Partial<{
    source: CString;
    data: CString;
  }>;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, DropEvent.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
    this.$cache = {};
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as DropEventType;
  }

  public set type(value: DropEventType) {
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
