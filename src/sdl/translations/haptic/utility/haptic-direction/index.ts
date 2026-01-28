import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import type { HapticDirectionType } from '../../../../ffi/haptic/constant';
import { ByteOffset } from './constant';

export class HapticDirection extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  private $dir: [number, number, number] | null;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.$dir = null;
  }

  public get type() {
    return this.$view.getUint8(ByteOffset.type) as HapticDirectionType;
  }

  public set type(value: HapticDirectionType) {
    this.$view.setUint8(ByteOffset.type, value);
  }

  public get dir() {
    if (this.$dir) return this.$dir;

    const length = 3;

    this.$dir = new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // Allow access to standard array methods (map, forEach, etc)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];

          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        return this.$view.getInt32(ByteOffset.dir1 + index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= length) {
          return false;
        }

        this.$view.setInt32(ByteOffset.dir1 + index * 4, value, true);

        return true;
      },
    }) as never;

    return this.$dir;
  }
}
