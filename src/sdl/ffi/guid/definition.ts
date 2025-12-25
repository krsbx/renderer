import { FFIType, type FFIFunction } from 'bun:ffi';

export const GUIDDefinition = {
  // void SDL_GUIDToString(SDL_GUID guid, char *pszGUID, int cbGUID);  // Get an ASCII string representation for a given SDL_GUID.
  SDL_GUIDToString: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // SDL_GUID SDL_StringToGUID(const char *pchGUID);                   // Convert a GUID string into a SDL_GUID structure.
  SDL_StringToGUID: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
