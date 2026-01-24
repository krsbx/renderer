import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { SensorType } from '../../../../ffi/sensor/constant';
import { ByteOffset } from './constant';

export class VirtualJoystickSensorDesc {
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
        VirtualJoystickSensorDesc.BYTE_SIZE
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

  public get type() {
    return this.$view.getInt32(ByteOffset.type, true) as SensorType;
  }

  public set type(value: SensorType) {
    this.$view.setInt32(ByteOffset.type, value, true);
  }

  public get rate() {
    return this.$view.getFloat32(ByteOffset.rate, true);
  }

  public set rate(value: number) {
    this.$view.setFloat32(ByteOffset.rate, value, true);
  }
}
