import type { Window } from '@/sdl/types/definition';
import type { Float, UInt32 } from '@/types/primitive';

export interface MouseMotionTransformCallbackFn {
  (options: {
    timestamp: bigint;
    window: Window;
    mouseId: UInt32;
    x: Float;
    y: Float;
  }): {
    x: Float;
    y: Float;
  };
}
