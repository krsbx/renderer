import type { SDL } from '../../..';

export function setLinuxThreadPriority(
  this: SDL,
  options: {
    threadId: bigint;
    priority: number;
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
    sdlPriority: number;
    schedPolicy: number;
  }
) {
  return this.symbols.SDL_SetLinuxThreadPriorityAndPolicy(
    options.threadId,
    options.sdlPriority,
    options.schedPolicy
  );
}
