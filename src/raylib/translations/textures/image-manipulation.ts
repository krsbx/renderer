import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';
import { Color, Font, Image, Rectangle } from '../struct';

export function imageCopy(this: RayLib, image: Image) {
  const copy = Image.create();

  this.symbols.ImageCopy(image.$address, copy.$address);

  return copy;
}

export function imageFromImage(
  this: RayLib,
  options: {
    image: Image;
    rec: Rectangle;
  }
) {
  const newImage = Image.create();

  this.symbols.ImageFromImage(
    options.image.$address,
    options.rec.$address,
    newImage.$address
  );

  return newImage;
}

export function imageFromChannel(
  this: RayLib,
  options: {
    image: Image;
    selectedChannel: number;
  }
) {
  const newImage = Image.create();

  this.symbols.ImageFromChannel(
    options.image.$address,
    options.selectedChannel,
    newImage.$address
  );

  return newImage;
}

export function imageText(
  this: RayLib,
  options: {
    text: string;
    fontSize: number;
    color: Color;
  }
) {
  const image = Image.create();

  this.symbols.ImageText(
    stringToCString(options.text).ptr,
    options.fontSize,
    options.color.$address,
    image.$address
  );

  return image;
}

export function imageTextEx(
  this: RayLib,
  options: {
    font: Font;
    text: string;
    fontSize: number;
    spacing: number;
    tint: Color;
  }
) {
  const image = Image.create();

  this.symbols.ImageTextEx(
    options.font.$address,
    stringToCString(options.text).ptr,
    options.fontSize,
    options.spacing,
    options.tint.$address,
    image.$address
  );

  return image;
}

// In-place manipulation functions

export function imageFormat(
  this: RayLib,
  options: {
    image: Image;
    newFormat: number;
  }
) {
  this.symbols.ImageFormat(options.image.$address, options.newFormat);
}

export function imageToPOT(
  this: RayLib,
  options: {
    image: Image;
    fill: Color;
  }
) {
  this.symbols.ImageToPOT(options.image.$address, options.fill.$address);
}

export function imageCrop(
  this: RayLib,
  options: {
    image: Image;
    crop: Rectangle;
  }
) {
  this.symbols.ImageCrop(options.image.$address, options.crop.$address);
}

export function imageAlphaCrop(
  this: RayLib,
  options: {
    image: Image;
    threshold: number;
  }
) {
  this.symbols.ImageAlphaCrop(options.image.$address, options.threshold);
}

export function imageAlphaClear(
  this: RayLib,
  options: {
    image: Image;
    color: Color;
    threshold: number;
  }
) {
  this.symbols.ImageAlphaClear(
    options.image.$address,
    options.color.$address,
    options.threshold
  );
}

export function imageAlphaMask(
  this: RayLib,
  options: {
    image: Image;
    alphaMask: Image;
  }
) {
  this.symbols.ImageAlphaMask(
    options.image.$address,
    options.alphaMask.$address
  );
}

export function imageAlphaPremultiply(this: RayLib, image: Image) {
  this.symbols.ImageAlphaPremultiply(image.$address);
}

export function imageBlurGaussian(
  this: RayLib,
  options: {
    image: Image;
    blurSize: number;
  }
) {
  this.symbols.ImageBlurGaussian(options.image.$address, options.blurSize);
}

export function imageKernelConvolution(
  this: RayLib,
  options: {
    image: Image;
    kernel: Float32Array;
  }
) {
  this.symbols.ImageKernelConvolution(
    options.image.$address,
    options.kernel,
    options.kernel.length
  );
}

export function imageResize(
  this: RayLib,
  options: {
    image: Image;
    newWidth: number;
    newHeight: number;
  }
) {
  this.symbols.ImageResize(
    options.image.$address,
    options.newWidth,
    options.newHeight
  );
}

export function imageResizeNN(
  this: RayLib,
  options: {
    image: Image;
    newWidth: number;
    newHeight: number;
  }
) {
  this.symbols.ImageResizeNN(
    options.image.$address,
    options.newWidth,
    options.newHeight
  );
}

