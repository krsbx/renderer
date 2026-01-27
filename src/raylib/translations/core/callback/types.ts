export interface TraceLogCallbackFn {
  (logLevel: number, text: string): void;
}

export interface LoadFileDataCallbackFn {
  (fileName: string): Uint8Array | null;
}

export interface SaveFileDataCallbackFn {
  (fileName: string, data: Uint8Array): boolean;
}

export interface LoadFileTextCallbackFn {
  (fileName: string): string | null;
}

export interface SaveFileTextCallbackFn {
  (fileName: string, text: string): boolean;
}
