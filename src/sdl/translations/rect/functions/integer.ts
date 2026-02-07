import type { SDL } from '@/sdl';
import type { Int32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import { Point, Rect } from '../struct';

export function hasRectIntersection(
  this: SDL,
  options: {
    a: Rect;
    b: Rect;
  }
) {
  return this.symbols.SDL_HasRectIntersection(
    options.a.$memory,
    options.b.$memory
  );
}

export function getRectIntersection(
  this: SDL,
  options: {
    a: Rect;
    b: Rect;
  }
) {
  const result = Rect.create();

  const success = this.symbols.SDL_GetRectIntersection(
    options.a.$memory,
    options.b.$memory,
    result.$memory
  );

  if (!success) return null;

  return result;
}

export function getRectUnion(
  this: SDL,
  options: {
    a: Rect;
    b: Rect;
  }
) {
  const result = Rect.create();

  const success = this.symbols.SDL_GetRectUnion(
    options.a.$memory,
    options.b.$memory,
    result.$memory
  );

  if (!success) return null;

  return result;
}

export function getRectEnclosingPoints(
  this: SDL,
  options: {
    points: Point[];
    clip?: Rect | null;
  }
) {
  const result = Rect.create();
  const { buffer: points } = CStruct.writeArray(
    options.points,
    Point.BYTE_SIZE
  );

  const success = this.symbols.SDL_GetRectEnclosingPoints(
    points,
    options.points.length,
    options.clip?.$memory ?? null,
    result.$memory
  );

  if (!success) return null;

  return result;
}

export function getRectAndLineIntersection(
  this: SDL,
  options: {
    rect: Rect;
    x1: Int32;
    y1: Int32;
    x2: Int32;
    y2: Int32;
  }
) {
  const x1Struct = new CStruct({
    length: CStruct.BYTE_SIZE.i32,
  }).setValue(0, options.x1, 'i32');

  const y1Struct = new CStruct({
    length: CStruct.BYTE_SIZE.i32,
  }).setValue(0, options.y1, 'i32');

  const x2Struct = new CStruct({
    length: CStruct.BYTE_SIZE.i32,
  }).setValue(0, options.x2, 'i32');

  const y2Struct = new CStruct({
    length: CStruct.BYTE_SIZE.i32,
  }).setValue(0, options.y2, 'i32');

  const success = this.symbols.SDL_GetRectAndLineIntersection(
    options.rect.$memory,
    x1Struct.$memory,
    y1Struct.$memory,
    x2Struct.$memory,
    y2Struct.$memory
  );

  if (!success) return null;

  return {
    x1: x1Struct.getValue(0, 'i32') as Int32,
    y1: y1Struct.getValue(0, 'i32') as Int32,
    x2: x2Struct.getValue(0, 'i32') as Int32,
    y2: y2Struct.getValue(0, 'i32') as Int32,
  };
}
