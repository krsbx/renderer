import type { Brand } from '../../types/shared';

const RawTrayEntryFlags = {
  BUTTON: 0x00000001,
  CHECKBOX: 0x00000002,
  SUBMENU: 0x00000004,
  DISABLED: 0x80000000,
  CHECKED: 0x40000000,
} as const;

export const TrayEntryFlags = RawTrayEntryFlags as Readonly<
  Record<keyof typeof RawTrayEntryFlags, Brand<number, 'TrayEntryFlags'>>
>;

export type TrayEntryFlags =
  (typeof TrayEntryFlags)[keyof typeof TrayEntryFlags];
