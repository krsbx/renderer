import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { AutomationEvent } from '../automation-event';
import { ByteOffset } from './constant';

export class AutomationEventList {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  // Cached events array
  private $events: AutomationEvent[] | null = null;
  private $eventsMemory: Uint8Array | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, AutomationEventList.BYTE_SIZE);
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

  public static create(data?: StructInit<AutomationEventList>) {
    const instance = new AutomationEventList(AutomationEventList.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get capacity() {
    return this.$view.getUint32(ByteOffset.capacity, true);
  }

  public set capacity(value: number) {
    this.$view.setUint32(ByteOffset.capacity, value, true);
  }

  public get count() {
    return this.$view.getUint32(ByteOffset.count, true);
  }

  public set count(value: number) {
    this.$view.setUint32(ByteOffset.count, value, true);
  }

  public get events_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.events, true)) as Pointer;
  }

  public set events_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.events, BigInt(value as number), true);
    this.$events = null;
    this.$eventsMemory = null;
  }

  public get events() {
    const ptr = this.events_ptr;
    if (!ptr) return null;
    if (this.$events) return this.$events;

    const count = this.count;
    const totalSize = count * AutomationEvent.BYTE_SIZE;
    const buffer = toArrayBuffer(ptr, 0, totalSize);
    this.$eventsMemory = new Uint8Array(buffer);

    this.$events = new Proxy(new Array(count), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= count) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = index * AutomationEvent.BYTE_SIZE;
        return new AutomationEvent(
          this.$eventsMemory!.subarray(
            offset,
            offset + AutomationEvent.BYTE_SIZE
          )
        );
      },
      set: () => false,
    }) as never;

    return this.$events;
  }
}
