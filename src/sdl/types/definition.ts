import type { Brand } from '@/types/shared';
import type { Pointer } from 'bun:ffi';

type SDLOpaque<
  K extends string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T = K extends `SDL_${infer _}` ? K : `SDL_${K}`,
> = Pointer | Brand<Pointer, T>;

// Async IO
export type AsyncIO = SDLOpaque<'AsyncIO'>;
export type AsyncIOQueue = SDLOpaque<'AsyncIOQueue'>;

// Audio
export type AudioStream = SDLOpaque<'AudioStream'>;

// Camera
export type Camera = SDLOpaque<'Camera'>;

// IO Stream
export type IOStream = SDLOpaque<'IOStream'>;

// Window
export type Window = SDLOpaque<'Window'>;
