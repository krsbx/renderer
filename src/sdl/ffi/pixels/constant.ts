import type { Brand } from '../../types/shared';
import { IS_BIG_ENDIAN } from '../../utility/common';

const RawPixelType = {
  UNKNOWN: 0,
  INDEX1: 1,
  INDEX4: 2,
  INDEX8: 3,
  PACKED8: 4,
  PACKED16: 5,
  PACKED32: 6,
  ARRAYU8: 7,
  ARRAYU16: 8,
  ARRAYU32: 9,
  ARRAYF16: 10,
  ARRAYF32: 11,
  /* appended at the end for compatibility with sdl2-compat:  */
  INDEX2: 12,
} as const;

export const PixelType = RawPixelType as Readonly<
  Record<keyof typeof RawPixelType, Brand<number, 'PixelType'>>
>;

export type PixelType = (typeof PixelType)[keyof typeof PixelType];

const RawBitmapOrder = {
  NONE: 0,
  ORDER_4321: 1,
  ORDER_1234: 2,
} as const;

export const BitmapOrder = RawBitmapOrder as Readonly<
  Record<keyof typeof RawBitmapOrder, Brand<number, 'BitmapOrder'>>
>;

export type BitmapOrder = (typeof BitmapOrder)[keyof typeof BitmapOrder];

const RawPackedOrder = {
  NONE: 0,
  XRGB: 1,
  RGBX: 2,
  ARGB: 3,
  RGBA: 4,
  XBGR: 5,
  BGRX: 6,
  ABGR: 7,
  BGRA: 8,
} as const;

export const PackedOrder = RawPackedOrder as Readonly<
  Record<keyof typeof RawPackedOrder, Brand<number, 'PackedOrder'>>
>;

export type PackedOrder = (typeof PackedOrder)[keyof typeof PackedOrder];

const RawArrayOrder = {
  NONE: 0,
  RGB: 1,
  RGBA: 2,
  ARGB: 3,
  BGR: 4,
  BGRA: 5,
  ABGR: 6,
} as const;

export const ArrayOrder = RawArrayOrder as Readonly<
  Record<keyof typeof RawArrayOrder, Brand<number, 'ArrayOrder'>>
>;

export type ArrayOrder = (typeof ArrayOrder)[keyof typeof ArrayOrder];

const RawPackedLayout = {
  NONE: 0,
  LAYOUT_332: 1,
  LAYOUT_4444: 2,
  LAYOUT_1555: 3,
  LAYOUT_5551: 4,
  LAYOUT_565: 5,
  LAYOUT_8888: 6,
  LAYOUT_2101010: 7,
  LAYOUT_1010102: 8,
} as const;

export const PackedLayout = RawPackedLayout as Readonly<
  Record<keyof typeof RawPackedLayout, Brand<number, 'PackedLayout'>>
>;

export type PackedLayout = (typeof PackedLayout)[keyof typeof PackedLayout];

