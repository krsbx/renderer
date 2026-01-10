import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { Surface } from '../../surface/utility/surface.snapshot';

export interface RawCursorFrameInfo extends FreeAddress, MemoryAddress {
  surface: Surface;
  duration: number;
}
