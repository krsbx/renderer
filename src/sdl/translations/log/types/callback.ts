import type { LogPriority } from '@/sdl/ffi/log/constant';

export interface LogOutputFunctionFn {
  (options: { category: number; priority: LogPriority; message: string }): void;
}
