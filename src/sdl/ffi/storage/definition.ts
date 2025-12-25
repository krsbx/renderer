import { type FFIFunction, FFIType } from 'bun:ffi';

export const StorageDefinition = {
  // SDL_Storage * SDL_OpenTitleStorage(const char *override, SDL_PropertiesID props);                                                     // Opens up a read-only container for the application's filesystem.
  SDL_OpenTitleStorage: {
    args: [FFIType.cstring, FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Storage * SDL_OpenUserStorage(const char *org, const char *app, SDL_PropertiesID props);                                          // Opens up a container for a user's unique read/write filesystem.
  SDL_OpenUserStorage: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Storage * SDL_OpenFileStorage(const char *path);                                                                                  // Opens up a container for local filesystem storage.
  SDL_OpenFileStorage: {
    args: [FFIType.cstring],
    returns: FFIType.ptr,
  },
  // SDL_Storage * SDL_OpenStorage(const SDL_StorageInterface *iface, void *userdata);                                                     // Opens up a container using a client-provided storage interface.
  SDL_OpenStorage: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_CloseStorage(SDL_Storage *storage);                                                                                          // Closes and frees a storage container.
  SDL_CloseStorage: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_StorageReady(SDL_Storage *storage);                                                                                          // Checks if the storage container is ready to use.
  SDL_StorageReady: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetStorageFileSize(SDL_Storage *storage, const char *path, Uint64 *length);                                                  // Query the size of a file within a storage container.
  SDL_GetStorageFileSize: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadStorageFile(SDL_Storage *storage, const char *path, void *destination, Uint64 length);                                   // Synchronously read a file from a storage container into a client-provided buffer.
  SDL_ReadStorageFile: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr, FFIType.u64],
    returns: FFIType.bool,
  },
  // bool SDL_WriteStorageFile(SDL_Storage *storage, const char *path, const void *source, Uint64 length);                                 // Synchronously write a file from client memory into a storage container.
  SDL_WriteStorageFile: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr, FFIType.u64],
    returns: FFIType.bool,
  },
  // bool SDL_CreateStorageDirectory(SDL_Storage *storage, const char *path);                                                              // Create a directory in a writable storage container.
  SDL_CreateStorageDirectory: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_EnumerateStorageDirectory(SDL_Storage *storage, const char *path, SDL_EnumerateDirectoryCallback callback, void *userdata);  // Enumerate a directory in a storage container through a callback function.
  SDL_EnumerateStorageDirectory: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RemoveStoragePath(SDL_Storage *storage, const char *path);                                                                   // Remove a file or an empty directory in a writable storage container.
  SDL_RemoveStoragePath: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_RenameStoragePath(SDL_Storage *storage, const char *oldpath, const char *newpath);                                           // Rename a file or directory in a writable storage container.
  SDL_RenameStoragePath: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_CopyStorageFile(SDL_Storage *storage, const char *oldpath, const char *newpath);                                             // Copy a file in a writable storage container.
  SDL_CopyStorageFile: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_GetStoragePathInfo(SDL_Storage *storage, const char *path, SDL_PathInfo *info);                                              // Get information about a filesystem path in a storage container.
  SDL_GetStoragePathInfo: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
    returns: FFIType.bool,
  },
  // Uint64 SDL_GetStorageSpaceRemaining(SDL_Storage *storage);                                                                            // Queries the remaining space in a storage container.
  SDL_GetStorageSpaceRemaining: {
    args: [FFIType.ptr],
    returns: FFIType.u64,
  },
  // char ** SDL_GlobStorageDirectory(SDL_Storage *storage, const char *path, const char *pattern, SDL_GlobFlags flags, int *count);       // Enumerate a directory tree, filtered by pattern, and return a list.
  SDL_GlobStorageDirectory: {
    args: [
      FFIType.ptr,
      FFIType.cstring,
      FFIType.cstring,
      FFIType.u32,
      FFIType.ptr,
    ],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
