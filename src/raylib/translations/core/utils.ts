import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { type Pointer } from 'bun:ffi';

export function traceLog(
  this: RayLib,
  options: {
    logLevel: number;
    text: string;
  }
) {
  this.symbols.TraceLog(options.logLevel, stringToCString(options.text).ptr);
}

export function setTraceLogLevel(this: RayLib, logLevel: number) {
  this.symbols.SetTraceLogLevel(logLevel);
}

export function memAlloc(this: RayLib, size: number) {
  return this.symbols.MemAlloc(size);
}

export function memRealloc(
  this: RayLib,
  options: {
    ptr: Pointer;
    size: number;
  }
) {
  return this.symbols.MemRealloc(options.ptr, options.size);
}

export function memFree(this: RayLib, ptr: Pointer) {
  this.symbols.MemFree(ptr);
}
