import { type FFIFunction, FFIType } from 'bun:ffi';

export const FileSystemDefinition = {
  // const char * SDL_GetBasePath(void);                                                                      // Get the directory where the application was run from.
  SDL_GetBasePath: {
    args: [],
    returns: FFIType.cstring,
  },
  // char * SDL_GetPrefPath(const char *org, const char *app);                                                // Get the user-and-app-specific path where files can be written.
  SDL_GetPrefPath: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetUserFolder(SDL_Folder folder);                                                       // Finds the most suitable user folder for a specific purpose.
  SDL_GetUserFolder: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // bool SDL_CreateDirectory(const char *path);                                                              // Create a directory, and any missing parent directories.
  SDL_CreateDirectory: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_EnumerateDirectory(const char *path, SDL_EnumerateDirectoryCallback callback, void *userdata);  // Enumerate a directory through a callback function.
  SDL_EnumerateDirectory: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RemovePath(const char *path);                                                                   // Remove a file or an empty directory.
  SDL_RemovePath: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_RenamePath(const char *oldpath, const char *newpath);                                           // Rename a file or directory.
  SDL_RenamePath: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_CopyFile(const char *oldpath, const char *newpath);                                             // Copy a file.
  SDL_CopyFile: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_GetPathInfo(const char *path, SDL_PathInfo *info);                                              // Get information about a filesystem path.
  SDL_GetPathInfo: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.bool,
  },
  // char ** SDL_GlobDirectory(const char *path, const char *pattern, SDL_GlobFlags flags, int *count);       // Enumerate a directory tree, filtered by pattern, and return a list.
  SDL_GlobDirectory: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.u32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char * SDL_GetCurrentDirectory(void);                                                                    // Get what the system believes is the "current working directory."
  SDL_GetCurrentDirectory: {
    args: [],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
