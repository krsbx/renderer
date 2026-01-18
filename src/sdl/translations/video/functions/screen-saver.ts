import type { SDL } from '../../..';

export function screenSaverEnabled(this: SDL) {
  return this.symbols.SDL_ScreenSaverEnabled();
}

export function enableScreenSaver(this: SDL) {
  return this.symbols.SDL_EnableScreenSaver();
}
export function disableScreenSaver(this: SDL) {
  return this.symbols.SDL_DisableScreenSaver();
}
