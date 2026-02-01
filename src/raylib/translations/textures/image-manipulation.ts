import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';
import { Color, Font, Image, Rectangle } from '../struct';

export function imageCopy(this: RayLib, image: Image) {
  const copy = Image.create();

  this.symbols.ImageCopy(image.$memory, copy.$memory);

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
    options.image.$memory,
    options.rec.$memory,
    newImage.$memory
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
    options.image.$memory,
    options.selectedChannel,
    newImage.$memory
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
    options.color.$memory,
    image.$memory
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
    options.font.$memory,
    stringToCString(options.text).ptr,
    options.fontSize,
    options.spacing,
    options.tint.$memory,
    image.$memory
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
  this.symbols.ImageFormat(options.image.$memory, options.newFormat);
}

export function imageToPOT(
  this: RayLib,
  options: {
    image: Image;
    fill: Color;
  }
) {
  this.symbols.ImageToPOT(options.image.$memory, options.fill.$memory);
}

export function imageCrop(
  this: RayLib,
  options: {
    image: Image;
    crop: Rectangle;
  }
) {
  this.symbols.ImageCrop(options.image.$memory, options.crop.$memory);
}

export function imageAlphaCrop(
  this: RayLib,
  options: {
    image: Image;
    threshold: number;
  }
) {
  this.symbols.ImageAlphaCrop(options.image.$memory, options.threshold);
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
    options.image.$memory,
    options.color.$memory,
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
  this.symbols.ImageAlphaMask(options.image.$memory, options.alphaMask.$memory);
}

export function imageAlphaPremultiply(this: RayLib, image: Image) {
  this.symbols.ImageAlphaPremultiply(image.$memory);
}

export function imageBlurGaussian(
  this: RayLib,
  options: {
    image: Image;
    blurSize: number;
  }
) {
  this.symbols.ImageBlurGaussian(options.image.$memory, options.blurSize);
}

export function imageKernelConvolution(
  this: RayLib,
  options: {
    image: Image;
    kernel: Float32Array;
  }
) {
  this.symbols.ImageKernelConvolution(
    options.image.$memory,
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
    options.image.$memory,
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
    options.image.$memory,
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
    options.image.$memory,
    options.newWidth,
    options.newHeight,
    options.offsetX,
    options.offsetY,
    options.fill.$memory
  );
}

export function imageMipmaps(this: RayLib, image: Image) {
  this.symbols.ImageMipmaps(image.$memory);
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
    options.image.$memory,
    options.rBpp,
    options.gBpp,
    options.bBpp,
    options.aBpp
  );
}

export function imageFlipVertical(this: RayLib, image: Image) {
  this.symbols.ImageFlipVertical(image.$memory);
}

export function imageFlipHorizontal(this: RayLib, image: Image) {
  this.symbols.ImageFlipHorizontal(image.$memory);
}

export function imageRotate(
  this: RayLib,
  options: {
    image: Image;
    degrees: number;
  }
) {
  this.symbols.ImageRotate(options.image.$memory, options.degrees);
}

export function imageRotateCW(this: RayLib, image: Image) {
  this.symbols.ImageRotateCW(image.$memory);
}

export function imageRotateCCW(this: RayLib, image: Image) {
  this.symbols.ImageRotateCCW(image.$memory);
}

export function imageColorTint(
  this: RayLib,
  options: {
    image: Image;
    color: Color;
  }
) {
  this.symbols.ImageColorTint(options.image.$memory, options.color.$memory);
}

export function imageColorInvert(this: RayLib, image: Image) {
  this.symbols.ImageColorInvert(image.$memory);
}

export function imageColorGrayscale(this: RayLib, image: Image) {
  this.symbols.ImageColorGrayscale(image.$memory);
}

export function imageColorContrast(
  this: RayLib,
  options: {
    image: Image;
    contrast: number;
  }
) {
  this.symbols.ImageColorContrast(options.image.$memory, options.contrast);
}

export function imageColorBrightness(
  this: RayLib,
  options: {
    image: Image;
    brightness: number;
  }
) {
  this.symbols.ImageColorBrightness(options.image.$memory, options.brightness);
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
    options.image.$memory,
    options.color.$memory,
    options.replace.$memory
  );
}

// Color data functions

export function loadImageColors(this: RayLib, image: Image) {
  const ptr = this.symbols.LoadImageColors(image.$memory);

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
    options.image.$memory,
    options.maxPaletteSize,
    colorCountOut.$memory
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
    options.image.$memory,
    options.x,
    options.y,
    color.$memory
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
    options.image.$memory,
    options.threshold,
    rect.$memory
  );

  return rect;
}
