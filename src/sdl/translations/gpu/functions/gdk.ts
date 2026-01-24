import type { SDL } from '@/sdl';
import type { Pointer } from 'bun:ffi';

// GDK (Xbox)

export function gdkSuspendGPU(this: SDL, device: Pointer) {
  this.symbols.SDL_GDKSuspendGPU(device);
}

export function gdkResumeGPU(this: SDL, device: Pointer) {
  this.symbols.SDL_GDKResumeGPU(device);
}
