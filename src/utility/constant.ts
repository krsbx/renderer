export const IS_BIG_ENDIAN =
  new Uint8Array(new Uint16Array([0x1234]).buffer)[0] === 0x12;

export const IS_WINDOWS = process.platform === 'win32';

export const WIDE_STRING_CHAR_SIZE = IS_WINDOWS ? 2 : 4;

export const WIDE_STRING_MAX_SCAN = 4096;
