import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { type Pointer } from 'bun:ffi';
import { Shader, Texture2D } from '../struct';
import type { Matrix } from '../struct/matrix';

export function loadShader(
  this: RayLib,
  options: {
    vsFileName: string;
    fsFileName: string;
  }
) {
  const shader = Shader.create();

  this.symbols.LoadShader(
    stringToCString(options.vsFileName).ptr,
    stringToCString(options.fsFileName).ptr,
    shader.$address
  );

  return shader;
}

export function loadShaderFromMemory(
  this: RayLib,
  options: {
    vsCode: string;
    fsCode: string;
  }
) {
  const shader = Shader.create();

  this.symbols.LoadShaderFromMemory(
    stringToCString(options.vsCode).ptr,
    stringToCString(options.fsCode).ptr,
    shader.$address
  );

  return shader;
}

export function isShaderValid(this: RayLib, shader: Shader) {
  return this.symbols.IsShaderValid(shader.$address);
}

export function getShaderLocation(
  this: RayLib,
  options: {
    shader: Shader;
    uniformName: string;
  }
) {
  return this.symbols.GetShaderLocation(
    options.shader.$address,
    stringToCString(options.uniformName).ptr
  );
}

export function getShaderLocationAttrib(
  this: RayLib,
  options: {
    shader: Shader;
    attribName: string;
  }
) {
  return this.symbols.GetShaderLocationAttrib(
    options.shader.$address,
    stringToCString(options.attribName).ptr
  );
}

export function setShaderValue(
  this: RayLib,
  options: {
    shader: Shader;
    locIndex: number;
    value: Pointer;
    uniformType: number;
  }
) {
  this.symbols.SetShaderValue(
    options.shader.$address,
    options.locIndex,
    options.value,
    options.uniformType
  );
}

export function setShaderValueV(
  this: RayLib,
  options: {
    shader: Shader;
    locIndex: number;
    value: Pointer;
    uniformType: number;
    count: number;
  }
) {
  this.symbols.SetShaderValueV(
    options.shader.$address,
    options.locIndex,
    options.value,
    options.uniformType,
    options.count
  );
}

export function setShaderValueMatrix(
  this: RayLib,
  options: {
    shader: Shader;
    locIndex: number;
    mat: Matrix;
  }
) {
  this.symbols.SetShaderValueMatrix(
    options.shader.$address,
    options.locIndex,
    options.mat.$address
  );
}

export function setShaderValueTexture(
  this: RayLib,
  options: {
    shader: Shader;
    locIndex: number;
    texture: Texture2D;
  }
) {
  this.symbols.SetShaderValueTexture(
    options.shader.$address,
    options.locIndex,
    options.texture.$address
  );
}

export function unloadShader(this: RayLib, shader: Shader) {
  this.symbols.UnloadShader(shader.$address);
}
