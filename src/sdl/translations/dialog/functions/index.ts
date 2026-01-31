import type { SDL } from '@/sdl';
import type { Window } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';
import type { FileDialogType } from '@sdl/ffi/constant/dialog';
import { stringToCString } from '@utility/common';
import { DialogFileFilter } from '../struct';
import type { DialogFileCallbackFn } from '../types/callback';
import { createDialogCallback } from '../utility/callback';

function constructFilters(
  filter: DialogFileFilter | DialogFileFilter[] | null | undefined
) {
  const filters = filter ? (Array.isArray(filter) ? filter : [filter]) : [];

  const { buffer, address } = CStruct.writeArray(
    filters,
    DialogFileFilter.BYTE_SIZE
  );

  return {
    filtersBuffer: buffer,
    filtersAddress: address,
    filterCount: filters.length,
    filters,
  };
}

export function showOpenFileDialog(
  this: SDL,
  options: {
    callback: DialogFileCallbackFn;
    window: Window | null;
    filters?: DialogFileFilter | DialogFileFilter[] | null;
    defaultLocation?: string | null;
    allowMany?: boolean | null;
  }
) {
  const { filterCount, filtersAddress, filters } = constructFilters(
    options.filters
  );
  const cb = createDialogCallback(options.callback, filters);

  this.symbols.SDL_ShowOpenFileDialog(
    cb.ptr,
    null,
    options.window,
    filterCount > 0 ? filtersAddress : null,
    filterCount,
    options.defaultLocation
      ? stringToCString(options.defaultLocation).ptr
      : null,
    options.allowMany ?? false
  );
}

export function showSaveFileDialog(
  this: SDL,
  options: {
    callback: DialogFileCallbackFn;
    window: Window;
    filters?: DialogFileFilter | DialogFileFilter[] | null;
    defaultLocation?: string | null;
  }
) {
  const { filterCount, filtersAddress, filters } = constructFilters(
    options.filters
  );
  const cb = createDialogCallback(options.callback, filters);

  this.symbols.SDL_ShowSaveFileDialog(
    cb.ptr,
    null,
    options.window,
    filterCount > 0 ? filtersAddress : null,
    filterCount,
    options.defaultLocation
      ? stringToCString(options.defaultLocation).ptr
      : null
  );
}

export function showOpenFolderDialog(
  this: SDL,
  options: {
    callback: DialogFileCallbackFn;
    window: Window;
    defaultLocation?: string | null;
    allowMany?: boolean | null;
  }
) {
  const cb = createDialogCallback(options.callback, []);

  this.symbols.SDL_ShowOpenFolderDialog(
    cb.ptr,
    null,
    options.window,
    options.defaultLocation
      ? stringToCString(options.defaultLocation).ptr
      : null,
    options.allowMany ?? false
  );
}

export function showFileDialogWithProperties(
  this: SDL,
  options: {
    type: FileDialogType;
    callback: DialogFileCallbackFn;
    props: number;
  }
) {
  const cb = createDialogCallback(options.callback, []);

  this.symbols.SDL_ShowFileDialogWithProperties(
    options.type,
    cb.ptr,
    null,
    options.props
  );
}
