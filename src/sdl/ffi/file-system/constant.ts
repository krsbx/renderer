export const PathType = {
  SDL_PATHTYPE_NONE: 0 /**< path does not exist */,
  SDL_PATHTYPE_FILE: 1 /**< a normal file */,
  SDL_PATHTYPE_DIRECTORY: 2 /**< a directory */,
  SDL_PATHTYPE_OTHER: 3 /**< something completely different like a device node (not a symlink, those are always followed) */,
} as const;

export type PathType = (typeof PathType)[keyof typeof PathType];