const RawPixelFormat = {
  UNKNOWN: 0,
  INDEX1LSB: 0x11100100,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_INDEX1, SDL_BITMAPORDER_4321, 0, 1, 0), */
  INDEX1MSB: 0x11200100,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_INDEX1, SDL_BITMAPORDER_1234, 0, 1, 0), */
  INDEX2LSB: 0x1c100200,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_INDEX2, SDL_BITMAPORDER_4321, 0, 2, 0), */
  INDEX2MSB: 0x1c200200,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_INDEX2, SDL_BITMAPORDER_1234, 0, 2, 0), */
  INDEX4LSB: 0x12100400,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_INDEX4, SDL_BITMAPORDER_4321, 0, 4, 0), */
  INDEX4MSB: 0x12200400,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_INDEX4, SDL_BITMAPORDER_1234, 0, 4, 0), */
  INDEX8: 0x13000801,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_INDEX8, 0, 0, 8, 1), */
  RGB332: 0x14110801,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED8, SDL_PACKEDORDER_XRGB, SDL_PACKEDLAYOUT_332, 8, 1), */
  XRGB4444: 0x15120c02,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_XRGB, SDL_PACKEDLAYOUT_4444, 12, 2), */
  XBGR4444: 0x15520c02,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_XBGR, SDL_PACKEDLAYOUT_4444, 12, 2), */
  XRGB1555: 0x15130f02,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_XRGB, SDL_PACKEDLAYOUT_1555, 15, 2), */
  XBGR1555: 0x15530f02,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_XBGR, SDL_PACKEDLAYOUT_1555, 15, 2), */
  ARGB4444: 0x15321002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_ARGB, SDL_PACKEDLAYOUT_4444, 16, 2), */
  RGBA4444: 0x15421002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_RGBA, SDL_PACKEDLAYOUT_4444, 16, 2), */
  ABGR4444: 0x15721002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_ABGR, SDL_PACKEDLAYOUT_4444, 16, 2), */
  BGRA4444: 0x15821002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_BGRA, SDL_PACKEDLAYOUT_4444, 16, 2), */
  ARGB1555: 0x15331002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_ARGB, SDL_PACKEDLAYOUT_1555, 16, 2), */
  RGBA5551: 0x15441002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_RGBA, SDL_PACKEDLAYOUT_5551, 16, 2), */
  ABGR1555: 0x15731002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_ABGR, SDL_PACKEDLAYOUT_1555, 16, 2), */
  BGRA5551: 0x15841002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_BGRA, SDL_PACKEDLAYOUT_5551, 16, 2), */
  RGB565: 0x15151002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_XRGB, SDL_PACKEDLAYOUT_565, 16, 2), */
  BGR565: 0x15551002,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED16, SDL_PACKEDORDER_XBGR, SDL_PACKEDLAYOUT_565, 16, 2), */
  RGB24: 0x17101803,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYU8, SDL_ARRAYORDER_RGB, 0, 24, 3), */
  BGR24: 0x17401803,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYU8, SDL_ARRAYORDER_BGR, 0, 24, 3), */
  XRGB8888: 0x16161804,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_XRGB, SDL_PACKEDLAYOUT_8888, 24, 4), */
  RGBX8888: 0x16261804,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_RGBX, SDL_PACKEDLAYOUT_8888, 24, 4), */
  XBGR8888: 0x16561804,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_XBGR, SDL_PACKEDLAYOUT_8888, 24, 4), */
  BGRX8888: 0x16661804,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_BGRX, SDL_PACKEDLAYOUT_8888, 24, 4), */
  ARGB8888: 0x16362004,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_ARGB, SDL_PACKEDLAYOUT_8888, 32, 4), */
  RGBA8888: 0x16462004,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_RGBA, SDL_PACKEDLAYOUT_8888, 32, 4), */
  ABGR8888: 0x16762004,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_ABGR, SDL_PACKEDLAYOUT_8888, 32, 4), */
  BGRA8888: 0x16862004,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_BGRA, SDL_PACKEDLAYOUT_8888, 32, 4), */
  XRGB2101010: 0x16172004,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_XRGB, SDL_PACKEDLAYOUT_2101010, 32, 4), */
  XBGR2101010: 0x16572004,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_XBGR, SDL_PACKEDLAYOUT_2101010, 32, 4), */
  ARGB2101010: 0x16372004,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_ARGB, SDL_PACKEDLAYOUT_2101010, 32, 4), */
  ABGR2101010: 0x16772004,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_PACKED32, SDL_PACKEDORDER_ABGR, SDL_PACKEDLAYOUT_2101010, 32, 4), */
  RGB48: 0x18103006,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYU16, SDL_ARRAYORDER_RGB, 0, 48, 6), */
  BGR48: 0x18403006,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYU16, SDL_ARRAYORDER_BGR, 0, 48, 6), */
  RGBA64: 0x18204008,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYU16, SDL_ARRAYORDER_RGBA, 0, 64, 8), */
  ARGB64: 0x18304008,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYU16, SDL_ARRAYORDER_ARGB, 0, 64, 8), */
  BGRA64: 0x18504008,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYU16, SDL_ARRAYORDER_BGRA, 0, 64, 8), */
  ABGR64: 0x18604008,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYU16, SDL_ARRAYORDER_ABGR, 0, 64, 8), */
  RGB48_FLOAT: 0x1a103006,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF16, SDL_ARRAYORDER_RGB, 0, 48, 6), */
  BGR48_FLOAT: 0x1a403006,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF16, SDL_ARRAYORDER_BGR, 0, 48, 6), */
  RGBA64_FLOAT: 0x1a204008,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF16, SDL_ARRAYORDER_RGBA, 0, 64, 8), */
  ARGB64_FLOAT: 0x1a304008,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF16, SDL_ARRAYORDER_ARGB, 0, 64, 8), */
  BGRA64_FLOAT: 0x1a504008,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF16, SDL_ARRAYORDER_BGRA, 0, 64, 8), */
  ABGR64_FLOAT: 0x1a604008,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF16, SDL_ARRAYORDER_ABGR, 0, 64, 8), */
  RGB96_FLOAT: 0x1b10600c,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF32, SDL_ARRAYORDER_RGB, 0, 96, 12), */
  BGR96_FLOAT: 0x1b40600c,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF32, SDL_ARRAYORDER_BGR, 0, 96, 12), */
  RGBA128_FLOAT: 0x1b208010,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF32, SDL_ARRAYORDER_RGBA, 0, 128, 16), */
  ARGB128_FLOAT: 0x1b308010,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF32, SDL_ARRAYORDER_ARGB, 0, 128, 16), */
  BGRA128_FLOAT: 0x1b508010,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF32, SDL_ARRAYORDER_BGRA, 0, 128, 16), */
  ABGR128_FLOAT: 0x1b608010,
  /* SDL_DEFINE_PIXELFORMAT(SDL_PIXELTYPE_ARRAYF32, SDL_ARRAYORDER_ABGR, 0, 128, 16), */

  YV12: 0x32315659 /**< Planar mode: Y + V + U  (3 planes) */,
  /* SDL_DEFINE_PIXELFOURCC('Y', 'V', '1', '2'), */
  IYUV: 0x56555949 /**< Planar mode: Y + U + V  (3 planes) */,
  /* SDL_DEFINE_PIXELFOURCC('I', 'Y', 'U', 'V'), */
  YUY2: 0x32595559 /**< Packed mode: Y0+U0+Y1+V0 (1 plane) */,
  /* SDL_DEFINE_PIXELFOURCC('Y', 'U', 'Y', '2'), */
  UYVY: 0x59565955 /**< Packed mode: U0+Y0+V0+Y1 (1 plane) */,
  /* SDL_DEFINE_PIXELFOURCC('U', 'Y', 'V', 'Y'), */
  YVYU: 0x55595659 /**< Packed mode: Y0+V0+Y1+U0 (1 plane) */,
  /* SDL_DEFINE_PIXELFOURCC('Y', 'V', 'Y', 'U'), */
  NV12: 0x3231564e /**< Planar mode: Y + U/V interleaved  (2 planes) */,
  /* SDL_DEFINE_PIXELFOURCC('N', 'V', '1', '2'), */
  NV21: 0x3132564e /**< Planar mode: Y + V/U interleaved  (2 planes) */,
  /* SDL_DEFINE_PIXELFOURCC('N', 'V', '2', '1'), */
  P010: 0x30313050 /**< Planar mode: Y + U/V interleaved  (2 planes) */,
  /* SDL_DEFINE_PIXELFOURCC('P', '0', '1', '0'), */
  EXTERNAL_OES: 0x2053454f /**< Android video texture format */,
  /* SDL_DEFINE_PIXELFOURCC('O', 'E', 'S', ' ') */

  MJPG: 0x47504a4d /**< Motion JPEG */,
  /* SDL_DEFINE_PIXELFOURCC('M', 'J', 'P', 'G') */

  /* Aliases for RGBA byte arrays of color data, for the current platform */
  get RGBA32() {
    return IS_BIG_ENDIAN ? this.RGBA8888 : this.ABGR8888;
  },
  get ARGB32() {
    return IS_BIG_ENDIAN ? this.ARGB8888 : this.BGRA8888;
  },
  get BGRA32() {
    return IS_BIG_ENDIAN ? this.BGRA8888 : this.ARGB8888;
  },
  get ABGR32() {
    return IS_BIG_ENDIAN ? this.ABGR8888 : this.RGBA8888;
  },
  get RGBX32() {
    return IS_BIG_ENDIAN ? this.RGBX8888 : this.XBGR8888;
  },
  get XRGB32() {
    return IS_BIG_ENDIAN ? this.XRGB8888 : this.BGRX8888;
  },
  get BGRX32() {
    return IS_BIG_ENDIAN ? this.BGRX8888 : this.XRGB8888;
  },
  get XBGR32() {
    return IS_BIG_ENDIAN ? this.XBGR8888 : this.RGBX8888;
  },
} as const;

