export const SystemTheme = {
  SDL_SYSTEM_THEME_UNKNOWN: 0,
  SDL_SYSTEM_THEME_LIGHT: 1,
  SDL_SYSTEM_THEME_DARK: 2,
} as const;

export type SystemTheme = (typeof SystemTheme)[keyof typeof SystemTheme];

export const DisplayOrientation = {
  SDL_ORIENTATION_UNKNOWN: 0,
  SDL_ORIENTATION_LANDSCAPE: 1,
  SDL_ORIENTATION_LANDSCAPE_FLIPPED: 2,
  SDL_ORIENTATION_PORTRAIT: 3,
  SDL_ORIENTATION_PORTRAIT_FLIPPED: 4,
} as const;

export type DisplayOrientation =
  (typeof DisplayOrientation)[keyof typeof DisplayOrientation];

export const WindowFlags = {
  SDL_WINDOW_FULLSCREEN: 0x0000000000000001n,
  SDL_WINDOW_OPENGL: 0x0000000000000002n,
  SDL_WINDOW_OCCLUDED: 0x0000000000000004n,
  SDL_WINDOW_HIDDEN: 0x0000000000000008n,
  SDL_WINDOW_BORDERLESS: 0x0000000000000010n,
  SDL_WINDOW_RESIZABLE: 0x0000000000000020n,
  SDL_WINDOW_MINIMIZED: 0x0000000000000040n,
  SDL_WINDOW_MAXIMIZED: 0x0000000000000080n,
  SDL_WINDOW_MOUSE_GRABBED: 0x0000000000000100n,
  SDL_WINDOW_INPUT_FOCUS: 0x0000000000000200n,
  SDL_WINDOW_MOUSE_FOCUS: 0x0000000000000400n,
  SDL_WINDOW_EXTERNAL: 0x0000000000000800n,
  SDL_WINDOW_MODAL: 0x0000000000001000n,
  SDL_WINDOW_HIGH_PIXEL_DENSITY: 0x0000000000002000n,
  SDL_WINDOW_MOUSE_CAPTURE: 0x0000000000004000n,
  SDL_WINDOW_MOUSE_RELATIVE_MODE: 0x0000000000008000n,
  SDL_WINDOW_ALWAYS_ON_TOP: 0x0000000000010000n,
  SDL_WINDOW_UTILITY: 0x0000000000020000n,
  SDL_WINDOW_TOOLTIP: 0x0000000000040000n,
  SDL_WINDOW_POPUP_MENU: 0x0000000000080000n,
  SDL_WINDOW_KEYBOARD_GRABBED: 0x0000000000100000n,
  SDL_WINDOW_FILL_DOCUMENT: 0x0000000000200000n,
  SDL_WINDOW_VULKAN: 0x0000000010000000n,
  SDL_WINDOW_METAL: 0x0000000020000000n,
  SDL_WINDOW_TRANSPARENT: 0x0000000040000000n,
  SDL_WINDOW_NOT_FOCUSABLE: 0x0000000080000000n,
} as const;

export type WindowFlags = (typeof WindowFlags)[keyof typeof WindowFlags];

export const FlashOperation = {
  SDL_FLASH_CANCEL: 0,
  SDL_FLASH_BRIEFLY: 1,
  SDL_FLASH_UNTIL_FOCUSED: 2,
} as const;

export type FlashOperation =
  (typeof FlashOperation)[keyof typeof FlashOperation];

export const ProgressState = {
  SDL_PROGRESS_STATE_INVALID: -1,
  SDL_PROGRESS_STATE_NONE: 0,
  SDL_PROGRESS_STATE_INDETERMINATE: 1,
  SDL_PROGRESS_STATE_NORMAL: 2,
  SDL_PROGRESS_STATE_PAUSED: 3,
  SDL_PROGRESS_STATE_ERROR: 4,
} as const;

export type ProgressState = (typeof ProgressState)[keyof typeof ProgressState];

