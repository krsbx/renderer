import { BaseStruct } from '@/utility/base-struct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

// raylib defines MAX_SHADER_LOCATIONS = 32
const MAX_SHADER_LOCATIONS = 32;

export class Shader extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  private $locs: Int32Array | null = null;

  public get id() {
    return this.$view.getUint32(ByteOffset.id, true);
  }

  public set id(value: number) {
    this.$view.setUint32(ByteOffset.id, value, true);
  }

  public get locs_ptr() {
    const addr = this.$view.getBigUint64(ByteOffset.locs, true);

    return Number(addr) as Pointer;
  }

  public set locs_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.locs, BigInt(value), true);
    this.$locs = null;
  }

  public get locs() {
    if (this.$locs) return this.$locs;

    const ptr = this.locs_ptr;

    if (!ptr) return null;

    const buffer = toArrayBuffer(ptr, 0, MAX_SHADER_LOCATIONS * 4);

    this.$locs = new Int32Array(buffer);

    return this.$locs;
  }
}
