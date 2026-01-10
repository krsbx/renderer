import type { FreeAddress, MemoryAddress } from '../../../../types/shared';
import type { FColor } from '../../../pixels/utility/fcolor/fcolor.snapshot';
import type { FPoint } from '../../../rect/utility/fpoint/fpoint.snapshot';

export interface RawVertex extends FreeAddress, MemoryAddress {
  position: FPoint;
  color: FColor;
  tex_coord: FPoint;
}
