import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { Image } from '../image';
import { ByteOffset } from './constant';

export class GlyphInfo {
  public static readonly BYTE_SIZE = 40;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly image: Image;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GlyphInfo.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.image = new Image(
      this.$memory.subarray(
        ByteOffset.image,
        ByteOffset.image + Image.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get value() {
    return this.$view.getInt32(ByteOffset.value, true);
  }

  public set value(value: number) {
    this.$view.setInt32(ByteOffset.value, value, true);
  }

  public get offsetX() {
    return this.$view.getInt32(ByteOffset.offsetX, true);
  }

  public set offsetX(value: number) {
    this.$view.setInt32(ByteOffset.offsetX, value, true);
  }

  public get offsetY() {
    return this.$view.getInt32(ByteOffset.offsetY, true);
  }

  public set offsetY(value: number) {
    this.$view.setInt32(ByteOffset.offsetY, value, true);
  }

  public get advanceX() {
    return this.$view.getInt32(ByteOffset.advanceX, true);
  }

  public set advanceX(value: number) {
    this.$view.setInt32(ByteOffset.advanceX, value, true);
  }
}
