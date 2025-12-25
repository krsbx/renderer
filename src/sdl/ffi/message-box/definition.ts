import { type FFIFunction, FFIType } from 'bun:ffi';

export const MessageBoxDefinition = {
  // bool SDL_ShowMessageBox(const SDL_MessageBoxData *messageboxdata, int *buttonid);                                      // Create a modal message box.
  SDL_ShowMessageBox: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ShowSimpleMessageBox(SDL_MessageBoxFlags flags, const char *title, const char *message, SDL_Window *window);  // Display a simple modal message box.
  SDL_ShowSimpleMessageBox: {
    args: [FFIType.u32, FFIType.cstring, FFIType.cstring, FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
