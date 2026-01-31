import type { DialogFileFilter } from '../struct';

export interface DialogFileCallbackFn {
  (options: { filelist: string[]; filter: DialogFileFilter | null }): void;
}
