import { BaseStruct } from '@/utility/base-struct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

// raylib defines MAX_SHADER_LOCATIONS = 32
const MAX_SHADER_LOCATIONS = 32;

export class Shader extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  private $locs: number[] | null = null;
  private $locsView: DataView | null = null;

  public get id() {
    return this.$view.getUint32(ByteOffset.id, true);
  }

  public set id(value: number) {
    this.$view.setUint32(ByteOffset.id, value, true);
  }

  public get locs_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.locs, true)) as Pointer;
  }

  public set locs_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.locs, BigInt(value as number), true);
    this.$locs = null;
    this.$locsView = null;
  }

  public get locs() {
    if (this.$locs) return this.$locs;

    const ptr = this.locs_ptr;
    if (!ptr) return null;

    const buffer = toArrayBuffer(ptr, 0, MAX_SHADER_LOCATIONS * 4);
    this.$locsView = new DataView(buffer);

    this.$locs = new Proxy(new Array(MAX_SHADER_LOCATIONS), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= MAX_SHADER_LOCATIONS) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        return this.$locsView!.getInt32(index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= MAX_SHADER_LOCATIONS) {
          return false;
        }

        this.$locsView!.setInt32(index * 4, value, true);
        return true;
      },
    }) as never;

    return this.$locs;
  }
}
