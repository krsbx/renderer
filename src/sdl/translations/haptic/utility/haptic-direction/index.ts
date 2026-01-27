import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { HapticDirectionType } from '../../../../ffi/haptic/constant';
import { ByteOffset } from './constant';

export class HapticDirection {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  private $dir: [number, number, number] | null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, HapticDirection.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.$dir = null;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<HapticDirection>) {
    const instance = new HapticDirection(HapticDirection.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
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
