export interface ClipboardDataCallbackFn {
  (mimeType: string | null): string | null;
}

export interface ClipboardCleanupCallbackFn {
  (): void;
}
