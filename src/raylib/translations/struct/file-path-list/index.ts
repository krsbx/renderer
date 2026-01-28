import { BaseStruct } from '@/utility/base-struct';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class FilePathList extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  private $paths: string[] | null = null;

  public get count() {
    return this.$view.getUint32(ByteOffset.count, true);
  }

  public set count(value: number) {
    this.$view.setUint32(ByteOffset.count, value, true);
  }

  public get paths_ptr() {
    const pathAddr = this.$view.getBigUint64(ByteOffset.paths, true);

    return Number(pathAddr) as Pointer;
  }

  public set paths_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.paths, BigInt(value), true);
    this.$paths = null;
  }

  public get paths() {
    if (this.$paths) return this.$paths;

    const ptr = this.paths_ptr;

    if (!ptr) return null;

    this.$paths = CStruct.readArrayString(ptr, this.count);

    return this.$paths;
  }
}
