export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  owner: 16,
  num_mime_types: 20,
  mime_types: 24,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
