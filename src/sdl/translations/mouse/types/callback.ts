import type { Window } from '@/sdl/types/definition';

export interface MouseMotionTransformCallbackFn {
  (options: {
    timestamp: bigint;
    window: Window;
    mouseId: number;
    x: number;
    y: number;
  }): {
    x: number;
    y: number;
  };
}
