import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { Texture } from '../texture';
import { ByteOffset } from './constant';

export class RenderTexture {
  public static readonly BYTE_SIZE = 44;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly texture: Texture;
  public readonly depth: Texture;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, RenderTexture.BYTE_SIZE);
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
    this.depth = new Texture(
      this.$memory.subarray(
        ByteOffset.depth,
        ByteOffset.depth + Texture.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get id() {
    return this.$view.getUint32(ByteOffset.id, true);
  }

  public set id(value: number) {
    this.$view.setUint32(ByteOffset.id, value, true);
  }
}
