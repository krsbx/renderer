import type { MouseID, Window } from '@/sdl/types/definition';
import type { Float } from '@/types/primitive';

export interface MouseMotionTransformCallbackFn {
  (options: {
    timestamp: bigint;
    window: Window;
    mouseId: MouseID;
    x: Float;
    y: Float;
  }): {
    x: Float;
    y: Float;
  };
}
