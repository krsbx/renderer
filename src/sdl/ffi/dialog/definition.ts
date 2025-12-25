import { FFIType, type FFIFunction } from 'bun:ffi';

export const DialogDefinition = {
  // void SDL_ShowOpenFileDialog(SDL_DialogFileCallback callback, void *userdata, SDL_Window *window, const SDL_DialogFileFilter *filters, int nfilters, const char *default_location, bool allow_many);  // Displays a dialog that lets the user select a file on their filesystem.
  SDL_ShowOpenFileDialog: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.cstring,
      FFIType.bool,
    ],
    returns: FFIType.void,
  },
  // void SDL_ShowSaveFileDialog(SDL_DialogFileCallback callback, void *userdata, SDL_Window *window, const SDL_DialogFileFilter *filters, int nfilters, const char *default_location);                   // Displays a dialog that lets the user choose a new or existing file on their filesystem.
  SDL_ShowSaveFileDialog: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.cstring,
    ],
    returns: FFIType.void,
  },
  // void SDL_ShowOpenFolderDialog(SDL_DialogFileCallback callback, void *userdata, SDL_Window *window, const char *default_location, bool allow_many);                                                   // Displays a dialog that lets the user select a folder on their filesystem.
  SDL_ShowOpenFolderDialog: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.cstring,
      FFIType.bool,
    ],
    returns: FFIType.void,
  },
  // void SDL_ShowFileDialogWithProperties(SDL_FileDialogType type, SDL_DialogFileCallback callback, void *userdata, SDL_PropertiesID props);                                                             // Create and launch a file dialog with the specified properties.
  SDL_ShowFileDialogWithProperties: {
    args: [FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
