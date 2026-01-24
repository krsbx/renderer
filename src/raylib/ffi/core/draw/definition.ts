import { FFIType, type FFIFunction } from 'bun:ffi';

export const DrawDefinition = {
  // void ClearBackground(Color color);
  // Note: Color is 4 bytes (RGBA), passed as u32
  ClearBackground: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  // void BeginDrawing(void);
  BeginDrawing: {
    args: [],
    returns: FFIType.void,
  },
  // void EndDrawing(void);
  EndDrawing: {
    args: [],
    returns: FFIType.void,
  },
  // void BeginMode2D(Camera2D camera);
  // Note: Camera2D is 24 bytes struct, passed by value
  BeginMode2D: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void EndMode2D(void);
  EndMode2D: {
    args: [],
    returns: FFIType.void,
  },
  // void BeginMode3D(Camera3D camera);
  // Note: Camera3D is 44 bytes struct, passed by value
  BeginMode3D: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void EndMode3D(void);
  EndMode3D: {
    args: [],
    returns: FFIType.void,
  },
  // void BeginTextureMode(RenderTexture2D target);
  // Note: RenderTexture2D is 28 bytes struct
  BeginTextureMode: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void EndTextureMode(void);
  EndTextureMode: {
    args: [],
    returns: FFIType.void,
  },
  // void BeginShaderMode(Shader shader);
  // Note: Shader is 16 bytes (id + locs pointer)
  BeginShaderMode: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void EndShaderMode(void);
  EndShaderMode: {
    args: [],
    returns: FFIType.void,
  },
  // void BeginBlendMode(int mode);
  BeginBlendMode: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  // void EndBlendMode(void);
  EndBlendMode: {
    args: [],
    returns: FFIType.void,
  },
  // void BeginScissorMode(int x, int y, int width, int height);
  BeginScissorMode: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void EndScissorMode(void);
  EndScissorMode: {
    args: [],
    returns: FFIType.void,
  },
  // void BeginVrStereoMode(VrStereoConfig config);
  // Note: VrStereoConfig is a large struct
  BeginVrStereoMode: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void EndVrStereoMode(void);
  EndVrStereoMode: {
    args: [],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
