export const TrayEntryFlags = {
  BUTTON: 0x00000001,
  CHECKBOX: 0x00000002,
  SUBMENU: 0x00000004,
  DISABLED: 0x80000000,
  CHECKED: 0x40000000,
} as const;

export type TrayEntryFlags =
  (typeof TrayEntryFlags)[keyof typeof TrayEntryFlags];
