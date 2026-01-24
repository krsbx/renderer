import type { Brand } from '@/types/shared';

const RawPropertyType = {
  INVALID: 0,
  POINTER: 1,
  STRING: 2,
  NUMBER: 3,
  FLOAT: 4,
  BOOLEAN: 5,
} as const;

export const PropertyType = RawPropertyType as Readonly<
  Record<keyof typeof RawPropertyType, Brand<number, 'PropertyType'>>
>;

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];
