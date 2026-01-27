import { FFIType, type FFIFunction } from 'bun:ffi';

export const TextureDrawingDefinition = {
  // void DrawTexture(Texture2D texture, int posX, int posY, Color tint);
  DrawTexture: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTextureV(Texture2D texture, Vector2 position, Color tint);
  DrawTextureV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTextureEx(Texture2D texture, Vector2 position, float rotation, float scale, Color tint);
  DrawTextureEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTextureRec(Texture2D texture, Rectangle source, Vector2 position, Color tint);
  DrawTextureRec: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTexturePro(Texture2D texture, Rectangle source, Rectangle dest, Vector2 origin, float rotation, Color tint);
  DrawTexturePro: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawTextureNPatch(Texture2D texture, NPatchInfo nPatchInfo, Rectangle dest, Vector2 origin, float rotation, Color tint);
  DrawTextureNPatch: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
