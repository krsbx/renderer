export interface CleanupPropertyCallbackFn {
  (value: Uint8Array | null): void;
}

export interface EnumeratePropertiesCallbackFn {
  (options: { props: number; name: string }): void;
}
