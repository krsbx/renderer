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

  const sequence: number[] = [];
  const list = new CStruct({ address: sequencePtr });

  for (let i = 0; i < options.count; i++) {
    sequence.push(list.getValue(i * CStruct.BYTE_SIZE.i32, 'i32'));
  }

  return {
    ptr: sequencePtr,
    sequence,
  };
}

export function unloadRandomSequence(this: RayLib, sequence: Pointer) {
  this.symbols.UnloadRandomSequence(sequence);
}
