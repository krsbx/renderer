import type { PixelFormat } from '../../../ffi/pixels/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawDisplayMode extends FreeAddress, MemoryAddress {
  displayID: number;
  format: PixelFormat;
  w: number;
  h: number;
  pixelDensity: number;
  refreshRate: number;
  refreshRateNumerator: number;
  refreshRateDenominator: number;
}
