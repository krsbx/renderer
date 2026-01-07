import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { PathType } from '../../ffi/file-system/constant';
import { ByteOffset } from './constant';

export class PathInfo {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, PathInfo.BYTE_SIZE);
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

  public get type() {
    return this.$view.getInt32(ByteOffset.type, true) as PathType;
  }

  public set type(value: PathType) {
    this.$view.setInt32(ByteOffset.type, value, true);
  }

  public get size() {
    return this.$view.getBigUint64(ByteOffset.size, true);
  }

  public set size(value: bigint) {
    this.$view.setBigUint64(ByteOffset.size, value, true);
  }

  public get create_time() {
    return this.$view.getBigInt64(ByteOffset.create_time, true);
  }

  public set create_time(value: bigint) {
    this.$view.setBigInt64(ByteOffset.create_time, value, true);
  }

  public get modify_time() {
    return this.$view.getBigInt64(ByteOffset.modify_time, true);
  }

  public set modify_time(value: bigint) {
    this.$view.setBigInt64(ByteOffset.modify_time, value, true);
  }

  public get access_time() {
    return this.$view.getBigInt64(ByteOffset.access_time, true);
  }

  public set access_time(value: bigint) {
    this.$view.setBigInt64(ByteOffset.access_time, value, true);
  }
}
