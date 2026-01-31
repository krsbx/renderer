export interface HintCallbackFn {
  (options: { name: string; oldValue: string; newValue: string }): void;
}
