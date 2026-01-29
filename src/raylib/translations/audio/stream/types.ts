export interface AudioCallbackFn {
  (bufferData: Uint8Array): void;
}
