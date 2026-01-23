import { type JSCallback, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { TrayEntryFlags } from '../../../ffi/tray/constant';
import { getStructAddress, stringToCString } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';
import { Surface } from '../../surface/utility';

export function createTray(
  this: SDL,
  options: {
    icon: Surface | Pointer | null;
    tooltip: string;
  }
) {
  return this.symbols.SDL_CreateTray(
    options.icon ? getStructAddress(options.icon) : null,
    stringToCString(options.tooltip).ptr
  );
}

export function setTrayIcon(
  this: SDL,
  options: {
    tray: Pointer;
    icon: Surface | Pointer | null;
  }
) {
  this.symbols.SDL_SetTrayIcon(
    options.tray,
    options.icon ? getStructAddress(options.icon) : null
  );
}

export function setTrayTooltip(
  this: SDL,
  options: {
    tray: Pointer;
    tooltip: string;
  }
) {
  this.symbols.SDL_SetTrayTooltip(
    options.tray,
    stringToCString(options.tooltip).ptr
  );
}

export function createTrayMenu(this: SDL, tray: Pointer) {
  return this.symbols.SDL_CreateTrayMenu(tray);
}

export function createTraySubmenu(this: SDL, entry: Pointer) {
  return this.symbols.SDL_CreateTraySubmenu(entry);
}

export function getTrayMenu(this: SDL, tray: Pointer) {
  return this.symbols.SDL_GetTrayMenu(tray);
}

export function getTraySubmenu(this: SDL, entry: Pointer) {
  return this.symbols.SDL_GetTraySubmenu(entry);
}

export function getTrayEntries(this: SDL, menu: Pointer) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetTrayEntries(menu, countStruct.$address);

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const entries: Pointer[] = [];

  for (let i = 0; i < count; i++) {
    const entryPtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (entryPtr) {
      entries.push(entryPtr);
    }
  }

  return entries;
}

export function removeTrayEntry(this: SDL, entry: Pointer) {
  this.symbols.SDL_RemoveTrayEntry(entry);
}

export function insertTrayEntryAt(
  this: SDL,
  options: {
    menu: Pointer;
    pos: number;
    label: string;
    flags: TrayEntryFlags;
  }
) {
  return this.symbols.SDL_InsertTrayEntryAt(
    options.menu,
    options.pos,
    stringToCString(options.label).ptr,
    options.flags
  );
}

export function setTrayEntryLabel(
  this: SDL,
  options: {
    entry: Pointer;
    label: string;
  }
) {
  this.symbols.SDL_SetTrayEntryLabel(
    options.entry,
    stringToCString(options.label).ptr
  );
}

export function getTrayEntryLabel(this: SDL, entry: Pointer) {
  return this.symbols.SDL_GetTrayEntryLabel(entry);
}

export function setTrayEntryChecked(
  this: SDL,
  options: {
    entry: Pointer;
    checked: boolean;
  }
) {
  this.symbols.SDL_SetTrayEntryChecked(options.entry, options.checked);
}

export function getTrayEntryChecked(this: SDL, entry: Pointer) {
  return this.symbols.SDL_GetTrayEntryChecked(entry);
}

export function setTrayEntryEnabled(
  this: SDL,
  options: {
    entry: Pointer;
    enabled: boolean;
  }
) {
  this.symbols.SDL_SetTrayEntryEnabled(options.entry, options.enabled);
}

export function getTrayEntryEnabled(this: SDL, entry: Pointer) {
  return this.symbols.SDL_GetTrayEntryEnabled(entry);
}

export function setTrayEntryCallback(
  this: SDL,
  options: {
    entry: Pointer;
    callback: JSCallback | null;
    userdata?: Pointer | null;
  }
) {
  this.symbols.SDL_SetTrayEntryCallback(
    options.entry,
    options.callback?.ptr ?? null,
    options.userdata ?? null
  );
}

export function clickTrayEntry(this: SDL, entry: Pointer) {
  this.symbols.SDL_ClickTrayEntry(entry);
}

export function destroyTray(this: SDL, tray: Pointer) {
  this.symbols.SDL_DestroyTray(tray);
}

export function getTrayEntryParent(this: SDL, entry: Pointer) {
  return this.symbols.SDL_GetTrayEntryParent(entry);
}

export function getTrayMenuParentEntry(this: SDL, menu: Pointer) {
  return this.symbols.SDL_GetTrayMenuParentEntry(menu);
}

export function getTrayMenuParentTray(this: SDL, menu: Pointer) {
  return this.symbols.SDL_GetTrayMenuParentTray(menu);
}

export function updateTrays(this: SDL) {
  this.symbols.SDL_UpdateTrays();
}
