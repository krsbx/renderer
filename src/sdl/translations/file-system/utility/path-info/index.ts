import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { PathType } from '../../../../ffi/file-system/constant';
import { ByteOffset } from './constant';

export class PathInfo {
  public static readonly BYTE_SIZE = 40;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
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

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
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

  public get createTime() {
    return this.$view.getBigInt64(ByteOffset.create_time, true);
  }

  public set createTime(value: bigint) {
    this.$view.setBigInt64(ByteOffset.create_time, value, true);
  }

  public get modifyTime() {
    return this.$view.getBigInt64(ByteOffset.modify_time, true);
  }

  public set modifyTime(value: bigint) {
    this.$view.setBigInt64(ByteOffset.modify_time, value, true);
  }

  public get accessTime() {
    return this.$view.getBigInt64(ByteOffset.access_time, true);
  }

  public set accessTime(value: bigint) {
    this.$view.setBigInt64(ByteOffset.access_time, value, true);
  }
}