export const PixelFormat = RawPixelFormat as Readonly<
  Record<keyof typeof RawPixelFormat, Brand<number, 'PixelFormat'>>
>;

export type PixelFormat = (typeof PixelFormat)[keyof typeof PixelFormat];

const RawColorType = {
  UNKNOWN: 0,
  RGB: 1,
  YCBCR: 2,
} as const;

export const ColorType = RawColorType as Readonly<
  Record<keyof typeof RawColorType, Brand<number, 'ColorType'>>
>;

export type ColorType = (typeof ColorType)[keyof typeof ColorType];

const RawColorRange = {
  UNKNOWN: 0,
  LIMITED: 1 /**< Narrow range, e.g. 16-235 for 8-bit RGB and luma, and 16-240 for 8-bit chroma */,
  FULL: 2 /**< Full range, e.g. 0-255 for 8-bit RGB and luma, and 1-255 for 8-bit chroma */,
} as const;

export const ColorRange = RawColorRange as Readonly<
  Record<keyof typeof RawColorRange, Brand<number, 'ColorRange'>>
>;

export type ColorRange = (typeof ColorRange)[keyof typeof ColorRange];

const RawColorPrimaries = {
  UNKNOWN: 0,
  BT709: 1 /**< ITU-R BT.709-6 */,
  UNSPECIFIED: 2,
  BT470M: 4 /**< ITU-R BT.470-6 System M */,
  BT470BG: 5 /**< ITU-R BT.470-6 System B, G / ITU-R BT.601-7 625 */,
  BT601: 6 /**< ITU-R BT.601-7 525, SMPTE 170M */,
  SMPTE240: 7 /**< SMPTE 240M, functionally the same as BT601 */,
  GENERIC_FILM: 8 /**< Generic film (color filters using Illuminant C) */,
  BT2020: 9 /**< ITU-R BT.2020-2 / ITU-R BT.2100-0 */,
  XYZ: 10 /**< SMPTE ST 428-1 */,
  SMPTE431: 11 /**< SMPTE RP 431-2 */,
  SMPTE432: 12 /**< SMPTE EG 432-1 / DCI P3 */,
  EBU3213: 22 /**< EBU Tech. 3213-E */,
  CUSTOM: 31,
} as const;

