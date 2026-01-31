import type { Brand } from '@/types/shared';
import type { Pointer } from 'bun:ffi';

type SDLOpaque<K> = Pointer | Brand<Pointer, K>;

// Async IO
export type AsyncIO = SDLOpaque<'AsyncIO'>;
export type AsyncIOQueue = SDLOpaque<'AsyncIOQueue'>;

// Audio
export type AudioStream = SDLOpaque<'AudioStream'>;

// IO Stream
export type IOStream = SDLOpaque<'IOStream'>;
