import type { RayLib } from '@/raylib';
import { CStruct } from '@/utility/cstruct';
import type { Pointer } from 'bun:ffi';

export function setRandomSeed(this: RayLib, seed: number) {
  this.symbols.SetRandomSeed(seed);
}

export function getRandomValue(this: RayLib, min: number, max: number) {
  return this.symbols.GetRandomValue(min, max);
}

export function loadRandomSequence(
  this: RayLib,
  options: {
    count: number;
    min: number;
    max: number;
  }
) {
  const sequencePtr = this.symbols.LoadRandomSequence(
    options.count,
    options.min,
    options.max
  );

  if (!sequencePtr)
    return {
      ptr: sequencePtr,
      sequence: [],
    };

  const sequence = CStruct.readArrayPrimitive(
    sequencePtr,
    options.count,
    'i32'
  );

  return {
    ptr: sequencePtr,
    sequence,
  };
}

export function unloadRandomSequence(this: RayLib, sequence: Pointer) {
  this.symbols.UnloadRandomSequence(sequence);
}
