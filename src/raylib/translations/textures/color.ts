import type { RayLib } from '@/raylib';
import { getStructMemoryAddress } from '@/utility/common';
import type { CStruct } from '@/utility/cstruct';
import type { Pointer } from 'bun:ffi';
import { Color, Vector3, Vector4 } from '../struct';

export function fade(
  this: RayLib,
  options: {
    color: Color;
    alpha: number;
  }
) {
  const color = Color.create();

  this.symbols.Fade(options.color.$address, options.alpha, color.$address);

  return color;
}

export function colorNormalize(this: RayLib, color: Color) {
  const normalized = Vector4.create();

  this.symbols.ColorNormalize(color.$address, normalized.$address);

  return normalized;
}

export function colorFromNormalized(this: RayLib, normalized: Vector4) {
  const color = Color.create();

  this.symbols.ColorFromNormalized(normalized.$address, color.$address);

  return color;
}

export function colorToHSV(this: RayLib, color: Color) {
  const hsv = Vector3.create();

  this.symbols.ColorToHSV(color.$address, hsv.$address);

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
    color.$address
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
    options.color.$address,
    options.tint.$address,
    tinted.$address
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
    options.color.$address,
    options.factor,
    brighten.$address
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
    options.color.$address,
    options.contrast,
    contrasted.$address
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
    options.color.$address,
    options.alpha,
    alphaed.$address
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
    options.dst.$address,
    options.src.$address,
    options.tint.$address,
    blended.$address
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
    options.color1.$address,
    options.color2.$address,
    options.amount,
    lerp.$address
  );

  return lerp;
}

export function getColor(this: RayLib, hex: number) {
  const color = Color.create();

  this.symbols.GetColor(hex, color.$address);

  return color;
}

export function getPixelColor(
  this: RayLib,
  options: {
    srcPtr: Uint8Array | Pointer | CStruct;
    format: number;
  }
) {
  const color = Color.create();

  this.symbols.GetPixelColor(
    getStructMemoryAddress(options.srcPtr),
    color.$address,
    options.format
  );

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
    option.color1.$address,
    option.color2.$address
  );
}

export function colorToInt(this: RayLib, color: Color) {
  return this.symbols.ColorToInt(color.$address);
}

export function setPixelColor(
  this: RayLib,
  options: {
    dstPtr: Uint8Array | Pointer | CStruct;
    color: Color;
    format: number;
  }
) {
  this.symbols.SetPixelColor(
    getStructMemoryAddress(options.dstPtr),
    options.color.$address,
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
