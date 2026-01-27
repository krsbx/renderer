import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Color } from '../color';
import { ByteOffset } from './constant';

export class Palette {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly colors: Color[];

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Palette.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.colors = Array.from({ length: this.colorCount }, (_, i) => {
      const start = i * Color.BYTE_SIZE;
      const end = start + Color.BYTE_SIZE;

      return new Color(this.$memory.subarray(start, end));
    });
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<Palette>) {
    const instance = new Palette(Palette.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get colorCount() {
    return this.$view.getInt32(ByteOffset.ncolors, true);
  }

  public set colorCount(value: number) {
    this.$view.setInt32(ByteOffset.ncolors, value, true);
  }

  public get version() {
    return this.$view.getUint32(ByteOffset.version, true);
  }

  public set version(value: number) {
    this.$view.setUint32(ByteOffset.version, value, true);
  }

  public get refcount() {
    return this.$view.getInt32(ByteOffset.refcount, true);
  }

  public set refcount(value: number) {
    this.$view.setInt32(ByteOffset.refcount, value, true);
  }
}
