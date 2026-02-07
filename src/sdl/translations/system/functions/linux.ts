import type { SDL } from '@/sdl';
import type { Int32 } from '@/types/primitive';

export function setLinuxThreadPriority(
  this: SDL,
  options: {
    threadId: bigint;
    priority: Int32;
  }
) {
  return this.symbols.SDL_SetLinuxThreadPriority(
    options.threadId,
    options.priority
  );
}

export function setLinuxThreadPriorityAndPolicy(
  this: SDL,
  options: {
    threadId: bigint;
    sdlPriority: Int32;
    schedPolicy: Int32;
  }
) {
  return this.symbols.SDL_SetLinuxThreadPriorityAndPolicy(
    options.threadId,
    options.sdlPriority,
    options.schedPolicy
  );
}
