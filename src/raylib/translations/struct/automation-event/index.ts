import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class AutomationEvent {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  // Cached params array
  private $params: [number, number, number, number] | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, AutomationEvent.BYTE_SIZE);
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
    return new Uint8Array(this.BYTE_SIZE);
  }

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
