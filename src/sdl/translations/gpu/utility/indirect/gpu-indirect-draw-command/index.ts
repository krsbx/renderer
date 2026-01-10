import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUIndirectDrawCommand {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, GPUIndirectDrawCommand.BYTE_SIZE);
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

  public get num_vertices() {
    return this.$view.getUint32(ByteOffset.num_vertices, true);
  }

  public set num_vertices(value: number) {
    this.$view.setUint32(ByteOffset.num_vertices, value, true);
  }

  public get num_instances() {
    return this.$view.getUint32(ByteOffset.num_instances, true);
  }

  public set num_instances(value: number) {
    this.$view.setUint32(ByteOffset.num_instances, value, true);
  }

  public get first_vertex() {
    return this.$view.getUint32(ByteOffset.first_vertex, true);
  }

  public set first_vertex(value: number) {
    this.$view.setUint32(ByteOffset.first_vertex, value, true);
  }

  public get first_instance() {
    return this.$view.getUint32(ByteOffset.first_instance, true);
  }

  public set first_instance(value: number) {
    this.$view.setUint32(ByteOffset.first_instance, value, true);
  }
}
