import { FFIType, type FFIFunction } from 'bun:ffi';

export const RectDefinition = {
  // void SDL_RectToFRect(const SDL_Rect *rect, SDL_FRect *frect);                                                         // Convert an SDL_Rect to SDL_FRect
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_RectToFRect: {
  //   args: [FFIType.ptr, FFIType.ptr],
  //   returns: FFIType.void,
  // },
  // bool SDL_PointInRect(const SDL_Point *p, const SDL_Rect *r);                                                          // Determine whether a point resides inside a rectangle.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_PointInRect: {
  //   args: [FFIType.ptr, FFIType.ptr],
  //   returns: FFIType.bool,
  // },
  // bool SDL_RectEmpty(const SDL_Rect *r);                                                                                // Determine whether a rectangle has no area.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_RectEmpty: {
  //   args: [FFIType.ptr],
  //   returns: FFIType.bool,
  // },
  // bool SDL_RectsEqual(const SDL_Rect *a, const SDL_Rect *b);                                                            // Determine whether two rectangles are equal.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_RectsEqual: {
  //   args: [FFIType.ptr, FFIType.ptr],
  //   returns: FFIType.bool,
  // },
  // bool SDL_HasRectIntersection(const SDL_Rect *A, const SDL_Rect *B);                                                   // Determine whether two rectangles intersect.
  SDL_HasRectIntersection: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRectIntersection(const SDL_Rect *A, const SDL_Rect *B, SDL_Rect *result);                                 // Calculate the intersection of two rectangles.
  SDL_GetRectIntersection: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRectUnion(const SDL_Rect *A, const SDL_Rect *B, SDL_Rect *result);                                        // Calculate the union of two rectangles.
  SDL_GetRectUnion: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRectEnclosingPoints(const SDL_Point *points, int count, const SDL_Rect *clip, SDL_Rect *result);          // Calculate a minimal rectangle enclosing a set of points.
  SDL_GetRectEnclosingPoints: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRectAndLineIntersection(const SDL_Rect *rect, int *X1, int *Y1, int *X2, int *Y2);                        // Calculate the intersection of a rectangle and line segment.
  SDL_GetRectAndLineIntersection: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_PointInRectFloat(const SDL_FPoint *p, const SDL_FRect *r);                                                   // Determine whether a point resides inside a floating point rectangle.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_PointInRectFloat: {
  //   args: [FFIType.ptr, FFIType.ptr],
  //   returns: FFIType.bool,
  // },
  // bool SDL_RectEmptyFloat(const SDL_FRect *r);                                                                          // Determine whether a floating point rectangle takes no space.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_RectEmptyFloat: {
  //   args: [FFIType.ptr],
  //   returns: FFIType.bool,
  // },
  // bool SDL_RectsEqualEpsilon(const SDL_FRect *a, const SDL_FRect *b, float epsilon);                                    // Determine whether two floating point rectangles are equal, within some given epsilon.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_RectsEqualEpsilon: {
  //   args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
  //   returns: FFIType.bool,
  // },
  // bool SDL_RectsEqualFloat(const SDL_FRect *a, const SDL_FRect *b);                                                     // Determine whether two floating point rectangles are equal, within a default epsilon.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_RectsEqualFloat: {
  //   args: [FFIType.ptr, FFIType.ptr],
  //   returns: FFIType.bool,
  // },
  // bool SDL_HasRectIntersectionFloat(const SDL_FRect *A, const SDL_FRect *B);                                            // Determine whether two rectangles intersect with float precision.
  SDL_HasRectIntersectionFloat: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRectIntersectionFloat(const SDL_FRect *A, const SDL_FRect *B, SDL_FRect *result);                         // Calculate the intersection of two rectangles with float precision.
  SDL_GetRectIntersectionFloat: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRectUnionFloat(const SDL_FRect *A, const SDL_FRect *B, SDL_FRect *result);                                // Calculate the union of two rectangles with float precision.
  SDL_GetRectUnionFloat: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRectEnclosingPointsFloat(const SDL_FPoint *points, int count, const SDL_FRect *clip, SDL_FRect *result);  // Calculate a minimal rectangle enclosing a set of points with float precision.
  SDL_GetRectEnclosingPointsFloat: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetRectAndLineIntersectionFloat(const SDL_FRect *rect, float *X1, float *Y1, float *X2, float *Y2);          // Calculate the intersection of a rectangle and line segment with float precision.
  SDL_GetRectAndLineIntersectionFloat: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
