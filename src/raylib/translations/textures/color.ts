import type { RayLib } from '@/raylib';
import { Color, Vector3, Vector4 } from '../struct';

export function fade(
  this: RayLib,
  options: {
    color: Color;
    alpha: number;
  }
) {
  const color = Color.create();

  this.symbols.Fade(options.color.$memory, options.alpha, color.$memory);

  return color;
}

export function colorNormalize(this: RayLib, color: Color) {
  const normalized = Vector4.create();

  this.symbols.ColorNormalize(color.$memory, normalized.$memory);

  return normalized;
}

export function colorFromNormalized(this: RayLib, normalized: Vector4) {
  const color = Color.create();

  this.symbols.ColorFromNormalized(normalized.$memory, color.$memory);

  return color;
}

export function colorToHSV(this: RayLib, color: Color) {
  const hsv = Vector3.create();

  this.symbols.ColorToHSV(color.$memory, hsv.$memory);

  return hsv;
}

export function colorFromHSV(
  this: RayLib,
  options: {
    hue: number;
    saturation: number;
    value: number;
  }
) {
  const color = Color.create();

  this.symbols.ColorFromHSV(
    options.hue,
    options.saturation,
    options.value,
    color.$memory
  );

  return color;
}

export function colorTint(
  this: RayLib,
  options: {
    color: Color;
    tint: Color;
  }
) {
  const tinted = Color.create();

  this.symbols.ColorTint(
    options.color.$memory,
    options.tint.$memory,
    tinted.$memory
  );

  return tinted;
}

export function colorBrightness(
  this: RayLib,
  options: {
    color: Color;
    factor: number;
  }
) {
  const brighten = Color.create();

  this.symbols.ColorBrightness(
    options.color.$memory,
    options.factor,
    brighten.$memory
  );

  return brighten;
}

export function colorContrast(
  this: RayLib,
  options: {
    color: Color;
    contrast: number;
  }
) {
  const contrasted = Color.create();

  this.symbols.ColorContrast(
    options.color.$memory,
    options.contrast,
    contrasted.$memory
  );

  return contrasted;
}

export function colorAlpha(
  this: RayLib,
  options: {
    color: Color;
    alpha: number;
  }
) {
  const alphaed = Color.create();

  this.symbols.ColorAlpha(
    options.color.$memory,
    options.alpha,
    alphaed.$memory
  );

  return alphaed;
}

export function colorAlphaBlend(
  this: RayLib,
  options: {
    dst: Color;
    src: Color;
    tint: Color;
  }
) {
  const blended = Color.create();

  this.symbols.ColorAlphaBlend(
    options.dst.$memory,
    options.src.$memory,
    options.tint.$memory,
    blended.$memory
  );

  return blended;
}

export function colorLerp(
  this: RayLib,
  options: {
    color1: Color;
    color2: Color;
    amount: number;
  }
) {
  const lerp = Color.create();

  this.symbols.ColorLerp(
    options.color1.$memory,
    options.color2.$memory,
    options.amount,
    lerp.$memory
  );

  return lerp;
}

export function getColor(this: RayLib, hex: number) {
  const color = Color.create();

  this.symbols.GetColor(hex, color.$memory);

  return color;
}

export function getPixelColor(
  this: RayLib,
  options: {
    srcPtr: Uint8Array;
    format: number;
  }
) {
  const color = Color.create();

  this.symbols.GetPixelColor(options.srcPtr, color.$memory, options.format);

  return color;
}

export function colorIsEqual(
  this: RayLib,
  option: {
    color1: Color;
    color2: Color;
  }
) {
  return this.symbols.ColorIsEqual(
    option.color1.$memory,
    option.color2.$memory
  );
}

export function colorToInt(this: RayLib, color: Color) {
  return this.symbols.ColorToInt(color.$memory);
}

export function setPixelColor(
  this: RayLib,
  options: {
    dstPtr: Uint8Array;
    color: Color;
    format: number;
  }
) {
  this.symbols.SetPixelColor(
    options.dstPtr,
    options.color.$memory,
    options.format
  );
}

export function getPixelDataSize(
  this: RayLib,
  options: {
    width: number;
    height: number;
    format: number;
  }
) {
  return this.symbols.GetPixelDataSize(
    options.width,
    options.height,
    options.format
  );
}
