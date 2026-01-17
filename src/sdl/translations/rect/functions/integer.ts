import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';
import { Point, Rect } from '../utility';

export function hasRectIntersection(
  this: SDL,
  options: {
    a: Rect | Pointer;
    b: Rect | Pointer;
  }
) {
  const aPtr = options.a instanceof Rect ? options.a.$address : options.a;
  const bPtr = options.b instanceof Rect ? options.b.$address : options.b;

  return this.symbols.SDL_HasRectIntersection(aPtr, bPtr);
}

export function getRectIntersection(
  this: SDL,
  options: {
    a: Rect | Pointer;
    b: Rect | Pointer;
  }
) {
  const aPtr = options.a instanceof Rect ? options.a.$address : options.a;
  const bPtr = options.b instanceof Rect ? options.b.$address : options.b;
  const result = new Rect(Rect.allocMemory());

  const success = this.symbols.SDL_GetRectIntersection(
    aPtr,
    bPtr,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectUnion(
  this: SDL,
  options: {
    a: Rect | Pointer;
    b: Rect | Pointer;
  }
) {
  const aPtr = options.a instanceof Rect ? options.a.$address : options.a;
  const bPtr = options.b instanceof Rect ? options.b.$address : options.b;
  const result = new Rect(Rect.allocMemory());

  const success = this.symbols.SDL_GetRectUnion(aPtr, bPtr, result.$address);

  if (!success) return null;

  return result;
}

export function getRectEnclosingPoints(
  this: SDL,
  options: {
    points: Point | Pointer;
    count: number;
    clip?: Rect | Pointer | null;
  }
) {
  const pointsPtr =
    options.points instanceof Point ? options.points.$address : options.points;
  const clipPtr = options.clip
    ? options.clip instanceof Rect
      ? options.clip.$address
      : options.clip
    : null;
  const result = new Rect(Rect.allocMemory());

  const success = this.symbols.SDL_GetRectEnclosingPoints(
    pointsPtr,
    options.count,
    clipPtr,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectAndLineIntersection(
  this: SDL,
  options: {
    rect: Rect | Pointer;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }
) {
  const rectPtr =
    options.rect instanceof Rect ? options.rect.$address : options.rect;

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
    rectPtr,
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
