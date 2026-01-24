import type { SDL } from '@/sdl';
import type { JSCallback, Pointer } from 'bun:ffi';

export function setX11EventHook(
  this: SDL,
  options: {
    callback: JSCallback | null;
    userdata?: Pointer | null;
  }
) {
  this.symbols.SDL_SetX11EventHook(
    options.callback?.ptr ?? null,
    options.userdata ?? null
  );
}
