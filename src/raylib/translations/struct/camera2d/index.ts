import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Vector2 } from '../vector2';
import { ByteOffset } from './constant';

export class Camera2D {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly offset: Vector2;
  public readonly target: Vector2;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Camera2D.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.offset = new Vector2(
      this.$memory.subarray(
        ByteOffset.offset,
        ByteOffset.offset + Vector2.BYTE_SIZE
      )
    );
    this.target = new Vector2(
      this.$memory.subarray(
        ByteOffset.target,
        ByteOffset.target + Vector2.BYTE_SIZE
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

  public get rotation() {
    return this.$view.getFloat32(ByteOffset.rotation, true);
  }

  public set rotation(value: number) {
    this.$view.setFloat32(ByteOffset.rotation, value, true);
  }

  public get zoom() {
    return this.$view.getFloat32(ByteOffset.zoom, true);
  }

  public set zoom(value: number) {
    this.$view.setFloat32(ByteOffset.zoom, value, true);
  }
}
