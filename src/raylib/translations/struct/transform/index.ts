import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Vector3 } from '../vector3';
import { Quaternion } from '../vector4';
import { ByteOffset } from './constant';

export class Transform {
  public static readonly BYTE_SIZE = 40;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly translation: Vector3;
  public readonly rotation: Quaternion;
  public readonly scale: Vector3;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Transform.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.translation = new Vector3(
      this.$memory.subarray(
        ByteOffset.translation,
        ByteOffset.translation + Vector3.BYTE_SIZE
      )
    );
    this.rotation = new Quaternion(
      this.$memory.subarray(
        ByteOffset.rotation,
        ByteOffset.rotation + Quaternion.BYTE_SIZE
      )
    );
    this.scale = new Vector3(
      this.$memory.subarray(
        ByteOffset.scale,
        ByteOffset.scale + Vector3.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }
}
