import type { SDL } from '@/sdl';
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
    options.a.$address,
    options.b.$address
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
    options.a.$address,
    options.b.$address,
    result.$address
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
    options.a.$address,
    options.b.$address,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectEnclosingPoints(
  this: SDL,
  options: {
    points: Point;
    count: number;
    clip?: Rect | null;
  }
) {
  const result = Rect.create();

  const success = this.symbols.SDL_GetRectEnclosingPoints(
    options.points.$address,
    options.count,
    options.clip?.$address ?? null,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectAndLineIntersection(
  this: SDL,
  options: {
    rect: Rect;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
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
    options.rect.$address,
    x1Struct.$address,
    y1Struct.$address,
    x2Struct.$address,
    y2Struct.$address
  );

  if (!success) return null;

  return {
    x1: x1Struct.getValue(0, 'i32'),
    y1: y1Struct.getValue(0, 'i32'),
    x2: x2Struct.getValue(0, 'i32'),
    y2: y2Struct.getValue(0, 'i32'),
  };
}
