import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { FColor } from '../../../pixels/utility';
import { FPoint } from '../../../rect/utility';
import { ByteOffset } from './constant';

export class Vertex {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly position: FPoint;
  public readonly color: FColor;
  public readonly texCoord: FPoint;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
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
    this.texCoord = new FPoint(
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
