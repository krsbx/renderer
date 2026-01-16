export const ByteOffset = {
  version: 0,
  close: 8,
  ready: 16,
  enumerate: 24,
  info: 32,
  read_file: 40,
  write_file: 48,
  mkdir: 56,
  remove: 64,
  rename: 72,
  copy: 80,
  space_remaining: 88,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
