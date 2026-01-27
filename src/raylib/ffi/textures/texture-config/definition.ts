import { FFIType, type FFIFunction } from 'bun:ffi';

export const TextureConfigDefinition = {
  // void GenTextureMipmaps(Texture2D *texture);
  GenTextureMipmaps: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetTextureFilter(Texture2D texture, int filter);
  SetTextureFilter: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetTextureWrap(Texture2D texture, int wrap);
  SetTextureWrap: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
