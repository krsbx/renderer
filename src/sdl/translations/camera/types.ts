import type { Colorspace } from '../../ffi/surface/constant';
import type { PixelFormat } from '../../ffi/video/constant';
import type { FreeAddress, MemoryAddress } from '../../types/shared';

export interface RawCameraSpec extends FreeAddress, MemoryAddress {
  format: PixelFormat;
  colorspace: Colorspace;
  width: number;
  height: number;
  framerate_numerator: number;
  framerate_denominator: number;
}
