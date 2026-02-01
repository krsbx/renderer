import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { Model } from '../struct/model';
import { ModelAnimation } from '../struct/model-animation';

export function loadModelAnimations(
  this: RayLib,
  options: {
    fileName: string;
  }
) {
  const countStruct = new CStruct({ length: 4 });
  const animationsPtr = this.symbols.LoadModelAnimations(
    stringToCString(options.fileName).ptr,
    countStruct.$memory
  );

  const count = countStruct.getValue(0, 'i32');

  if (!animationsPtr || count === 0) {
    return [];
  }

  return CStruct.readArray(ModelAnimation, animationsPtr, count);
}

export function updateModelAnimation(
  this: RayLib,
  options: {
    model: Model;
    anim: ModelAnimation;
    frame: number;
  }
) {
  this.symbols.UpdateModelAnimation(
    options.model.$memory,
    options.anim.$memory,
    options.frame
  );
}

export function updateModelAnimationBones(
  this: RayLib,
  options: {
    model: Model;
    anim: ModelAnimation;
    frame: number;
  }
) {
  this.symbols.UpdateModelAnimationBones(
    options.model.$memory,
    options.anim.$memory,
    options.frame
  );
}

export function unloadModelAnimation(this: RayLib, anim: ModelAnimation) {
  this.symbols.UnloadModelAnimation(anim.$memory);
}

export function unloadModelAnimations(
  this: RayLib,
  animations: ModelAnimation[]
) {
  const { buffer: animationsBuffer } = CStruct.writeArray(
    animations,
    ModelAnimation.BYTE_SIZE
  );

  this.symbols.UnloadModelAnimations(animationsBuffer, animations.length);
}

export function isModelAnimationValid(
  this: RayLib,
  options: {
    model: Model;
    anim: ModelAnimation;
  }
) {
  return this.symbols.IsModelAnimationValid(
    options.model.$memory,
    options.anim.$memory
  );
}
