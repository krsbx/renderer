import { CString, FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { EnumerateDirectoryCallbackFn } from '../types/callback';

export function createEnumerateCallback(
  callback: EnumerateDirectoryCallbackFn
) {
  const cb = new JSCallback(
    (_: Pointer, dirnamePtr: Pointer, fnamePtr: Pointer) => {
      const dirname = new CString(dirnamePtr).toString();
      const fname = new CString(fnamePtr).toString();

      return callback(dirname, fname);
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
      returns: FFIType.i32,
    }
  );

  return cb;
}
