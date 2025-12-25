export const FileDialogType = {
  SDL_FILEDIALOG_OPENFILE: 0,
  SDL_FILEDIALOG_SAVEFILE: 1,
  SDL_FILEDIALOG_OPENFOLDER: 2,
} as const;

export type FileDialogType =
  (typeof FileDialogType)[keyof typeof FileDialogType];
