import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { FPoint, FRect } from '../utility';

export function hasRectIntersectionFloat(
  this: SDL,
  options: {
    a: FRect;
    b: FRect;
  }
) {
  return this.symbols.SDL_HasRectIntersectionFloat(
    options.a.$address,
    options.b.$address
  );
}

export function getRectIntersectionFloat(
  this: SDL,
  options: {
    a: FRect;
    b: FRect;
  }
) {
  const result = FRect.create();

  const success = this.symbols.SDL_GetRectIntersectionFloat(
    options.a.$address,
    options.b.$address,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectUnionFloat(
  this: SDL,
  options: {
    a: FRect;
    b: FRect;
  }
) {
  const result = FRect.create();

  const success = this.symbols.SDL_GetRectUnionFloat(
    options.a.$address,
    options.b.$address,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectEnclosingPointsFloat(
  this: SDL,
  options: {
    points: FPoint;
    count: number;
    clip?: FRect | null;
  }
) {
  const result = FRect.create();

  const success = this.symbols.SDL_GetRectEnclosingPointsFloat(
    options.points.$address,
    options.count,
    options.clip?.$address ?? null,
    result.$address
  );

  if (!success) return null;

  return result;
}

export function getRectAndLineIntersectionFloat(
  this: SDL,
  options: {
    rect: FRect;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }
) {
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
    options.rect.$address,
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
