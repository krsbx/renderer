import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import type {} from '../../../ffi/video/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawCameraSpec extends FreeAddress, MemoryAddress {
  format: PixelFormat;
  colorspace: Colorspace;
  width: number;
  height: number;
  framerate_numerator: number;
  framerate_denominator: number;
}
