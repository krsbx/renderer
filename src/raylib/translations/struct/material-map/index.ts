import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Color } from '../color';
import { Texture } from '../texture';
import { ByteOffset } from './constant';

export class MaterialMap {
  public static readonly BYTE_SIZE = 28;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly texture: Texture;
  public readonly color: Color;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, MaterialMap.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.texture = new Texture(
      this.$memory.subarray(
        ByteOffset.texture,
        ByteOffset.texture + Texture.BYTE_SIZE
      )
    );
    this.color = new Color(
      this.$memory.subarray(
        ByteOffset.color,
        ByteOffset.color + Color.BYTE_SIZE
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

  public get value() {
    return this.$view.getFloat32(ByteOffset.value, true);
  }

  public set value(v: number) {
    this.$view.setFloat32(ByteOffset.value, v, true);
  }
}
