import type { Brand } from '@/types/shared';

export const RawSandbox = {
  SDL_SANDBOX_NONE: 0,
  SDL_SANDBOX_UNKNOWN_CONTAINER: 1,
  SDL_SANDBOX_FLATPAK: 2,
  SDL_SANDBOX_SNAP: 3,
  SDL_SANDBOX_MACOS: 4,
} as const;

export const SandBox = RawSandbox as Readonly<
  Record<keyof typeof RawSandbox, Brand<number, 'SandBox'>>
>;

export type SandBox = (typeof SandBox)[keyof typeof SandBox];
