import { FFIType, type FFIFunction } from 'bun:ffi';

export const CallbackDefinition = {
  // void SetTraceLogCallback(TraceLogCallback callback);
  SetTraceLogCallback: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetLoadFileDataCallback(LoadFileDataCallback callback);
  SetLoadFileDataCallback: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetSaveFileDataCallback(SaveFileDataCallback callback);
  SetSaveFileDataCallback: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetLoadFileTextCallback(LoadFileTextCallback callback);
  SetLoadFileTextCallback: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetSaveFileTextCallback(SaveFileTextCallback callback);
  SetSaveFileTextCallback: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