export const ColorPrimaries = RawColorPrimaries as Readonly<
  Record<keyof typeof RawColorPrimaries, Brand<number, 'ColorPrimaries'>>
>;

export type ColorPrimaries =
  (typeof ColorPrimaries)[keyof typeof ColorPrimaries];

const RawTransferCharacteristics = {
  UNKNOWN: 0,
  BT709: 1 /**< Rec. ITU-R BT.709-6 / ITU-R BT1361 */,
  UNSPECIFIED: 2,
  GAMMA22: 4 /**< ITU-R BT.470-6 System M / ITU-R BT1700 625 PAL & SECAM */,
  GAMMA28: 5 /**< ITU-R BT.470-6 System B, G */,
  BT601: 6 /**< SMPTE ST 170M / ITU-R BT.601-7 525 or 625 */,
  SMPTE240: 7 /**< SMPTE ST 240M */,
  LINEAR: 8,
  LOG100: 9,
  LOG100_SQRT10: 10,
  IEC61966: 11 /**< IEC 61966-2-4 */,
  BT1361: 12 /**< ITU-R BT1361 Extended Colour Gamut */,
  SRGB: 13 /**< IEC 61966-2-1 (sRGB or sYCC) */,
  BT2020_10BIT: 14 /**< ITU-R BT2020 for 10-bit system */,
  BT2020_12BIT: 15 /**< ITU-R BT2020 for 12-bit system */,
  PQ: 16 /**< SMPTE ST 2084 for 10-, 12-, 14- and 16-bit systems */,
  SMPTE428: 17 /**< SMPTE ST 428-1 */,
  HLG: 18 /**< ARIB STD-B67, known as "hybrid log-gamma" (HLG) */,
  CUSTOM: 31,
} as const;

export const TransferCharacteristics = RawTransferCharacteristics as Readonly<
  Record<
    keyof typeof RawTransferCharacteristics,
    Brand<number, 'TransferCharacteristics'>
  >
>;

export type TransferCharacteristics =
  (typeof TransferCharacteristics)[keyof typeof TransferCharacteristics];

const RawMatrixCoefficients = {
  IDENTITY: 0,
  BT709: 1 /**< ITU-R BT.709-6 */,
  UNSPECIFIED: 2,
  FCC: 4 /**< US FCC Title 47 */,
  BT470BG: 5 /**< ITU-R BT.470-6 System B, G / ITU-R BT.601-7 625, functionally the same as SDL_MATRIX_COEFFICIENTS_BT601 */,
  BT601: 6 /**< ITU-R BT.601-7 525 */,
  SMPTE240: 7 /**< SMPTE 240M */,
  YCGCO: 8,
  BT2020_NCL: 9 /**< ITU-R BT.2020-2 non-constant luminance */,
  BT2020_CL: 10 /**< ITU-R BT.2020-2 constant luminance */,
  SMPTE2085: 11 /**< SMPTE ST 2085 */,
  CHROMA_DERIVED_NCL: 12,
  CHROMA_DERIVED_CL: 13,
  ICTCP: 14 /**< ITU-R BT.2100-0 ICTCP */,
  CUSTOM: 31,
} as const;

