import { FFIType, type FFIFunction } from 'bun:ffi';

export const IOStreamInterfaceDefinition = {
  size: {
    args: [FFIType.ptr],
    returns: FFIType.i16,
  },
  seek: {
    args: [FFIType.ptr, FFIType.i64, FFIType.i32],
    returns: FFIType.i16,
  },
  read: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64, FFIType.ptr],
    returns: FFIType.u64,
  },
  write: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64, FFIType.ptr],
    returns: FFIType.u64,
  },
  flush: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  close: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;

export type IOStreamInterfaceDefinition = typeof IOStreamInterfaceDefinition;
