import { FFIType, type FFIFunction } from 'bun:ffi';

export const ShaderDefinition = {
  // Shader LoadShader(const char *vsFileName, const char *fsFileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // Note: Shader struct is 16 bytes (id + locs pointer)
  // LoadShader: {
  //   args: [FFIType.cstring, FFIType.cstring],
  //   returns: FFIType.ptr,
  // },
  // Shader LoadShaderFromMemory(const char *vsCode, const char *fsCode);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadShaderFromMemory: {
  //   args: [FFIType.cstring, FFIType.cstring],
  //   returns: FFIType.ptr,
  // },
  // bool IsShaderValid(Shader shader);
  IsShaderValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // int GetShaderLocation(Shader shader, const char *uniformName);
  GetShaderLocation: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.i32,
  },
  // int GetShaderLocationAttrib(Shader shader, const char *attribName);
  GetShaderLocationAttrib: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.i32,
  },
  // void SetShaderValue(Shader shader, int locIndex, const void *value, int uniformType);
  SetShaderValue: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetShaderValueV(Shader shader, int locIndex, const void *value, int uniformType, int count);
  SetShaderValueV: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetShaderValueMatrix(Shader shader, int locIndex, Matrix mat);
  // Note: Matrix is 64 bytes (16 floats)
  SetShaderValueMatrix: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetShaderValueTexture(Shader shader, int locIndex, Texture2D texture);
  // Note: Texture2D is 20 bytes
  SetShaderValueTexture: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void UnloadShader(Shader shader);
  UnloadShader: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
