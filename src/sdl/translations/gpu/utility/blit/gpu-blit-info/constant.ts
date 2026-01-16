export const ByteOffset = {
  source: 0,
  destination: 32,
  load_op: 64,
  clear_color: 68,
  flip_mode: 84,
  filter: 88,
  cycle: 92,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
