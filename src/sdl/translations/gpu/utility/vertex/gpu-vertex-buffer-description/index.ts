import { type Pointer, ptr, toArrayBuffer } from 'bun:ffi';
import type { GPUVertexInputRate } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUVertexBufferDescription {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(
        data,
        0,
        GPUVertexBufferDescription.BYTE_SIZE
      );
      this.$memory = new Uint8Array(buffer);
      this.$address = ptr(buffer);
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

  public get slot() {
    return this.$view.getUint32(ByteOffset.slot, true);
  }

  public set slot(value: number) {
    this.$view.setUint32(ByteOffset.slot, value, true);
  }

  public get pitch() {
    return this.$view.getUint32(ByteOffset.pitch, true);
  }

  public set pitch(value: number) {
    this.$view.setUint32(ByteOffset.pitch, value, true);
  }

  public get input_rate() {
    return this.$view.getUint32(
      ByteOffset.input_rate,
      true
    ) as GPUVertexInputRate;
  }

  public set input_rate(value: GPUVertexInputRate) {
    this.$view.setUint32(ByteOffset.input_rate, value, true);
  }

  public get instance_step_rate() {
    return this.$view.getUint32(ByteOffset.instance_step_rate, true);
  }

  public set instance_step_rate(value: number) {
    this.$view.setUint32(ByteOffset.instance_step_rate, value, true);
  }
}
