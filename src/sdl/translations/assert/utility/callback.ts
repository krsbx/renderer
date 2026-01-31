import { FFIType, JSCallback, type Pointer } from 'bun:ffi';
import { AssertData } from '../struct';
import type { AssertionHandlerFn } from '../types/callback';

export const AssertionHandlerRegisterKey = 'assert:handler';

export function createAssertionHandler(handler: AssertionHandlerFn) {
  const cb = new JSCallback(
    (dataPtr: Pointer) => {
      const data = new AssertData(dataPtr);

      return handler(data);
    },
    {
      args: [FFIType.ptr, FFIType.ptr],
      returns: FFIType.i32,
    }
  );

  return cb;
}
