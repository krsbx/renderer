import { type FFIFunction, FFIType } from 'bun:ffi';

export const ClipboardDefinition = {
  // bool SDL_SetClipboardText(const char *text);                                                                                                                          // Put UTF-8 text into the clipboard.
  SDL_SetClipboardText: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // char * SDL_GetClipboardText(void);                                                                                                                                    // Get UTF-8 text from the clipboard.
  SDL_GetClipboardText: {
    args: [],
    returns: FFIType.ptr,
  },
  // bool SDL_HasClipboardText(void);                                                                                                                                      // Query whether the clipboard exists and contains a non-empty text string.
  SDL_HasClipboardText: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_SetPrimarySelectionText(const char *text);                                                                                                                   // Put UTF-8 text into the primary selection.
  SDL_SetPrimarySelectionText: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // char * SDL_GetPrimarySelectionText(void);                                                                                                                             // Get UTF-8 text from the primary selection.
  SDL_GetPrimarySelectionText: {
    args: [],
    returns: FFIType.ptr,
  },
  // bool SDL_HasPrimarySelectionText(void);                                                                                                                               // Query whether the primary selection exists and contains a non-empty text string.
  SDL_HasPrimarySelectionText: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_SetClipboardData(SDL_ClipboardDataCallback callback, SDL_ClipboardCleanupCallback cleanup, void *userdata, const char **mime_types, size_t num_mime_types);  // Offer clipboard data to the OS.
  SDL_SetClipboardData: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.bool,
  },
  // bool SDL_ClearClipboardData(void);                                                                                                                                    // Clear the clipboard data.
  SDL_ClearClipboardData: {
    args: [],
    returns: FFIType.bool,
  },
  // void * SDL_GetClipboardData(const char *mime_type, size_t *size);                                                                                                     // Get the data from the clipboard for a given mime type.
  SDL_GetClipboardData: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_HasClipboardData(const char *mime_type);                                                                                                                     // Query whether there is data in the clipboard for the provided mime type.
  SDL_HasClipboardData: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // char ** SDL_GetClipboardMimeTypes(size_t *num_mime_types);                                                                                                            // Retrieve the list of mime types available in the clipboard.
  SDL_GetClipboardMimeTypes: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
