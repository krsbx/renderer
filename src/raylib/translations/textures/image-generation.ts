import type { RayLib } from '@/raylib';
import { Image, type Color } from '../struct';

export function genImageColor(
  this: RayLib,
  options: {
    width: number;
    height: number;
    color: Color;
  }
) {
  const image = Image.create();

  this.symbols.GenImageColor(
    options.width,
    options.height,
    options.color.$address,
    image.$address
  );

  return image;
}

export function genImageGradientLinear(
  this: RayLib,
  options: {
    width: number;
    height: number;
    direction: number;
    start: Color;
    end: Color;
  }
) {
  const image = Image.create();

  this.symbols.GenImageGradientLinear(
    options.width,
    options.height,
    options.direction,
    options.start.$address,
    options.end.$address,
    image.$address
  );

  return image;
}

export function genImageGradientRadial(
  this: RayLib,
  options: {
    width: number;
    height: number;
    density: number;
    inner: Color;
    outer: Color;
  }
) {
  const image = Image.create();

  this.symbols.GenImageGradientRadial(
    options.width,
    options.height,
    options.density,
    options.inner.$address,
    options.outer.$address,
    image.$address
  );

  return image;
}

export function genImageGradientSquare(
  this: RayLib,
  options: {
    width: number;
    height: number;
    density: number;
    inner: Color;
    outer: Color;
  }
) {
  const image = Image.create();

  this.symbols.GenImageGradientSquare(
    options.width,
    options.height,
    options.density,
    options.inner.$address,
    options.outer.$address,
    image.$address
  );

  return image;
}

export function genImageChecked(
  this: RayLib,
  options: {
    width: number;
    height: number;
    checksX: number;
    checksY: number;
    col1: Color;
    col2: Color;
  }
) {
  const image = Image.create();

  this.symbols.GenImageChecked(
    options.width,
    options.height,
    options.checksX,
    options.checksY,
    options.col1.$address,
    options.col2.$address,
    image.$address
  );

  return image;
}

export function genImageWhiteNoise(
  this: RayLib,
  options: {
    width: number;
    height: number;
    factor: number;
  }
) {
  const image = Image.create();

  this.symbols.GenImageWhiteNoise(
    options.width,
    options.height,
    options.factor,
    image.$address
  );

  return image;
}

export function genImagePerlinNoise(
  this: RayLib,
  options: {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    scale: number;
  }
) {
  const image = Image.create();

  this.symbols.GenImagePerlinNoise(
    options.width,
    options.height,
    options.offsetX,
    options.offsetY,
    options.scale,
    image.$address
  );

  return image;
}

export function genImageCellular(
  this: RayLib,
  options: {
    width: number;
    height: number;
    tileSize: number;
  }
) {
  const image = Image.create();

  this.symbols.GenImageCellular(
    options.width,
    options.height,
    options.tileSize,
    image.$address
  );

  return image;
}
