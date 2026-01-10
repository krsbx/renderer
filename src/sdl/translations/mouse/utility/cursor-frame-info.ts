import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { Surface } from '../../surface/utility/surface';
import { ByteOffset } from './constant';

export class CursorFrameInfo {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly surface: Surface;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, CursorFrameInfo.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.surface = new Surface(this.$address);
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get duration() {
    return this.$view.getUint32(ByteOffset.duration, true);
  }

  public set duration(value: number) {
    this.$view.setUint32(ByteOffset.duration, value, true);
  }
}
