import type { LogPriority } from '@/sdl/ffi/log/constant';
import type { Int32 } from '@/types/primitive';

export interface LogOutputFunctionFn {
  (options: { category: Int32; priority: LogPriority; message: string }): void;
}
