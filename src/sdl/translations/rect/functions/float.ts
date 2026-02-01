import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { FPoint, FRect } from '../struct';

export function hasRectIntersectionFloat(
  this: SDL,
  options: {
    a: FRect;
    b: FRect;
  }
) {
  return this.symbols.SDL_HasRectIntersectionFloat(
    options.a.$memory,
    options.b.$memory
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
    options.a.$memory,
    options.b.$memory,
    result.$memory
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
    options.a.$memory,
    options.b.$memory,
    result.$memory
  );

  if (!success) return null;

  return result;
}

export function getRectEnclosingPointsFloat(
  this: SDL,
  options: {
    points: FPoint[];
    clip?: FRect | null;
  }
) {
  const result = FRect.create();
  const { buffer: points } = CStruct.writeArray(
    options.points,
    FPoint.BYTE_SIZE
  );

  const success = this.symbols.SDL_GetRectEnclosingPointsFloat(
    points,
    options.points.length,
    options.clip?.$memory ?? null,
    result.$memory
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
    options.rect.$memory,
    x1Struct.$memory,
    y1Struct.$memory,
    x2Struct.$memory,
    y2Struct.$memory
  );

  if (!success) return null;

  return {
    x1: x1Struct.getValue(0, 'f32'),
    y1: y1Struct.getValue(0, 'f32'),
    x2: x2Struct.getValue(0, 'f32'),
    y2: y2Struct.getValue(0, 'f32'),
  };
}
