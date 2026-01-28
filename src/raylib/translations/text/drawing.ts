import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { Color, Font, Vector2 } from '../struct';

export function drawFPS(this: RayLib, options: { posX: number; posY: number }) {
  this.symbols.DrawFPS(options.posX, options.posY);
}

export function drawText(
  this: RayLib,
  options: {
    text: string;
    posX: number;
    posY: number;
    fontSize: number;
    color: Color;
  }
) {
  this.symbols.DrawText(
    stringToCString(options.text).ptr,
    options.posX,
    options.posY,
    options.fontSize,
    options.color.$address
  );
}

export function drawTextEx(
  this: RayLib,
  options: {
    font: Font;
    text: string;
    position: Vector2;
    fontSize: number;
    spacing: number;
    tint: Color;
  }
) {
  this.symbols.DrawTextEx(
    options.font.$address,
    stringToCString(options.text).ptr,
    options.position.$address,
    options.fontSize,
    options.spacing,
    options.tint.$address
  );
}

export function drawTextPro(
  this: RayLib,
  options: {
    font: Font;
    text: string;
    position: Vector2;
    origin: Vector2;
    rotation: number;
    fontSize: number;
    spacing: number;
    tint: Color;
  }
) {
  this.symbols.DrawTextPro(
    options.font.$address,
    stringToCString(options.text).ptr,
    options.position.$address,
    options.origin.$address,
    options.rotation,
    options.fontSize,
    options.spacing,
    options.tint.$address
  );
}

export function drawTextCodepoint(
  this: RayLib,
  options: {
    font: Font;
    codepoint: number;
    position: Vector2;
    fontSize: number;
    tint: Color;
  }
) {
  this.symbols.DrawTextCodepoint(
    options.font.$address,
    options.codepoint,
    options.position.$address,
    options.fontSize,
    options.tint.$address
  );
}

export function drawTextCodepoints(
  this: RayLib,
  options: {
    font: Font;
    codepoints: Int32Array;
    position: Vector2;
    fontSize: number;
    spacing: number;
    tint: Color;
  }
) {
  this.symbols.DrawTextCodepoints(
    options.font.$address,
    options.codepoints,
    options.codepoints.length,
    options.position.$address,
    options.fontSize,
    options.spacing,
    options.tint.$address
  );
}
