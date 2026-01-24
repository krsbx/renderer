import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';

export function getGDKTaskQueue(this: SDL) {
  const taskQueueStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });

  const success = this.symbols.SDL_GetGDKTaskQueue(taskQueueStruct.$address);

  if (!success) return null;

  return taskQueueStruct.getValue(0, 'ptr');
}

export function getGDKDefaultUser(this: SDL) {
  const userHandleStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });

  const success = this.symbols.SDL_GetGDKDefaultUser(userHandleStruct.$address);

  if (!success) return null;

  return userHandleStruct.getValue(0, 'ptr');
}
