export const PropertyType = {
  INVALID: 0,
  POINTER: 1,
  STRING: 2,
  NUMBER: 3,
  FLOAT: 4,
  BOOLEAN: 5,
} as const;

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];
