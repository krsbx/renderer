import type { EnumerationResult } from '@/sdl/ffi/file-system/constant';

export interface EnumerateStorageDirectoryCallbackFn {
  (dirname: string, fname: string): EnumerationResult;
}
