import type { EnumerationResult } from '@/sdl/ffi/file-system/constant';

export interface EnumerateDirectoryCallbackFn {
  (dirname: string, fname: string): EnumerationResult;
}
