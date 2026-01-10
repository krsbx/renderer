import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { HapticDirectionType } from '../../../../ffi/haptic/constant';
import type { NumericRange } from '../../../../types/shared';
import { ByteOffset } from './constant';

export class HapticDirection {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
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
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get type() {
    return this.$view.getUint8(ByteOffset.type) as HapticDirectionType;
  }

  public set type(value: HapticDirectionType) {
    this.$view.setUint8(ByteOffset.type, value);
  }

  public getDir(index: NumericRange<0, 2>) {
    return this.$view.getInt32(ByteOffset.dir1 + index * 4, true);
  }

  public setDir(index: NumericRange<0, 2>, value: number) {
    this.$view.setInt32(ByteOffset.dir1 + index * 4, value, true);
  }
}
