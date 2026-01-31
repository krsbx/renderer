import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { type JSCallback, type Pointer } from 'bun:ffi';
import type { TrayEntryFlags } from '../../../ffi/tray/constant';
import { Surface } from '../../surface/struct';

export function createTray(
  this: SDL,
  options: {
    icon: Surface | null;
    tooltip: string;
  }
) {
  return this.symbols.SDL_CreateTray(
    options.icon?.$address ?? null,
    stringToCString(options.tooltip).ptr
  );
}

export function setTrayIcon(
  this: SDL,
  options: {
    tray: Pointer;
    icon: Surface | null;
  }
) {
  this.symbols.SDL_SetTrayIcon(options.tray, options.icon?.$address ?? null);
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

  const entries = CStruct.readArrayPrimitive(listPtr, count, 'ptr');

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
  return this.symbols.SDL_GetTrayEntryLabel(entry).toString();
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
