import { FFIType, type FFIFunction } from 'bun:ffi';

export const FileManagementDefinition = {
  // unsigned char *LoadFileData(const char *fileName, int *dataSize);
  LoadFileData: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void UnloadFileData(unsigned char *data);
  UnloadFileData: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SaveFileData(const char *fileName, void *data, int dataSize);
  SaveFileData: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool ExportDataAsCode(const unsigned char *data, int dataSize, const char *fileName);
  ExportDataAsCode: {
    args: [FFIType.ptr, FFIType.i32, FFIType.cstring],
    returns: FFIType.bool,
  },
  // char *LoadFileText(const char *fileName);
  LoadFileText: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // void UnloadFileText(char *text);
  UnloadFileText: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SaveFileText(const char *fileName, char *text);
  SaveFileText: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
