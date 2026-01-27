import { FFIType, type FFIFunction } from 'bun:ffi';

export const TextureLoadingDefinition = {
  // Texture2D LoadTexture(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Texture2D LoadTextureFromImage(Image image);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // TextureCubemap LoadTextureCubemap(Image image, int layout);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // RenderTexture2D LoadRenderTexture(int width, int height);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // bool IsTextureValid(Texture2D texture);
  IsTextureValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadTexture(Texture2D texture);
  UnloadTexture: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool IsRenderTextureValid(RenderTexture2D target);
  IsRenderTextureValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadRenderTexture(RenderTexture2D target);
  UnloadRenderTexture: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void UpdateTexture(Texture2D texture, const void *pixels);
  UpdateTexture: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void UpdateTextureRec(Texture2D texture, Rectangle rec, const void *pixels);
  UpdateTextureRec: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
