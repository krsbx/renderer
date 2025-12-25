export const TrayEntryFlags = {
  TRAYENTRY_BUTTON: 0x00000001,
  TRAYENTRY_CHECKBOX: 0x00000002,
  TRAYENTRY_SUBMENU: 0x00000004,
  TRAYENTRY_DISABLED: 0x80000000,
  TRAYENTRY_CHECKED: 0x40000000,
} as const;

export type TrayEntryFlags =
  (typeof TrayEntryFlags)[keyof typeof TrayEntryFlags];
