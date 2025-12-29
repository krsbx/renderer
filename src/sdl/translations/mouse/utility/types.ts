import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { Surface } from '../../surface/surface';

export interface RawCursorFrameInfo extends FreeAddress, MemoryAddress {
  surface: Surface;
  duration: number;
}
