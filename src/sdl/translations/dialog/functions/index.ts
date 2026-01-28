import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { type JSCallback, type Pointer } from 'bun:ffi';
import type { FileDialogType } from '../../../ffi/dialog/constant';
import { DialogFileFilter } from '../utility';

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
  };
}

export function showOpenFileDialog(
  this: SDL,
  options: {
    callback: JSCallback;
    userdata?: Pointer | null;
    window: Pointer;
    filters?: DialogFileFilter | DialogFileFilter[] | null;
    defaultLocation?: string | null;
    allowMany?: boolean | null;
  }
) {
  const { filterCount, filtersAddress } = constructFilters(options.filters);

  this.symbols.SDL_ShowOpenFileDialog(
    options.callback.ptr,
    options.userdata ?? null,
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
    callback: JSCallback;
    userdata?: Pointer | null;
    window: Pointer;
    filters?: DialogFileFilter | DialogFileFilter[] | null;
    defaultLocation?: string | null;
  }
) {
  const { filterCount, filtersAddress } = constructFilters(options.filters);

  this.symbols.SDL_ShowSaveFileDialog(
    options.callback.ptr,
    options.userdata ?? null,
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
    callback: JSCallback;
    userdata?: Pointer | null;
    window: Pointer;
    defaultLocation?: string | null;
    allowMany?: boolean | null;
  }
) {
  this.symbols.SDL_ShowOpenFolderDialog(
    options.callback.ptr,
    options.userdata ?? null,
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
    callback: JSCallback;
    userdata?: Pointer | null;
    props: number;
  }
) {
  this.symbols.SDL_ShowFileDialogWithProperties(
    options.type,
    options.callback.ptr,
    options.userdata ?? null,
    options.props
  );
}
