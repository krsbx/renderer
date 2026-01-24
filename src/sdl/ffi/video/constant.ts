import type { Brand } from '@/types/shared';

const RawSystemTheme = {
  UNKNOWN: 0,
  LIGHT: 1,
  DARK: 2,
} as const;

export const SystemTheme = RawSystemTheme as Readonly<
  Record<keyof typeof RawSystemTheme, Brand<number, 'SystemTheme'>>
>;

export type SystemTheme = (typeof SystemTheme)[keyof typeof SystemTheme];

const RawDisplayOrientation = {
  UNKNOWN: 0,
  LANDSCAPE: 1,
  LANDSCAPE_FLIPPED: 2,
  PORTRAIT: 3,
  PORTRAIT_FLIPPED: 4,
} as const;

export const DisplayOrientation = RawDisplayOrientation as Readonly<
  Record<
    keyof typeof RawDisplayOrientation,
    Brand<number, 'DisplayOrientation'>
  >
>;

export type DisplayOrientation =
  (typeof DisplayOrientation)[keyof typeof DisplayOrientation];

const RawWindowFlags = {
  FULLSCREEN: 0x0000000000000001n,
  OPENGL: 0x0000000000000002n,
  OCCLUDED: 0x0000000000000004n,
  HIDDEN: 0x0000000000000008n,
  BORDERLESS: 0x0000000000000010n,
  RESIZABLE: 0x0000000000000020n,
  MINIMIZED: 0x0000000000000040n,
  MAXIMIZED: 0x0000000000000080n,
  MOUSE_GRABBED: 0x0000000000000100n,
  INPUT_FOCUS: 0x0000000000000200n,
  MOUSE_FOCUS: 0x0000000000000400n,
  EXTERNAL: 0x0000000000000800n,
  MODAL: 0x0000000000001000n,
  HIGH_PIXEL_DENSITY: 0x0000000000002000n,
  MOUSE_CAPTURE: 0x0000000000004000n,
  MOUSE_RELATIVE_MODE: 0x0000000000008000n,
  ALWAYS_ON_TOP: 0x0000000000010000n,
  UTILITY: 0x0000000000020000n,
  TOOLTIP: 0x0000000000040000n,
  POPUP_MENU: 0x0000000000080000n,
  KEYBOARD_GRABBED: 0x0000000000100000n,
  FILL_DOCUMENT: 0x0000000000200000n,
  VULKAN: 0x0000000010000000n,
  METAL: 0x0000000020000000n,
  TRANSPARENT: 0x0000000040000000n,
  NOT_FOCUSABLE: 0x0000000080000000n,
} as const;

export const WindowFlags = RawWindowFlags as Readonly<
  Record<keyof typeof RawWindowFlags, Brand<bigint, 'WindowFlags'>>
>;

export type WindowFlags = (typeof WindowFlags)[keyof typeof WindowFlags];

const RawFlashOperation = {
  CANCEL: 0,
  BRIEFLY: 1,
  UNTIL_FOCUSED: 2,
} as const;

export const FlashOperation = RawFlashOperation as Readonly<
  Record<keyof typeof RawFlashOperation, Brand<number, 'FlashOperation'>>
>;

export type FlashOperation =
  (typeof FlashOperation)[keyof typeof FlashOperation];

const RawProgressState = {
  INVALID: -1,
  NONE: 0,
  INDETERMINATE: 1,
  NORMAL: 2,
  PAUSED: 3,
  ERROR: 4,
} as const;

export const ProgressState = RawProgressState as Readonly<
  Record<keyof typeof RawProgressState, Brand<number, 'ProgressState'>>
>;

export type ProgressState = (typeof ProgressState)[keyof typeof ProgressState];

