import { BaseStruct } from '@/utility/base-struct';
import type { PathType } from '../../../../ffi/file-system/constant';
import { ByteOffset } from './constant';

export class PathInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 40;

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
