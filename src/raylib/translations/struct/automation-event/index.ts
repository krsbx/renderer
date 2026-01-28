import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class AutomationEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  // Cached params array
  private $params: [number, number, number, number] | null = null;

  public get frame() {
    return this.$view.getUint32(ByteOffset.frame, true);
  }

  public set frame(value: number) {
    this.$view.setUint32(ByteOffset.frame, value, true);
  }

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true);
  }

  public set type(value: number) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get params() {
    if (this.$params) return this.$params;

    const length = 4;

    this.$params = new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        return this.$view.getInt32(ByteOffset.params + index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= length) {
          return false;
        }

        this.$view.setInt32(ByteOffset.params + index * 4, value, true);
        return true;
      },
    }) as never;

    return this.$params;
  }
}
