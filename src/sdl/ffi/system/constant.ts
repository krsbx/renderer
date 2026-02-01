import type { Brand } from '@/types/shared';

export const RawSandbox = {
  NONE: 0,
  UNKNOWN_CONTAINER: 1,
  FLATPAK: 2,
  SNAP: 3,
  MACOS: 4,
} as const;

export const SandBox = RawSandbox as Readonly<
  Record<keyof typeof RawSandbox, Brand<number, 'SandBox'>>
>;

export type SandBox = (typeof SandBox)[keyof typeof SandBox];
