import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { FColor } from '../../../pixels/utility/fcolor/fcolor';
import { FPoint } from '../../../rect/utility/fpoint/fpoint';
import { ByteOffset } from './constant';

export class Vertex {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly position: FPoint;
  public readonly color: FColor;
  public readonly tex_coord: FPoint;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, Vertex.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.position = new FPoint(
      this.$memory.subarray(
        ByteOffset.position,
        FPoint.BYTE_SIZE + ByteOffset.position
      )
    );
    this.color = new FColor(
      this.$memory.subarray(
        ByteOffset.color,
        FColor.BYTE_SIZE + ByteOffset.color
      )
    );
    this.tex_coord = new FPoint(
      this.$memory.subarray(
        ByteOffset.tex_coord,
        FPoint.BYTE_SIZE + ByteOffset.tex_coord
      )
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }
}
