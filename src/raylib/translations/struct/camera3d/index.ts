import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Vector3 } from '../vector3';
import { ByteOffset } from './constant';

export class Camera3D {
  public static readonly BYTE_SIZE = 44;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly position: Vector3;
  public readonly target: Vector3;
  public readonly up: Vector3;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Camera3D.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.position = new Vector3(
      this.$memory.subarray(
        ByteOffset.position,
        ByteOffset.position + Vector3.BYTE_SIZE
      )
    );
    this.target = new Vector3(
      this.$memory.subarray(
        ByteOffset.target,
        ByteOffset.target + Vector3.BYTE_SIZE
      )
    );
    this.up = new Vector3(
      this.$memory.subarray(ByteOffset.up, ByteOffset.up + Vector3.BYTE_SIZE)
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

  public get fovy() {
    return this.$view.getFloat32(ByteOffset.fovy, true);
  }

  public set fovy(value: number) {
    this.$view.setFloat32(ByteOffset.fovy, value, true);
  }

  public get projection() {
    return this.$view.getInt32(ByteOffset.projection, true);
  }

  public set projection(value: number) {
    this.$view.setInt32(ByteOffset.projection, value, true);
  }
}

export { Camera3D as Camera };
