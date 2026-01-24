import type { SDL } from '@/sdl';
import { getStructAddress, stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import { AsyncIOOutcome } from '../utility';

export function asyncIOFromFile(
  this: SDL,
  options: { file: string; mode: string }
) {
  return this.symbols.SDL_AsyncIOFromFile(
    stringToCString(options.file).ptr,
    stringToCString(options.mode).ptr
  );
}

export function getAsyncIOSize(this: SDL, asyncio: Pointer) {
  return this.symbols.SDL_GetAsyncIOSize(asyncio);
}

export function readAsyncIO(
  this: SDL,
  options: {
    asyncio: Pointer;
    ptr: Pointer;
    offset: number | bigint;
    size: number | bigint;
    queue?: Pointer | null;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_ReadAsyncIO(
    options.asyncio,
    options.ptr,
    BigInt(options.offset),
    BigInt(options.size),
    options.queue ?? null,
    options.userdata ?? null
  );
}

export function writeAsyncIO(
  this: SDL,
  options: {
    asyncio: Pointer;
    ptr: Pointer;
    offset: number | bigint;
    size: number | bigint;
    queue?: Pointer | null;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_WriteAsyncIO(
    options.asyncio,
    options.ptr,
    BigInt(options.offset),
    BigInt(options.size),
    options.queue ?? null,
    options.userdata ?? null
  );
}

export function closeAsyncIO(
  this: SDL,
  options: {
    asyncio: Pointer;
    flush: boolean;
    queue?: Pointer | null;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_CloseAsyncIO(
    options.asyncio,
    options.flush,
    options.queue ?? null,
    options.userdata ?? null
  );
}

export function createAsyncIOQueue(this: SDL) {
  return this.symbols.SDL_CreateAsyncIOQueue();
}

export function destroyAsyncIOQueue(this: SDL, queue: Pointer) {
  return this.symbols.SDL_DestroyAsyncIOQueue(queue);
}

export function getAsyncIOResult(
  this: SDL,
  options: {
    queue: Pointer;
    outcome?: AsyncIOOutcome | Pointer | null;
  }
) {
  let outcomeAddr: Pointer;
  let outcomeInstance: AsyncIOOutcome | null = null;

  if (options.outcome instanceof AsyncIOOutcome) {
    outcomeAddr = options.outcome.$address;
    outcomeInstance = options.outcome;
  } else if (options.outcome) {
    outcomeAddr = options.outcome;
  } else {
    outcomeInstance = new AsyncIOOutcome(AsyncIOOutcome.allocMemory());
    outcomeAddr = outcomeInstance.$address;
  }

  const success = this.symbols.SDL_GetAsyncIOResult(options.queue, outcomeAddr);

  if (!success) return null;

  return outcomeInstance ?? new AsyncIOOutcome(outcomeAddr);
}

export function waitAsyncIOResult(
  this: SDL,
  options: {
    queue: Pointer;
    outcome: AsyncIOOutcome | Pointer;
    timeoutMS: number;
  }
) {
  return this.symbols.SDL_WaitAsyncIOResult(
    options.queue,
    getStructAddress(options.outcome),
    options.timeoutMS
  );
}

export function signalAsyncIOQueue(this: SDL, queue: Pointer) {
  this.symbols.SDL_SignalAsyncIOQueue(queue);
}

export function loadFileAsync(
  this: SDL,
  options: {
    file: string;
    queue: Pointer;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_LoadFileAsync(
    stringToCString(options.file).ptr,
    options.queue,
    options.userdata ?? null
  );
}