export function imageResizeCanvas(
  this: RayLib,
  options: {
    image: Image;
    newWidth: number;
    newHeight: number;
    offsetX: number;
    offsetY: number;
    fill: Color;
  }
) {
  this.symbols.ImageResizeCanvas(
    options.image.$address,
    options.newWidth,
    options.newHeight,
    options.offsetX,
    options.offsetY,
    options.fill.$address
  );
}

export function imageMipmaps(this: RayLib, image: Image) {
  this.symbols.ImageMipmaps(image.$address);
}

export function imageDither(
  this: RayLib,
  options: {
    image: Image;
    rBpp: number;
    gBpp: number;
    bBpp: number;
    aBpp: number;
  }
) {
  this.symbols.ImageDither(
    options.image.$address,
    options.rBpp,
    options.gBpp,
    options.bBpp,
    options.aBpp
  );
}

export function imageFlipVertical(this: RayLib, image: Image) {
  this.symbols.ImageFlipVertical(image.$address);
}

export function imageFlipHorizontal(this: RayLib, image: Image) {
  this.symbols.ImageFlipHorizontal(image.$address);
}

export function imageRotate(
  this: RayLib,
  options: {
    image: Image;
    degrees: number;
  }
) {
  this.symbols.ImageRotate(options.image.$address, options.degrees);
}

export function imageRotateCW(this: RayLib, image: Image) {
  this.symbols.ImageRotateCW(image.$address);
}

export function imageRotateCCW(this: RayLib, image: Image) {
  this.symbols.ImageRotateCCW(image.$address);
}

export function imageColorTint(
  this: RayLib,
  options: {
    image: Image;
    color: Color;
  }
) {
  this.symbols.ImageColorTint(options.image.$address, options.color.$address);
}

export function imageColorInvert(this: RayLib, image: Image) {
  this.symbols.ImageColorInvert(image.$address);
}

export function imageColorGrayscale(this: RayLib, image: Image) {
  this.symbols.ImageColorGrayscale(image.$address);
}

export function imageColorContrast(
  this: RayLib,
  options: {
    image: Image;
    contrast: number;
  }
) {
  this.symbols.ImageColorContrast(options.image.$address, options.contrast);
}

export function imageColorBrightness(
  this: RayLib,
  options: {
    image: Image;
    brightness: number;
  }
) {
  this.symbols.ImageColorBrightness(options.image.$address, options.brightness);
}

export function imageColorReplace(
  this: RayLib,
  options: {
    image: Image;
    color: Color;
    replace: Color;
  }
) {
  this.symbols.ImageColorReplace(
    options.image.$address,
    options.color.$address,
    options.replace.$address
  );
}

// Color data functions

export function loadImageColors(this: RayLib, image: Image) {
  const ptr = this.symbols.LoadImageColors(image.$address);

  if (!ptr)
    return {
      colors: [],
      ptr: ptr,
    };

  const count = image.width * image.height;
  const colors = CStruct.readArrayLazy(Color, ptr, count);

  return {
    colors,
    ptr: ptr,
  };
}

export function loadImagePalette(
  this: RayLib,
  options: {
    image: Image;
    maxPaletteSize: number;
  }
) {
  const colorCountOut = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const ptr = this.symbols.LoadImagePalette(
    options.image.$address,
    options.maxPaletteSize,
    colorCountOut.$address
  );

  if (!ptr) {
    return {
      colors: [],
      ptr,
    };
  }

  const count = colorCountOut.getValue(0, 'i32');
  const colors = CStruct.readArrayLazy(Color, ptr, count);

  return {
    colors,
    ptr,
  };
}

export function unloadImageColors(this: RayLib, colors: Pointer) {
  this.symbols.UnloadImageColors(colors);
}

export function unloadImagePalette(this: RayLib, colors: Pointer) {
  this.symbols.UnloadImagePalette(colors);
}

// Shimmed getter functions

export function getImageColor(
  this: RayLib,
  options: {
    image: Image;
    x: number;
    y: number;
  }
) {
  const color = Color.create();

  this.symbols.GetImageColor(
    options.image.$address,
    options.x,
    options.y,
    color.$address
  );

  return color;
}

export function getImageAlphaBorder(
  this: RayLib,
  options: {
    image: Image;
    threshold: number;
  }
) {
  const rect = Rectangle.create();

  this.symbols.GetImageAlphaBorder(
    options.image.$address,
    options.threshold,
    rect.$address
  );

  return rect;
}
