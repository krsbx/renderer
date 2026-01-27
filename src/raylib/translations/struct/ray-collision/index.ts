import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Vector3 } from '../vector3';
import { ByteOffset } from './constant';

export class RayCollision {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly point: Vector3;
  public readonly normal: Vector3;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, RayCollision.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.point = new Vector3(
      this.$memory.subarray(
        ByteOffset.point,
        ByteOffset.point + Vector3.BYTE_SIZE
      )
    );
    this.normal = new Vector3(
      this.$memory.subarray(
        ByteOffset.normal,
        ByteOffset.normal + Vector3.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static create(data?: StructInit<RayCollision>) {
    const instance = new RayCollision(RayCollision.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get hit() {
    return this.$view.getUint8(ByteOffset.hit) !== 0;
  }

  public set hit(value: boolean) {
    this.$view.setUint8(ByteOffset.hit, value ? 1 : 0);
  }

  public get distance() {
    return this.$view.getFloat32(ByteOffset.distance, true);
  }

  public set distance(value: number) {
    this.$view.setFloat32(ByteOffset.distance, value, true);
  }
}
