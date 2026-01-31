import { FFIType, type FFIFunction } from 'bun:ffi';

export const StorageInterfaceDefinition = {
  close: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  ready: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  enumerate: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  info: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
    returns: FFIType.bool,
  },
  read_file: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr, FFIType.u64],
    returns: FFIType.bool,
  },
  write_file: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr, FFIType.u64],
    returns: FFIType.bool,
  },
  mkdir: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  remove: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  rename: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  copy: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  space_remaining: {
    args: [FFIType.ptr],
    returns: FFIType.u64,
  },
} satisfies Record<string, FFIFunction>;

export type StorageInterfaceDefinition = typeof StorageInterfaceDefinition;
