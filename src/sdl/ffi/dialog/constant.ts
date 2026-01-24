import type { Brand } from '@/types/shared';

const RawFileDialogType = {
  OPENFILE: 0,
  SAVEFILE: 1,
  OPENFOLDER: 2,
} as const;

export const FileDialogType = RawFileDialogType as Readonly<
  Record<keyof typeof RawFileDialogType, Brand<number, 'FileDialogType'>>
>;

export type FileDialogType =
  (typeof FileDialogType)[keyof typeof FileDialogType];
