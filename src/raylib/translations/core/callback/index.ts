import type { RayLib } from '@/raylib';
import type {
  LoadFileDataCallbackFn,
  LoadFileTextCallbackFn,
  SaveFileDataCallbackFn,
  SaveFileTextCallbackFn,
  TraceLogCallbackFn,
} from './types';
import { CallbackManager } from './utils';

export function setTraceLogCallback(
  this: RayLib,
  callback: TraceLogCallbackFn | null
) {
  if (!callback) {
    CallbackManager.unregister('TraceLog');
    this.symbols.SetTraceLogCallback(null);
    return;
  }

  const cb = CallbackManager.createTraceLog(callback);
  CallbackManager.register('TraceLog', cb);
  this.symbols.SetTraceLogCallback(cb.ptr);
}

export function setLoadFileDataCallback(
  this: RayLib,
  callback: LoadFileDataCallbackFn | null
) {
  if (!callback) {
    CallbackManager.unregister('LoadFileData');
    this.symbols.SetLoadFileDataCallback(null);
    return;
  }

  const cb = CallbackManager.createLoadFileData(callback);
  CallbackManager.register('LoadFileData', cb);
  this.symbols.SetLoadFileDataCallback(cb.ptr);
}

export function setSaveFileDataCallback(
  this: RayLib,
  callback: SaveFileDataCallbackFn | null
) {
  if (!callback) {
    CallbackManager.unregister('SaveFileData');
    this.symbols.SetSaveFileDataCallback(null);
    return;
  }

  const cb = CallbackManager.createSaveFileData(callback);
  CallbackManager.register('SaveFileData', cb);
  this.symbols.SetSaveFileDataCallback(cb.ptr);
}

export function setLoadFileTextCallback(
  this: RayLib,
  callback: LoadFileTextCallbackFn | null
) {
  if (!callback) {
    CallbackManager.unregister('LoadFileText');
    this.symbols.SetLoadFileTextCallback(null);
    return;
  }

  const cb = CallbackManager.createLoadFileText(callback);
  CallbackManager.register('LoadFileText', cb);
  this.symbols.SetLoadFileTextCallback(cb.ptr);
}

export function setSaveFileTextCallback(
  this: RayLib,
  callback: SaveFileTextCallbackFn | null
) {
  if (!callback) {
    CallbackManager.unregister('SaveFileText');
    this.symbols.SetSaveFileTextCallback(null);
    return;
  }

  const cb = CallbackManager.createSaveFileText(callback);
  CallbackManager.register('SaveFileText', cb);
  this.symbols.SetSaveFileTextCallback(cb.ptr);
}

export function clearAllCallbacks(this: RayLib) {
  CallbackManager.unregister('TraceLog');
  CallbackManager.unregister('LoadFileData');
  CallbackManager.unregister('SaveFileData');
  CallbackManager.unregister('LoadFileText');
  CallbackManager.unregister('SaveFileText');

  this.symbols.SetTraceLogCallback(null);
  this.symbols.SetLoadFileDataCallback(null);
  this.symbols.SetSaveFileDataCallback(null);
  this.symbols.SetLoadFileTextCallback(null);
  this.symbols.SetSaveFileTextCallback(null);
}
