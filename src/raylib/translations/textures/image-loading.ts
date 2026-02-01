import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { Image, Texture2D } from '../struct';

export function loadImage(this: RayLib, fileName: string) {
  const image = Image.create();

  this.symbols.LoadImage(stringToCString(fileName).ptr, image.$memory);

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
  const image = Image.create();

  this.symbols.LoadImageRaw(
    stringToCString(options.fileName).ptr,
    options.width,
    options.height,
    options.format,
    options.headerSize,
    image.$memory
  );

  return image;
}

export function loadImageAnim(this: RayLib, fileName: string) {
  const image = Image.create();
  const framesOut = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  this.symbols.LoadImageAnim(
    stringToCString(fileName).ptr,
    framesOut.$memory,
    image.$memory
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
  const image = Image.create();
  const framesOut = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  this.symbols.LoadImageAnimFromMemory(
    stringToCString(options.fileType).ptr,
    options.fileData,
    options.fileData.byteLength,
    framesOut.$memory,
    image.$memory
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
  const image = Image.create();

  this.symbols.LoadImageFromMemory(
    stringToCString(options.fileType).ptr,
    options.fileData,
    options.fileData.byteLength,
    image.$memory
  );

  return image;
}

export function loadImageFromTexture(this: RayLib, texture: Texture2D) {
  const image = Image.create();

  this.symbols.LoadImageFromTexture(texture.$memory, image.$memory);

  return image;
}

export function loadImageFromScreen(this: RayLib) {
  const image = Image.create();

  this.symbols.LoadImageFromScreen(image.$memory);

  return image;
}

export function isImageValid(this: RayLib, image: Image) {
  return this.symbols.IsImageValid(image.$memory);
}

export function unloadImage(this: RayLib, image: Image) {
  this.symbols.UnloadImage(image.$memory);
}

export function exportImage(
  this: RayLib,
  options: {
    image: Image;
    fileName: string;
  }
) {
  return this.symbols.ExportImage(
    options.image.$memory,
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
    options.image.$memory,
    stringToCString(options.fileType).ptr,
    fileSizeOut.$memory
  );

  const fileSize = fileSizeOut.getValue(0, 'i32');

  if (!ptr || fileSize === 0) {
    return null;
  }

  const data = new CStruct({
    address: ptr,
    length: fileSize,
  }).clone().$memory;

  this.symbols.UnloadFileData(ptr);

  return data;
}

export function exportImageAsCode(
  this: RayLib,
  options: {
    image: Image;
    fileName: string;
  }
) {
  return this.symbols.ExportImageAsCode(
    options.image.$memory,
    stringToCString(options.fileName).ptr
  );
}
