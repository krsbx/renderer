import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { toArrayBuffer } from 'bun:ffi';
import { Image, Texture2D } from '../struct';

export function loadImage(this: RayLib, fileName: string) {
  const image = new Image(Image.allocMemory());

  this.symbols.LoadImage(stringToCString(fileName).ptr, image.$address);

  return image;
}

export function loadImageRaw(
  this: RayLib,
  options: {
    fileName: string;
    width: number;
    height: number;
    format: number;
    headerSize: number;
  }
) {
  const image = new Image(Image.allocMemory());

  this.symbols.LoadImageRaw(
    stringToCString(options.fileName).ptr,
    options.width,
    options.height,
    options.format,
    options.headerSize,
    image.$address
  );

  return image;
}

export function loadImageAnim(this: RayLib, fileName: string) {
  const image = new Image(Image.allocMemory());
  const framesOut = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  this.symbols.LoadImageAnim(
    stringToCString(fileName).ptr,
    framesOut.$address,
    image.$address
  );

  return {
    image,
    frames: framesOut.getValue(0, 'i32'),
  };
}

export function loadImageAnimFromMemory(
  this: RayLib,
  options: {
    fileType: string;
    fileData: Uint8Array;
  }
) {
  const image = new Image(Image.allocMemory());
  const framesOut = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  this.symbols.LoadImageAnimFromMemory(
    stringToCString(options.fileType).ptr,
    options.fileData,
    options.fileData.length,
    framesOut.$address,
    image.$address
  );

  return {
    image,
    frames: framesOut.getValue(0, 'i32'),
  };
}

export function loadImageFromMemory(
  this: RayLib,
  options: {
    fileType: string;
    fileData: Uint8Array;
  }
) {
  const image = new Image(Image.allocMemory());

  this.symbols.LoadImageFromMemory(
    stringToCString(options.fileType).ptr,
    options.fileData,
    options.fileData.length,
    image.$address
  );

  return image;
}

export function loadImageFromTexture(this: RayLib, texture: Texture2D) {
  const image = new Image(Image.allocMemory());

  this.symbols.LoadImageFromTexture(texture.$address, image.$address);

  return image;
}

export function loadImageFromScreen(this: RayLib) {
  const image = new Image(Image.allocMemory());

  this.symbols.LoadImageFromScreen(image.$address);

  return image;
}

export function isImageValid(this: RayLib, image: Image) {
  return this.symbols.IsImageValid(image.$address);
}

export function unloadImage(this: RayLib, image: Image) {
  this.symbols.UnloadImage(image.$address);
}

export function exportImage(
  this: RayLib,
  options: {
    image: Image;
    fileName: string;
  }
) {
  return this.symbols.ExportImage(
    options.image.$address,
    stringToCString(options.fileName).ptr
  );
}

export function exportImageToMemory(
  this: RayLib,
  options: {
    image: Image;
    fileType: string;
  }
) {
  const fileSizeOut = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const ptr = this.symbols.ExportImageToMemory(
    options.image.$address,
    stringToCString(options.fileType).ptr,
    fileSizeOut.$address
  );

  const fileSize = fileSizeOut.getValue(0, 'i32');

  if (!ptr || fileSize === 0) {
    return null;
  }

  return new Uint8Array(toArrayBuffer(ptr, 0, fileSize));
}

export function exportImageAsCode(
  this: RayLib,
  options: {
    image: Image;
    fileName: string;
  }
) {
  return this.symbols.ExportImageAsCode(
    options.image.$address,
    stringToCString(options.fileName).ptr
  );
}
