import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { FColor } from '../../../pixels/utility';
import { FPoint } from '../../../rect/utility';
import { ByteOffset } from './constant';

export class Vertex extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public readonly position: FPoint;
  public readonly color: FColor;
  public readonly texCoord: FPoint;

  public constructor(data: BaseStructOptions) {
    super(data);

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
}
