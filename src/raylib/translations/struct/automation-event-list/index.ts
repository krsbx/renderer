import { BaseStruct } from '@/utility/base-struct';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';
import { AutomationEvent } from '../automation-event';
import { ByteOffset } from './constant';

export class AutomationEventList extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  private $events: AutomationEvent[] | null = null;

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
    this.$view.setBigUint64(ByteOffset.events, BigInt(value), true);
    this.$events = null;
  }

  public get events() {
    if (this.$events) return this.$events;

    const ptr = this.events_ptr;

    if (!ptr) return null;

    this.$events = CStruct.readArray(AutomationEvent, ptr, this.count);

    return this.$events;
  }
}
