import { type CString, type JSCallback, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { FileDialogType } from '../../../ffi/dialog/constant';
import { CStruct } from '../../../utility/cstruct';
import { DialogFileFilter } from '../utility';

function constructFilters(
  filter: DialogFileFilter | DialogFileFilter[] | null | undefined
) {
  const filters = filter ? (Array.isArray(filter) ? filter : [filter]) : [];
  const filterCount = filters.length;
  const filtersBuffer = new CStruct({
    length: DialogFileFilter.BYTE_SIZE * filterCount,
  });

  filters.forEach((filter, i) => {
    if (!filtersBuffer.$memory) return;

    const offset = i * DialogFileFilter.BYTE_SIZE;

    filtersBuffer.$memory.set(filter.$memory, offset);
  });

  return {
    filtersBuffer,
    filterCount,
  };
}

export function showOpenFileDialog(
  this: SDL,
  options: {
    callback: JSCallback;
    userdata?: Pointer | null;
    window: Pointer;
    filters?: DialogFileFilter | DialogFileFilter[] | null;
    defaultLocation?: CString | null;
    allowMany?: boolean | null;
  }
) {
  const { filterCount, filtersBuffer } = constructFilters(options.filters);

  this.symbols.SDL_ShowOpenFileDialog(
    options.callback.ptr,
    options.userdata ?? null,
    options.window,
    filterCount > 0 ? filtersBuffer.$address : null,
    filterCount,
    options.defaultLocation?.ptr ?? null,
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
    defaultLocation?: CString | null;
  }
) {
  const { filterCount, filtersBuffer } = constructFilters(options.filters);

  this.symbols.SDL_ShowSaveFileDialog(
    options.callback.ptr,
    options.userdata ?? null,
    options.window,
    filterCount > 0 ? filtersBuffer.$address : null,
    filterCount,
    options.defaultLocation?.ptr ?? null
  );
}

export function showOpenFolderDialog(
  this: SDL,
  options: {
    callback: JSCallback;
    userdata?: Pointer | null;
    window: Pointer;
    defaultLocation?: CString | null;
    allowMany?: boolean | null;
  }
) {
  this.symbols.SDL_ShowOpenFolderDialog(
    options.callback.ptr,
    options.userdata ?? null,
    options.window,
    options.defaultLocation?.ptr ?? null,
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