export const GLAttr = {
  SDL_GL_RED_SIZE: 0 /**< the minimum number of bits for the red channel of the color buffer; defaults to 8. */,
  SDL_GL_GREEN_SIZE: 1 /**< the minimum number of bits for the green channel of the color buffer; defaults to 8. */,
  SDL_GL_BLUE_SIZE: 2 /**< the minimum number of bits for the blue channel of the color buffer; defaults to 8. */,
  SDL_GL_ALPHA_SIZE: 3 /**< the minimum number of bits for the alpha channel of the color buffer; defaults to 8. */,
  SDL_GL_BUFFER_SIZE: 4 /**< the minimum number of bits for frame buffer size; defaults to 0. */,
  SDL_GL_DOUBLEBUFFER: 5 /**< whether the output is single or double buffered; defaults to double buffering on. */,
  SDL_GL_DEPTH_SIZE: 6 /**< the minimum number of bits in the depth buffer; defaults to 16. */,
  SDL_GL_STENCIL_SIZE: 7 /**< the minimum number of bits in the stencil buffer; defaults to 0. */,
  SDL_GL_ACCUM_RED_SIZE: 8 /**< the minimum number of bits for the red channel of the accumulation buffer; defaults to 0. */,
  SDL_GL_ACCUM_GREEN_SIZE: 9 /**< the minimum number of bits for the green channel of the accumulation buffer; defaults to 0. */,
  SDL_GL_ACCUM_BLUE_SIZE: 10 /**< the minimum number of bits for the blue channel of the accumulation buffer; defaults to 0. */,
  SDL_GL_ACCUM_ALPHA_SIZE: 11 /**< the minimum number of bits for the alpha channel of the accumulation buffer; defaults to 0. */,
  SDL_GL_STEREO: 12 /**< whether the output is stereo 3D; defaults to off. */,
  SDL_GL_MULTISAMPLEBUFFERS: 13 /**< the number of buffers used for multisample anti-aliasing; defaults to 0. */,
  SDL_GL_MULTISAMPLESAMPLES: 14 /**< the number of samples used around the current pixel used for multisample anti-aliasing. */,
  SDL_GL_ACCELERATED_VISUAL: 15 /**< set to 1 to require hardware acceleration, set to 0 to force software rendering; defaults to allow either. */,
  SDL_GL_RETAINED_BACKING: 16 /**< not used (deprecated). */,
  SDL_GL_CONTEXT_MAJOR_VERSION: 17 /**< OpenGL context major version. */,
  SDL_GL_CONTEXT_MINOR_VERSION: 18 /**< OpenGL context minor version. */,
  SDL_GL_CONTEXT_FLAGS: 19 /**< some combination of 0 or more of elements of the SDL_GLContextFlag enumeration; defaults to 0. */,
  SDL_GL_CONTEXT_PROFILE_MASK: 20 /**< type of GL context (Core, Compatibility, ES). See SDL_GLProfile; default value depends on platform. */,
  SDL_GL_SHARE_WITH_CURRENT_CONTEXT: 21 /**< OpenGL context sharing; defaults to 0. */,
  SDL_GL_FRAMEBUFFER_SRGB_CAPABLE: 22 /**< requests sRGB-capable visual if 1. Defaults to -1 ("don't care"). This is a request; GL drivers might not comply! */,
  SDL_GL_CONTEXT_RELEASE_BEHAVIOR: 23 /**< sets context the release behavior. See SDL_GLContextReleaseFlag; defaults to FLUSH. */,
  SDL_GL_CONTEXT_RESET_NOTIFICATION: 24 /**< set context reset notification. See SDL_GLContextResetNotification; defaults to NO_NOTIFICATION. */,
  SDL_GL_CONTEXT_NO_ERROR: 25,
  SDL_GL_FLOATBUFFERS: 26,
  SDL_GL_EGL_PLATFORM: 27,
} as const;

export type GLAttr = (typeof GLAttr)[keyof typeof GLAttr];
