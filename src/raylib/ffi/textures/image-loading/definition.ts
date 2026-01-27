import { FFIType, type FFIFunction } from 'bun:ffi';

export const ImageLoadingDefinition = {
  // Image LoadImage(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image LoadImageRaw(const char *fileName, int width, int height, int format, int headerSize);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image LoadImageAnim(const char *fileName, int *frames);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image LoadImageAnimFromMemory(const char *fileType, const unsigned char *fileData, int dataSize, int *frames);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image LoadImageFromMemory(const char *fileType, const unsigned char *fileData, int dataSize);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image LoadImageFromTexture(Texture2D texture);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Image LoadImageFromScreen(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // bool IsImageValid(Image image);
  IsImageValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadImage(Image image);
  UnloadImage: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool ExportImage(Image image, const char *fileName);
  ExportImage: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // unsigned char *ExportImageToMemory(Image image, const char *fileType, int *fileSize);
  ExportImageToMemory: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool ExportImageAsCode(Image image, const char *fileName);
  ExportImageAsCode: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
