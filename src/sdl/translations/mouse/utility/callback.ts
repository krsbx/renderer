import type { Window } from '@/sdl/types/definition';
import type { Float, UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import { FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { MouseMotionTransformCallbackFn } from '../types/callback';

export const MouseMotionTransformCallbackRegistryKey =
  'mouse:motion-transform' as const;

export function createMouseMotionTransformCallback(
  callback: MouseMotionTransformCallbackFn
) {
  const cb = new JSCallback(
    (
      _: Pointer,
      timestamp: bigint,
      window: Pointer,
      mouseId: number,
      xPtr: Pointer,
      yPtr: Pointer
    ) => {
      const xStruct = new CStruct({
        address: xPtr,
        length: CStruct.BYTE_SIZE.f32,
      });
      const yStruct = new CStruct({
        address: yPtr,
        length: CStruct.BYTE_SIZE.f32,
      });

      const x = xStruct.getValue(0, 'f32') as Float;
      const y = yStruct.getValue(0, 'f32') as Float;

      const result = callback({
        timestamp,
        window: window as Window,
        mouseId: mouseId as UInt32,
        x,
        y,
      });

      xStruct.setValue(0, result.x, 'f32');
      yStruct.setValue(0, result.y, 'f32');
    },
    {
      args: [
        FFIType.ptr,
        FFIType.u64,
        FFIType.ptr,
        FFIType.u32,
        FFIType.ptr,
        FFIType.ptr,
      ],
      returns: FFIType.void,
    }
  );

  return cb;
}
