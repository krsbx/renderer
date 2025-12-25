import { type FFIFunction, FFIType } from 'bun:ffi';

export const TrayDefinition = {
  // SDL_Tray * SDL_CreateTray(SDL_Surface *icon, const char *tooltip);                                                // Create an icon to be placed in the operating system's tray, or equivalent.
  SDL_CreateTray: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.ptr,
  },
  // void SDL_SetTrayIcon(SDL_Tray *tray, SDL_Surface *icon);                                                          // Updates the system tray icon's icon.
  SDL_SetTrayIcon: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_SetTrayTooltip(SDL_Tray *tray, const char *tooltip);                                                     // Updates the system tray icon's tooltip.
  SDL_SetTrayTooltip: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.void,
  },
  // SDL_TrayMenu * SDL_CreateTrayMenu(SDL_Tray *tray);                                                                // Create a menu for a system tray.
  SDL_CreateTrayMenu: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_TrayMenu * SDL_CreateTraySubmenu(SDL_TrayEntry *entry);                                                       // Create a submenu for a system tray entry.
  SDL_CreateTraySubmenu: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_TrayMenu * SDL_GetTrayMenu(SDL_Tray *tray);                                                                   // Gets a previously created tray menu.
  SDL_GetTrayMenu: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_TrayMenu * SDL_GetTraySubmenu(SDL_TrayEntry *entry);                                                          // Gets a previously created tray entry submenu.
  SDL_GetTraySubmenu: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const SDL_TrayEntry ** SDL_GetTrayEntries(SDL_TrayMenu *menu, int *count);                                        // Returns a list of entries in the menu, in order.
  SDL_GetTrayEntries: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_RemoveTrayEntry(SDL_TrayEntry *entry);                                                                   // Removes a tray entry.
  SDL_RemoveTrayEntry: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_TrayEntry * SDL_InsertTrayEntryAt(SDL_TrayMenu *menu, int pos, const char *label, SDL_TrayEntryFlags flags);  // Insert a tray entry at a given position.
  SDL_InsertTrayEntryAt: {
    args: [FFIType.ptr, FFIType.i32, FFIType.cstring, FFIType.u32],
    returns: FFIType.ptr,
  },
  // void SDL_SetTrayEntryLabel(SDL_TrayEntry *entry, const char *label);                                              // Sets the label of an entry.
  SDL_SetTrayEntryLabel: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.void,
  },
  // const char * SDL_GetTrayEntryLabel(SDL_TrayEntry *entry);                                                         // Gets the label of an entry.
  SDL_GetTrayEntryLabel: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // void SDL_SetTrayEntryChecked(SDL_TrayEntry *entry, bool checked);                                                 // Sets whether or not an entry is checked.
  SDL_SetTrayEntryChecked: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.void,
  },
  // bool SDL_GetTrayEntryChecked(SDL_TrayEntry *entry);                                                               // Gets whether or not an entry is checked.
  SDL_GetTrayEntryChecked: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_SetTrayEntryEnabled(SDL_TrayEntry *entry, bool enabled);                                                 // Sets whether or not an entry is enabled.
  SDL_SetTrayEntryEnabled: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.void,
  },
  // bool SDL_GetTrayEntryEnabled(SDL_TrayEntry *entry);                                                               // Gets whether or not an entry is enabled.
  SDL_GetTrayEntryEnabled: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_SetTrayEntryCallback(SDL_TrayEntry *entry, SDL_TrayCallback callback, void *userdata);                   // Sets a callback to be invoked when the entry is selected.
  SDL_SetTrayEntryCallback: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_ClickTrayEntry(SDL_TrayEntry *entry);                                                                    // Simulate a click on a tray entry.
  SDL_ClickTrayEntry: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_DestroyTray(SDL_Tray *tray);                                                                             // Destroys a tray object.
  SDL_DestroyTray: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_TrayMenu * SDL_GetTrayEntryParent(SDL_TrayEntry *entry);                                                      // Gets the menu containing a certain tray entry.
  SDL_GetTrayEntryParent: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_TrayEntry * SDL_GetTrayMenuParentEntry(SDL_TrayMenu *menu);                                                   // Gets the entry for which the menu is a submenu, if the current menu is a submenu.
  SDL_GetTrayMenuParentEntry: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_Tray * SDL_GetTrayMenuParentTray(SDL_TrayMenu *menu);                                                         // Gets the tray for which this menu is the first-level menu, if the current menu isn't a submenu.
  SDL_GetTrayMenuParentTray: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_UpdateTrays(void);                                                                                       // Update the trays.
  SDL_UpdateTrays: {
    args: [],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
