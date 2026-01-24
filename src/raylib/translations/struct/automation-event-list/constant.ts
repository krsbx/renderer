export const ByteOffset = {
  capacity: 0, // unsigned int (4 bytes)
  count: 4, // unsigned int (4 bytes)
  events: 8, // AutomationEvent* (8 bytes pointer)
} as const;