export const MatrixCoefficients = RawMatrixCoefficients as Readonly<
  Record<
    keyof typeof RawMatrixCoefficients,
    Brand<number, 'MatrixCoefficients'>
  >
>;

export type MatrixCoefficients =
  (typeof MatrixCoefficients)[keyof typeof MatrixCoefficients];

const RawChromaLocation = {
  NONE: 0 /**< RGB, no chroma sampling */,
  LEFT: 1 /**< In MPEG-2, MPEG-4, and AVC, Cb and Cr are taken on midpoint of the left-edge of the 2x2 square. In other words, they have the same horizontal location as the top-left pixel, but is shifted one-half pixel down vertically. */,
  CENTER: 2 /**< In JPEG/JFIF, H.261, and MPEG-1, Cb and Cr are taken at the center of the 2x2 square. In other words, they are offset one-half pixel to the right and one-half pixel down compared to the top-left pixel. */,
  TOPLEFT: 3 /**< In HEVC for BT.2020 and BT.2100 content (in particular on Blu-rays), Cb and Cr are sampled at the same location as the group's top-left Y pixel ("co-sited", "co-located"). */,
} as const;

export const ChromaLocation = RawChromaLocation as Readonly<
  Record<keyof typeof RawChromaLocation, Brand<number, 'ChromaLocation'>>
>;

export type ChromaLocation =
  (typeof ChromaLocation)[keyof typeof ChromaLocation];

const RawColorspace = {
  UNKNOWN: 0,

  /* sRGB is a gamma corrected colorspace, and the default colorspace for SDL rendering and 8-bit RGB surfaces */
  SRGB: 0x120005a0 /**< Equivalent to DXGI_COLOR_SPACE_RGB_FULL_G22_NONE_P709 */,

  /* This is a linear colorspace and the default colorspace for floating point surfaces. On Windows this is the scRGB colorspace, and on Apple platforms this is kCGColorSpaceExtendedLinearSRGB for EDR content */
  SRGB_LINEAR: 0x12000500 /**< Equivalent to DXGI_COLOR_SPACE_RGB_FULL_G10_NONE_P709  */,

  /* HDR10 is a non-linear HDR colorspace and the default colorspace for 10-bit surfaces */
  HDR10: 0x12002600 /**< Equivalent to DXGI_COLOR_SPACE_RGB_FULL_G2084_NONE_P2020  */,

  JPEG: 0x220004c6 /**< Equivalent to DXGI_COLOR_SPACE_YCBCR_FULL_G22_NONE_P709_X601 */,

  BT601_LIMITED: 0x211018c6 /**< Equivalent to DXGI_COLOR_SPACE_YCBCR_STUDIO_G22_LEFT_P601 */,

  BT601_FULL: 0x221018c6 /**< Equivalent to DXGI_COLOR_SPACE_YCBCR_STUDIO_G22_LEFT_P601 */,

  BT709_LIMITED: 0x21100421 /**< Equivalent to DXGI_COLOR_SPACE_YCBCR_STUDIO_G22_LEFT_P709 */,

  BT709_FULL: 0x22100421 /**< Equivalent to DXGI_COLOR_SPACE_YCBCR_STUDIO_G22_LEFT_P709 */,

  BT2020_LIMITED: 0x21102609 /**< Equivalent to DXGI_COLOR_SPACE_YCBCR_STUDIO_G22_LEFT_P2020 */,

  BT2020_FULL: 0x22102609 /**< Equivalent to DXGI_COLOR_SPACE_YCBCR_FULL_G22_LEFT_P2020 */,

  RGB_DEFAULT: 0x120005a0 /**< The default colorspace for RGB surfaces if no colorspace is specified (same as SRGB) */,
  YUV_DEFAULT: 0x211018c6 /**< The default colorspace for YUV surfaces if no colorspace is specified (same as BT601_LIMITED) */,
} as const;

export const Colorspace = RawColorspace as Readonly<
  Record<keyof typeof RawColorspace, Brand<number, 'Colorspace'>>
>;

export type Colorspace = (typeof Colorspace)[keyof typeof Colorspace];
