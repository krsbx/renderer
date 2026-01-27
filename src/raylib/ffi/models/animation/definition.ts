import { FFIType, type FFIFunction } from 'bun:ffi';

export const AnimationDefinition = {
  // ModelAnimation *LoadModelAnimations(const char *fileName, int *animCount);
  LoadModelAnimations: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void UpdateModelAnimation(Model model, ModelAnimation anim, int frame);
  UpdateModelAnimation: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void UpdateModelAnimationBones(Model model, ModelAnimation anim, int frame);
  UpdateModelAnimationBones: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void UnloadModelAnimation(ModelAnimation anim);
  UnloadModelAnimation: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void UnloadModelAnimations(ModelAnimation *animations, int animCount);
  UnloadModelAnimations: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // bool IsModelAnimationValid(Model model, ModelAnimation anim);
  IsModelAnimationValid: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
