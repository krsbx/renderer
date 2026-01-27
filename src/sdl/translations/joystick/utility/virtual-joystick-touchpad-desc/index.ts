import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class VirtualJoystickTouchpadDesc {
  public static readonly BYTE_SIZE = 8;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(
        data,
        0,
        VirtualJoystickTouchpadDesc.BYTE_SIZE
      );
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

  public static create(data?: StructInit<VirtualJoystickTouchpadDesc>) {
    const instance = new VirtualJoystickTouchpadDesc(
      VirtualJoystickTouchpadDesc.allocMemory()
    );

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get fingerCount() {
    return this.$view.getInt16(ByteOffset.nfingers, true);
  }

  public set fingerCount(value: number) {
    this.$view.setInt16(ByteOffset.nfingers, value, true);
  }
}
