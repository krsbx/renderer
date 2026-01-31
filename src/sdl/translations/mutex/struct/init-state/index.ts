import { BaseStruct, type BaseStructOptions } from '@basestruct';
import { type Pointer } from 'bun:ffi';
import { AtomicInt } from '../../../atomic/struct';
import { ByteOffset } from './constant';

export class InitState extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public readonly status: AtomicInt;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.status = new AtomicInt(
      this.$memory.subarray(
        ByteOffset.status,
        ByteOffset.status + AtomicInt.BYTE_SIZE
      )
    );
  }

  public get thread() {
    return this.$view.getBigUint64(ByteOffset.thread, true);
  }

  public set thread(value: bigint) {
    this.$view.setBigUint64(ByteOffset.thread, value, true);
  }

  public get reserved() {
    const addr = this.$view.getBigUint64(ByteOffset.reserved, true);

    return Number(addr) as Pointer;
  }

  public set reserved(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.reserved, BigInt(value), true);
  }
}
