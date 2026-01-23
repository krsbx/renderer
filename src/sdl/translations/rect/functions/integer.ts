import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { getStructAddress } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';
import { Point, Rect } from '../utility';

export function hasRectIntersection(
  this: SDL,
  options: {
    a: Rect | Pointer;
    b: Rect | Pointer;
  }
) {
  return this.symbols.SDL_HasRectIntersection(
    getStructAddress(options.a),
    getStructAddress(options.b)
  );
}

export function getRectIntersection(
  this: SDL,
  options: {
    a: Rect | Pointer;
    b: Rect | Pointer;
  }
) {
  const result = new Rect(Rect.allocMemory());

  const success = this.symbols.SDL_GetRectIntersection(
    getStructAddress(options.a),
    getStructAddress(options.b),
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
  const result = new Rect(Rect.allocMemory());

  const success = this.symbols.SDL_GetRectUnion(
    getStructAddress(options.a),
    getStructAddress(options.b),
    result.$address
  );

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
  const result = new Rect(Rect.allocMemory());

  const success = this.symbols.SDL_GetRectEnclosingPoints(
    getStructAddress(options.points),
    options.count,
    options.clip ? getStructAddress(options.clip) : null,
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
    getStructAddress(options.rect),
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