const RawGLAttr = {
  RED_SIZE: 0 /**< the minimum number of bits for the red channel of the color buffer; defaults to 8. */,
  GREEN_SIZE: 1 /**< the minimum number of bits for the green channel of the color buffer; defaults to 8. */,
  BLUE_SIZE: 2 /**< the minimum number of bits for the blue channel of the color buffer; defaults to 8. */,
  ALPHA_SIZE: 3 /**< the minimum number of bits for the alpha channel of the color buffer; defaults to 8. */,
  BUFFER_SIZE: 4 /**< the minimum number of bits for frame buffer size; defaults to 0. */,
  DOUBLEBUFFER: 5 /**< whether the output is single or double buffered; defaults to double buffering on. */,
  DEPTH_SIZE: 6 /**< the minimum number of bits in the depth buffer; defaults to 16. */,
  STENCIL_SIZE: 7 /**< the minimum number of bits in the stencil buffer; defaults to 0. */,
  ACCUM_RED_SIZE: 8 /**< the minimum number of bits for the red channel of the accumulation buffer; defaults to 0. */,
  ACCUM_GREEN_SIZE: 9 /**< the minimum number of bits for the green channel of the accumulation buffer; defaults to 0. */,
  ACCUM_BLUE_SIZE: 10 /**< the minimum number of bits for the blue channel of the accumulation buffer; defaults to 0. */,
  ACCUM_ALPHA_SIZE: 11 /**< the minimum number of bits for the alpha channel of the accumulation buffer; defaults to 0. */,
  STEREO: 12 /**< whether the output is stereo 3D; defaults to off. */,
  MULTISAMPLEBUFFERS: 13 /**< the number of buffers used for multisample anti-aliasing; defaults to 0. */,
  MULTISAMPLESAMPLES: 14 /**< the number of samples used around the current pixel used for multisample anti-aliasing. */,
  ACCELERATED_VISUAL: 15 /**< set to 1 to require hardware acceleration, set to 0 to force software rendering; defaults to allow either. */,
  RETAINED_BACKING: 16 /**< not used (deprecated). */,
  CONTEXT_MAJOR_VERSION: 17 /**< OpenGL context major version. */,
  CONTEXT_MINOR_VERSION: 18 /**< OpenGL context minor version. */,
  CONTEXT_FLAGS: 19 /**< some combination of 0 or more of elements of the SDL_GLContextFlag enumeration; defaults to 0. */,
  CONTEXT_PROFILE_MASK: 20 /**< type of GL context (Core, Compatibility, ES). See SDL_GLProfile; default value depends on platform. */,
  SHARE_WITH_CURRENT_CONTEXT: 21 /**< OpenGL context sharing; defaults to 0. */,
  FRAMEBUFFER_SRGB_CAPABLE: 22 /**< requests sRGB-capable visual if 1. Defaults to -1 ("don't care"). This is a request; GL drivers might not comply! */,
  CONTEXT_RELEASE_BEHAVIOR: 23 /**< sets context the release behavior. See SDL_GLContextReleaseFlag; defaults to FLUSH. */,
  CONTEXT_RESET_NOTIFICATION: 24 /**< set context reset notification. See SDL_GLContextResetNotification; defaults to NO_NOTIFICATION. */,
  CONTEXT_NO_ERROR: 25,
  FLOATBUFFERS: 26,
  EGL_PLATFORM: 27,
} as const;

export const GLAttr = RawGLAttr as Readonly<
  Record<keyof typeof RawGLAttr, Brand<number, 'GLAttr'>>
>;

export type GLAttr = (typeof GLAttr)[keyof typeof GLAttr];

const RawGLProfile = {
  CORE: 0x0001 /**< OpenGL Core Profile context */,
  COMPATIBILITY: 0x0002 /**< OpenGL Compatibility Profile context */,
  ES: 0x0004 /**< GLX_CONTEXT_ES2_PROFILE_BIT_EXT */,
} as const;

export const GLProfile = RawGLProfile as Readonly<
  Record<keyof typeof RawGLProfile, Brand<number, 'GLProfile'>>
>;

export type GLProfile = (typeof GLProfile)[keyof typeof GLProfile];

const RawGLContextFlag = {
  DEBUG_FLAG: 0x0001,
  FORWARD_COMPATIBLE_FLAG: 0x0002,
  ROBUST_ACCESS_FLAG: 0x0004,
  RESET_ISOLATION_FLAG: 0x0008,
} as const;

export const GLContextFlag = RawGLContextFlag as Readonly<
  Record<keyof typeof RawGLContextFlag, Brand<number, 'GLContextFlag'>>
>;

export type GLContextFlag = (typeof GLContextFlag)[keyof typeof GLContextFlag];

const RawGLContextReleaseFlag = {
  FLUSH: 0x0001,
  NONE: 0x0000,
} as const;

export const GLContextReleaseFlag = RawGLContextReleaseFlag as Readonly<
  Record<
    keyof typeof RawGLContextReleaseFlag,
    Brand<number, 'GLContextReleaseFlag'>
  >
>;

export type GLContextReleaseFlag =
  (typeof GLContextReleaseFlag)[keyof typeof GLContextReleaseFlag];

const RawGLContextResetNotification = {
  NO_NOTIFICATION: 0x0000,
  LOSE_CONTEXT_ON_RESET: 0x0001,
} as const;

export const GLContextResetNotification =
  RawGLContextResetNotification as Readonly<
    Record<
      keyof typeof RawGLContextResetNotification,
      Brand<number, 'GLContextResetNotification'>
    >
  >;

export type GLContextResetNotification =
  (typeof GLContextResetNotification)[keyof typeof GLContextResetNotification];
