import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Surface } from '../../../surface/utility';
import { ByteOffset } from './constant';

export class CursorFrameInfo {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly surface: Surface;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
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

    this.surface = new Surface(
      this.$memory.subarray(
        ByteOffset.surface,
        ByteOffset.surface + Surface.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<CursorFrameInfo>) {
    const instance = new CursorFrameInfo(CursorFrameInfo.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get duration() {
    return this.$view.getUint32(ByteOffset.duration, true);
  }

  public set duration(value: number) {
    this.$view.setUint32(ByteOffset.duration, value, true);
  }
}
