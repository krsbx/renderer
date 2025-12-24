export const PropertyType = {
  SDL_PROPERTY_TYPE_INVALID: 0,
  SDL_PROPERTY_TYPE_POINTER: 1,
  SDL_PROPERTY_TYPE_STRING: 2,
  SDL_PROPERTY_TYPE_NUMBER: 3,
  SDL_PROPERTY_TYPE_FLOAT: 4,
  SDL_PROPERTY_TYPE_BOOLEAN: 5,
} as const;

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType];
