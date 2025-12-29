import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { FColor } from '../../pixels/utility/fcolor';
import type { FPoint } from '../../rect/utility/fpoint';

export interface RawVertex extends FreeAddress, MemoryAddress {
  position: FPoint;
  color: FColor;
  tex_coord: FPoint;
}
