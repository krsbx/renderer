import type { SDL } from '@/sdl';
import type { Tray, TrayEntry, TrayMenu } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import type { TrayEntryFlags } from '../../../ffi/tray/constant';
import { Surface } from '../../surface/struct';
import type { TrayCallbackFn } from '../types/callback';
import {
  createTrayEntryCallback,
  registerTrayEntryCallback,
  unregisterTrayEntryCallback,
} from '../utility/callback';

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
  ) as Tray | null;
}

export function setTrayIcon(
  this: SDL,
  options: {
    tray: Tray;
    icon: Surface | null;
  }
) {
  this.symbols.SDL_SetTrayIcon(options.tray, options.icon?.$address ?? null);
}

export function setTrayTooltip(
  this: SDL,
  options: {
    tray: Tray;
    tooltip: string;
  }
) {
  this.symbols.SDL_SetTrayTooltip(
    options.tray,
    stringToCString(options.tooltip).ptr
  );
}

export function createTrayMenu(this: SDL, tray: Tray) {
  return this.symbols.SDL_CreateTrayMenu(tray) as TrayMenu | null;
}

export function createTraySubmenu(this: SDL, entry: TrayEntry) {
  return this.symbols.SDL_CreateTraySubmenu(entry) as TrayMenu | null;
}

export function getTrayMenu(this: SDL, tray: Tray) {
  return this.symbols.SDL_GetTrayMenu(tray) as TrayMenu | null;
}

export function getTraySubmenu(this: SDL, entry: TrayEntry) {
  return this.symbols.SDL_GetTraySubmenu(entry) as TrayMenu | null;
}

export function getTrayEntries(this: SDL, menu: TrayMenu) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetTrayEntries(menu, countStruct.$address);

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');

  const entries = CStruct.readArrayPrimitive(
    listPtr,
    count,
    'ptr'
  ) as TrayEntry[];

  return entries;
}

export function removeTrayEntry(this: SDL, entry: TrayEntry) {
  // Clean up callback before removing entry
  unregisterTrayEntryCallback(entry);
  this.symbols.SDL_RemoveTrayEntry(entry);
}

export function insertTrayEntryAt(
  this: SDL,
  options: {
    menu: TrayMenu;
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
  ) as TrayEntry | null;
}

export function setTrayEntryLabel(
  this: SDL,
  options: {
    entry: TrayEntry;
    label: string;
  }
) {
  this.symbols.SDL_SetTrayEntryLabel(
    options.entry,
    stringToCString(options.label).ptr
  );
}

export function getTrayEntryLabel(this: SDL, entry: TrayEntry) {
  return this.symbols.SDL_GetTrayEntryLabel(entry).toString();
}

export function setTrayEntryChecked(
  this: SDL,
  options: {
    entry: TrayEntry;
    checked: boolean;
  }
) {
  this.symbols.SDL_SetTrayEntryChecked(options.entry, options.checked);
}

export function getTrayEntryChecked(this: SDL, entry: TrayEntry) {
  return this.symbols.SDL_GetTrayEntryChecked(entry);
}

export function setTrayEntryEnabled(
  this: SDL,
  options: {
    entry: TrayEntry;
    enabled: boolean;
  }
) {
  this.symbols.SDL_SetTrayEntryEnabled(options.entry, options.enabled);
}

export function getTrayEntryEnabled(this: SDL, entry: TrayEntry) {
  return this.symbols.SDL_GetTrayEntryEnabled(entry);
}

export function setTrayEntryCallback(
  this: SDL,
  options: {
    entry: TrayEntry;
    callback: TrayCallbackFn | null;
    userdata?: Pointer | null;
  }
) {
  // Unregister any existing callback for this entry
  unregisterTrayEntryCallback(options.entry);

  if (!options.callback) {
    this.symbols.SDL_SetTrayEntryCallback(
      options.entry,
      null,
      options.userdata ?? null
    );
    return;
  }

  const cb = createTrayEntryCallback(options.callback);
  registerTrayEntryCallback(options.entry, cb);

  this.symbols.SDL_SetTrayEntryCallback(
    options.entry,
    cb.ptr,
    options.userdata ?? null
  );
}

export function clickTrayEntry(this: SDL, entry: TrayEntry) {
  this.symbols.SDL_ClickTrayEntry(entry);
}

export function destroyTray(this: SDL, tray: Tray) {
  this.symbols.SDL_DestroyTray(tray);
}

export function getTrayEntryParent(this: SDL, entry: TrayEntry) {
  return this.symbols.SDL_GetTrayEntryParent(entry) as TrayMenu | null;
}

export function getTrayMenuParentEntry(this: SDL, menu: TrayMenu) {
  return this.symbols.SDL_GetTrayMenuParentEntry(menu) as TrayEntry | null;
}

export function getTrayMenuParentTray(this: SDL, menu: TrayMenu) {
  return this.symbols.SDL_GetTrayMenuParentTray(menu) as Tray | null;
}

export function updateTrays(this: SDL) {
  this.symbols.SDL_UpdateTrays();
}
