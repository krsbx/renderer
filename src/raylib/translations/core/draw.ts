import type { RayLib } from '@/raylib';
import type {
  Camera2D,
  Camera3D,
  RenderTexture2D,
  Shader,
  VrStereoConfig,
} from '../struct';

export function clearBackground(this: RayLib, color: number) {
  this.symbols.ClearBackground(color);
}

export function beginDrawing(this: RayLib) {
  this.symbols.BeginDrawing();
}

export function endDrawing(this: RayLib) {
  this.symbols.EndDrawing();
}

export function beginMode2D(this: RayLib, camera: Camera2D) {
  this.symbols.BeginMode2D(camera.$address);
}

export function endMode2D(this: RayLib) {
  this.symbols.EndMode2D();
}

export function beginMode3D(this: RayLib, camera: Camera3D) {
  this.symbols.BeginMode3D(camera.$address);
}

export function endMode3D(this: RayLib) {
  this.symbols.EndMode3D();
}

export function beginTextureMode(this: RayLib, texture: RenderTexture2D) {
  this.symbols.BeginTextureMode(texture.$address);
}

export function endTextureMode(this: RayLib) {
  this.symbols.EndTextureMode();
}

export function beginShaderMode(this: RayLib, shader: Shader) {
  this.symbols.BeginShaderMode(shader.$address);
}

export function endShaderMode(this: RayLib) {
  this.symbols.EndShaderMode();
}

export function beginBlendMode(this: RayLib, mode: number) {
  this.symbols.BeginBlendMode(mode);
}

export function endBlendMode(this: RayLib) {
  this.symbols.EndBlendMode();
}

export function beginScissorMode(
  this: RayLib,
  options: {
    x: number;
    y: number;
    width: number;
    height: number;
  }
) {
  this.symbols.BeginScissorMode(
    options.x,
    options.y,
    options.width,
    options.height
  );
}

export function endScissorMode(this: RayLib) {
  this.symbols.EndScissorMode();
}

export function beginVrStereoMode(this: RayLib, config: VrStereoConfig) {
  this.symbols.BeginVrStereoMode(config.$address);
}

export function endVrStereoMode(this: RayLib) {
  this.symbols.EndVrStereoMode();
}
