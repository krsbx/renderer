import type { BaseSDL } from '../../..';

export function screenSaverEnabled(this: BaseSDL) {
  return this.symbols.SDL_ScreenSaverEnabled();
}

export function enableScreenSaver(this: BaseSDL) {
  return this.symbols.SDL_EnableScreenSaver();
}
export function disableScreenSaver(this: BaseSDL) {
  return this.symbols.SDL_DisableScreenSaver();
}
