import type { PropertiesID } from '@/sdl/types/definition';

export interface CleanupPropertyCallbackFn {
  (value: Uint8Array | null): void;
}

export interface EnumeratePropertiesCallbackFn {
  (options: { props: PropertiesID; name: string }): void;
}
