import { FFIType, type FFIFunction } from 'bun:ffi';

export const FileSystemDefinition = {
  // bool FileExists(const char *fileName);
  FileExists: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool DirectoryExists(const char *dirPath);
  DirectoryExists: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool IsFileExtension(const char *fileName, const char *ext);
  IsFileExtension: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // int GetFileLength(const char *fileName);
  GetFileLength: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // const char *GetFileExtension(const char *fileName);
  GetFileExtension: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *GetFileName(const char *filePath);
  GetFileName: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *GetFileNameWithoutExt(const char *filePath);
  GetFileNameWithoutExt: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *GetDirectoryPath(const char *filePath);
  GetDirectoryPath: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *GetPrevDirectoryPath(const char *dirPath);
  GetPrevDirectoryPath: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *GetWorkingDirectory(void);
  GetWorkingDirectory: {
    args: [],
    returns: FFIType.cstring,
  },
  // const char *GetApplicationDirectory(void);
  GetApplicationDirectory: {
    args: [],
    returns: FFIType.cstring,
  },
  // int MakeDirectory(const char *dirPath);
  MakeDirectory: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // bool ChangeDirectory(const char *dir);
  ChangeDirectory: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool IsPathFile(const char *path);
  IsPathFile: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool IsFileNameValid(const char *fileName);
  IsFileNameValid: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // FilePathList LoadDirectoryFiles(const char *dirPath);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // Note: FilePathList is a struct with count, paths
  // LoadDirectoryFiles: {
  //   args: [FFIType.cstring],
  //   returns: FFIType.ptr,
  // },
  // FilePathList LoadDirectoryFilesEx(const char *basePath, const char *filter, bool scanSubdirs);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadDirectoryFilesEx: {
  //   args: [FFIType.cstring, FFIType.cstring, FFIType.bool],
  //   returns: FFIType.ptr,
  // },
  // void UnloadDirectoryFiles(FilePathList files);
  UnloadDirectoryFiles: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool IsFileDropped(void);
  IsFileDropped: {
    args: [],
    returns: FFIType.bool,
  },
  // FilePathList LoadDroppedFiles(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadDroppedFiles: {
  //   args: [],
  //   returns: FFIType.ptr,
  // },
  // void UnloadDroppedFiles(FilePathList files);
  UnloadDroppedFiles: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // long GetFileModTime(const char *fileName);
  GetFileModTime: {
    args: [FFIType.cstring],
    returns: FFIType.i64,
  },
} satisfies Record<string, FFIFunction>;
