import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { AtomicInt } from '../../atomic/utility/atomic-int';
import { ByteOffset } from './constant';

export class InitState {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly status: AtomicInt;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, InitState.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.status = new AtomicInt(this.$address);
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get thread() {
    return this.$view.getBigUint64(ByteOffset.thread, true);
  }

  public set thread(value: bigint) {
    this.$view.setBigUint64(ByteOffset.thread, value, true);
  }

  public get reserved() {
    return this.$view.getBigUint64(ByteOffset.reserved, true);
  }

  public set reserved(value: bigint) {
    this.$view.setBigUint64(ByteOffset.reserved, value, true);
  }
}
