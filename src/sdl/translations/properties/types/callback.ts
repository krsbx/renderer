import type { UInt32 } from '@/types/primitive';

export interface CleanupPropertyCallbackFn {
  (value: Uint8Array | null): void;
}

export interface EnumeratePropertiesCallbackFn {
  (options: { props: UInt32; name: string }): void;
}
