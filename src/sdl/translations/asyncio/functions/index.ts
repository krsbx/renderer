import type { SDL } from '@/sdl';
import type { AsyncIO, AsyncIOQueue } from '@/sdl/types/definition';
import { stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import { AsyncIOOutcome } from '../struct';

export function asyncIOFromFile(
  this: SDL,
  options: { file: string; mode: string }
) {
  return this.symbols.SDL_AsyncIOFromFile(
    stringToCString(options.file).ptr,
    stringToCString(options.mode).ptr
  );
}

export function getAsyncIOSize(this: SDL, asyncio: AsyncIO) {
  return this.symbols.SDL_GetAsyncIOSize(asyncio);
}

export function readAsyncIO(
  this: SDL,
  options: {
    asyncio: AsyncIO;
    ptr: Uint8Array;
    offset: number | bigint;
    size: number | bigint;
    queue?: AsyncIOQueue | null;
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
    asyncio: AsyncIO;
    ptr: Uint8Array;
    offset: number | bigint;
    size: number | bigint;
    queue?: AsyncIOQueue | null;
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
    asyncio: AsyncIO;
    flush: boolean;
    queue?: AsyncIOQueue | null;
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
  return this.symbols.SDL_CreateAsyncIOQueue() as AsyncIOQueue;
}

export function destroyAsyncIOQueue(this: SDL, queue: AsyncIOQueue) {
  return this.symbols.SDL_DestroyAsyncIOQueue(queue);
}

export function getAsyncIOResult(
  this: SDL,
  options: {
    queue: AsyncIOQueue;
    outcome?: AsyncIOOutcome | null;
  }
) {
  const outcome = options.outcome ?? AsyncIOOutcome.create();

  const success = this.symbols.SDL_GetAsyncIOResult(
    options.queue,
    outcome.$address
  );

  if (!success) return null;

  return outcome;
}

export function waitAsyncIOResult(
  this: SDL,
  options: {
    queue: AsyncIOQueue;
    outcome?: AsyncIOOutcome | null;
    timeoutMS: number;
  }
) {
  const outcome = options.outcome ?? AsyncIOOutcome.create();

  return this.symbols.SDL_WaitAsyncIOResult(
    options.queue,
    outcome.$address,
    options.timeoutMS
  );
}

export function signalAsyncIOQueue(this: SDL, queue: AsyncIOQueue) {
  this.symbols.SDL_SignalAsyncIOQueue(queue);
}

export function loadFileAsync(
  this: SDL,
  options: {
    file: string;
    queue: AsyncIOQueue;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_LoadFileAsync(
    stringToCString(options.file).ptr,
    options.queue,
    options.userdata ?? null
  );
}
