export const FileDialogType = {
  OPENFILE: 0,
  SAVEFILE: 1,
  OPENFOLDER: 2,
} as const;

export type FileDialogType =
  (typeof FileDialogType)[keyof typeof FileDialogType];
