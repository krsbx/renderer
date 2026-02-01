import type { SDL } from '@/sdl';
import type { GPUDevice } from '@/sdl/types/definition';

// GDK (Xbox)

export function gdkSuspendGPU(this: SDL, device: GPUDevice) {
  this.symbols.SDL_GDKSuspendGPU(device);
}

export function gdkResumeGPU(this: SDL, device: GPUDevice) {
  this.symbols.SDL_GDKResumeGPU(device);
}
