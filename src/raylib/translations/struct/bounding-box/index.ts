import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Vector3 } from '../vector3';
import { ByteOffset } from './constant';

export class BoundingBox {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly min: Vector3;
  public readonly max: Vector3;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, BoundingBox.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.min = new Vector3(
      this.$memory.subarray(ByteOffset.min, ByteOffset.min + Vector3.BYTE_SIZE)
    );
    this.max = new Vector3(
      this.$memory.subarray(ByteOffset.max, ByteOffset.max + Vector3.BYTE_SIZE)
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static create(data?: StructInit<BoundingBox>) {
    const instance = new BoundingBox(BoundingBox.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }
}
