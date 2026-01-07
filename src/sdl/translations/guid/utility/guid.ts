import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';

export class GUID {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GUID.BYTE_SIZE);
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

  public get data() {
    return this.$memory;
  }

  public getByte(index: number) {
    return this.$view.getUint8(index);
  }

  public setByte(index: number, value: number) {
    this.$view.setUint8(index, value);
  }

  public toString() {
    return Array.from(this.$memory)
      .map((v) => v.toString(16).padStart(2, '0'))
      .join('');
  }
}
