import type { Brand } from '../../types/shared';

const RawFolder = {
  HOME: 0 /**< The folder which contains all of the current user's data, preferences, and documents. It usually contains most of the other folders. If a requested folder does not exist, the home folder can be considered a safe fallback to store a user's documents. */,
  DESKTOP: 1 /**< The folder of files that are displayed on the desktop. Note that the existence of a desktop folder does not guarantee that the system does show icons on its desktop; certain GNU/Linux distros with a graphical environment may not have desktop icons. */,
  DOCUMENTS: 2 /**< User document files, possibly application-specific. This is a good place to save a user's projects. */,
  DOWNLOADS: 3 /**< Standard folder for user files downloaded from the internet. */,
  MUSIC: 4 /**< Music files that can be played using a standard music player (mp3, ogg...). */,
  PICTURES: 5 /**< Image files that can be displayed using a standard viewer (png, jpg...). */,
  PUBLICSHARE: 6 /**< Files that are meant to be shared with other users on the same computer. */,
  SAVEDGAMES: 7 /**< Save files for games. */,
  SCREENSHOTS: 8 /**< Application screenshots. */,
  TEMPLATES: 9 /**< Template files to be used when the user requests the desktop environment to create a new file in a certain folder, such as "New Text File.txt".  Any file in the Templates folder can be used as a starting point for a new file. */,
  VIDEOS: 10 /**< Video files that can be played using a standard video player (mp4, webm...). */,
  COUNT: 11 /**< Total number of types in this enum, not a folder type by itself. */,
} as const;

export const Folder = RawFolder as Readonly<
  Record<keyof typeof RawFolder, Brand<number, 'Folder'>>
>;

export type Folder = (typeof Folder)[keyof typeof Folder];

const RawPathType = {
  NONE: 0 /**< path does not exist */,
  FILE: 1 /**< a normal file */,
  DIRECTORY: 2 /**< a directory */,
  OTHER: 3 /**< something completely different like a device node (not a symlink, those are always followed) */,
} as const;

export const PathType = RawPathType as Readonly<
  Record<keyof typeof RawPathType, Brand<number, 'PathType'>>
>;

export type PathType = (typeof PathType)[keyof typeof PathType];

const RawEnumerationResult = {
  CONTINUE: 0 /**< Value that requests that enumeration continue. */,
  SUCCESS: 1 /**< Value that requests that enumeration stop, successfully. */,
  FAILURE: 2 /**< Value that requests that enumeration stop, as a failure. */,
} as const;

export const EnumerationResult = RawEnumerationResult as Readonly<
  Record<keyof typeof RawEnumerationResult, Brand<number, 'EnumerationResult'>>
>;

export type EnumerationResult =
  (typeof EnumerationResult)[keyof typeof EnumerationResult];

const RawGlobFlags = {
  CASEINSENSITIVE: 1 << 0,
} as const;

export const GlobFlags = RawGlobFlags as Readonly<
  Record<keyof typeof RawGlobFlags, Brand<number, 'GlobFlags'>>
>;

export type GlobFlags = (typeof GlobFlags)[keyof typeof GlobFlags];
