export const ByteOffset = {
  flags: 0,
  window: 8,
  title: 16,
  message: 24,
  numbuttons: 32,
  buttons: 40,
  colorScheme: 48,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
