import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { Font, GlyphInfo, Rectangle, Vector2 } from '../struct';

export function setTextLineSpacing(this: RayLib, spacing: number) {
  this.symbols.SetTextLineSpacing(spacing);
}

export function measureText(
  this: RayLib,
  options: {
    text: string;
    fontSize: number;
  }
) {
  return this.symbols.MeasureText(
    stringToCString(options.text).ptr,
    options.fontSize
  );
}

export function measureTextEx(
  this: RayLib,
  options: {
    font: Font;
    text: string;
    fontSize: number;
    spacing: number;
  }
) {
  const result = Vector2.create();

  this.symbols.MeasureTextEx(
    options.font.$address,
    stringToCString(options.text).ptr,
    options.fontSize,
    options.spacing,
    result.$address
  );

  return result;
}

export function getGlyphIndex(
  this: RayLib,
  options: {
    font: Font;
    codepoint: number;
  }
) {
  return this.symbols.GetGlyphIndex(options.font.$address, options.codepoint);
}

export function getGlyphInfo(
  this: RayLib,
  options: {
    font: Font;
    codepoint: number;
  }
) {
  const glyphInfo = GlyphInfo.create();

  this.symbols.GetGlyphInfo(
    options.font.$address,
    options.codepoint,
    glyphInfo.$address
  );

  return glyphInfo;
}

export function getGlyphAtlasRec(
  this: RayLib,
  options: {
    font: Font;
    codepoint: number;
  }
) {
  const rectangle = Rectangle.create();

  this.symbols.GetGlyphAtlasRec(
    options.font.$address,
    options.codepoint,
    rectangle.$address
  );

  return rectangle;
}
