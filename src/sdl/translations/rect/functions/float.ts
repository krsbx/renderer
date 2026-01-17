import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';
import { FPoint, FRect } from '../utility';

export function hasRectIntersectionFloat(
  this: SDL,
  options: {
    a: FRect | Pointer;
    b: FRect | Pointer;
  }
) {
  const aPtr = options.a instanceof FRect ? options.a.$address : options.a;
  const bPtr = options.b instanceof FRect ? options.b.$address : options.b;

  return this.symbols.SDL_HasRectIntersectionFloat(aPtr, bPtr);
}

export function getRectIntersectionFloat(
  this: SDL,
  options: {
    a: FRect | Pointer;
    b: FRect | Pointer;
  }
) {
  const aPtr = options.a instanceof FRect ? options.a.$address : options.a;
  const bPtr = options.b instanceof FRect ? options.b.$address : options.b;
  const result = new FRect(FRect.allocMemory());

  const success = this.symbols.SDL_GetRectIntersectionFloat(
    aPtr,
    bPtr,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectUnionFloat(
  this: SDL,
  options: {
    a: FRect | Pointer;
    b: FRect | Pointer;
  }
) {
  const aPtr = options.a instanceof FRect ? options.a.$address : options.a;
  const bPtr = options.b instanceof FRect ? options.b.$address : options.b;
  const result = new FRect(FRect.allocMemory());

  const success = this.symbols.SDL_GetRectUnionFloat(
    aPtr,
    bPtr,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectEnclosingPointsFloat(
  this: SDL,
  options: {
    points: FPoint | Pointer;
    count: number;
    clip?: FRect | Pointer | null;
  }
) {
  const pointsPtr =
    options.points instanceof FPoint ? options.points.$address : options.points;
  const clipPtr = options.clip
    ? options.clip instanceof FRect
      ? options.clip.$address
      : options.clip
    : null;
  const result = new FRect(FRect.allocMemory());

  const success = this.symbols.SDL_GetRectEnclosingPointsFloat(
    pointsPtr,
    options.count,
    clipPtr,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectAndLineIntersectionFloat(
  this: SDL,
  options: {
    rect: FRect | Pointer;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }
) {
  const rectPtr =
    options.rect instanceof FRect ? options.rect.$address : options.rect;

  const x1Struct = new CStruct({
    length: CStruct.BYTE_SIZE.f32,
  }).setValue(0, options.x1, 'f32');

  const y1Struct = new CStruct({
    length: CStruct.BYTE_SIZE.f32,
  }).setValue(0, options.y1, 'f32');

  const x2Struct = new CStruct({
    length: CStruct.BYTE_SIZE.f32,
  }).setValue(0, options.x2, 'f32');

  const y2Struct = new CStruct({
    length: CStruct.BYTE_SIZE.f32,
  }).setValue(0, options.y2, 'f32');

  const success = this.symbols.SDL_GetRectAndLineIntersectionFloat(
    rectPtr,
    x1Struct.$address,
    y1Struct.$address,
    x2Struct.$address,
    y2Struct.$address
  );

  if (!success) return null;

  return {
    x1: x1Struct.getValue(0, 'f32'),
    y1: y1Struct.getValue(0, 'f32'),
    x2: x2Struct.getValue(0, 'f32'),
    y2: y2Struct.getValue(0, 'f32'),
  };
}
