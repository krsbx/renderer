import type { RayLib } from '@/raylib';
import { CStruct } from '@cstruct';
import { stringToCString } from '@/utility/common';
import type { Pointer } from 'bun:ffi';
import { Color, Font, GlyphInfo, Image, Rectangle } from '../struct';

export function getFontDefault(this: RayLib) {
  const font = Font.create();

  this.symbols.GetFontDefault(font.$address);

  return font;
}

export function loadFont(this: RayLib, fileName: string) {
  const font = Font.create();

  this.symbols.LoadFont(stringToCString(fileName).ptr, font.$address);

  return font;
}

export function loadFontEx(
  this: RayLib,
  options: {
    fileName: string;
    fontSize: number;
    codepoints?: Int32Array | null;
  }
) {
  const font = Font.create();
  const codepointCount = options.codepoints?.length ?? 0;

  this.symbols.LoadFontEx(
    stringToCString(options.fileName).ptr,
    options.fontSize,
    options.codepoints ?? null,
    codepointCount,
    font.$address
  );

  return font;
}

export function loadFontFromImage(
  this: RayLib,
  options: {
    image: Image;
    key: Color;
    firstChar: number;
  }
) {
  const font = Font.create();

  this.symbols.LoadFontFromImage(
    options.image.$address,
    options.key.$address,
    options.firstChar,
    font.$address
  );

  return font;
}

export function loadFontFromMemory(
  this: RayLib,
  options: {
    fileType: string;
    fileData: Uint8Array;
    fontSize: number;
    codepoints?: Int32Array | null;
  }
) {
  const font = Font.create();
  const codepointCount = options.codepoints?.length ?? 0;

  this.symbols.LoadFontFromMemory(
    stringToCString(options.fileType).ptr,
    options.fileData,
    options.fileData.length,
    options.fontSize,
    options.codepoints ?? null,
    codepointCount,
    font.$address
  );

  return font;
}

export function isFontValid(this: RayLib, font: Font) {
  return this.symbols.IsFontValid(font.$address);
}

export function loadFontData(
  this: RayLib,
  options: {
    fileData: Uint8Array;
    fontSize: number;
    codepoints?: Int32Array | null;
    type: number;
  }
) {
  const codepointCount = options.codepoints?.length ?? 0;

  const glyphsPtr = this.symbols.LoadFontData(
    options.fileData,
    options.fileData.length,
    options.fontSize,
    options.codepoints ?? null,
    codepointCount,
    options.type
  );

  if (!glyphsPtr) return null;

  return {
    glyphs: CStruct.readArray(GlyphInfo, glyphsPtr, codepointCount),
    ptr: glyphsPtr,
    count: codepointCount,
  };
}

export function genImageFontAtlas(
  this: RayLib,
  options: {
    glyphs: GlyphInfo[];
    fontSize: number;
    padding: number;
    packMethod: number;
  }
) {
  const image = Image.create();
  const glyphCount = options.glyphs.length;

  const { address: glyphsAddr, buffer: glyphsBuffer } = CStruct.writeArray(
    options.glyphs,
    GlyphInfo.BYTE_SIZE
  );

  const glyphRecsOut = new CStruct({ length: CStruct.BYTE_SIZE.ptr });

  this.symbols.GenImageFontAtlas(
    glyphsAddr,
    glyphRecsOut.$address,
    glyphCount,
    options.fontSize,
    options.padding,
    options.packMethod,
    image.$address
  );

  const glyphRecsPtr = glyphRecsOut.getValue(0, 'ptr');
  const recs = glyphRecsPtr
    ? CStruct.readArray(Rectangle, glyphRecsPtr, glyphCount)
    : [];

  // Keep reference to prevent GC
  void glyphsBuffer;

  return {
    image,
    recs,
    recsPtr: glyphRecsPtr,
  };
}

export function unloadFontData(
  this: RayLib,
  options: {
    glyphs: Pointer;
    glyphCount: number;
  }
) {
  this.symbols.UnloadFontData(options.glyphs, options.glyphCount);
}

export function unloadFont(this: RayLib, font: Font) {
  this.symbols.UnloadFont(font.$address);
}

export function exportFontAsCode(
  this: RayLib,
  options: {
    font: Font;
    fileName: string;
  }
) {
  return this.symbols.ExportFontAsCode(
    options.font.$address,
    stringToCString(options.fileName).ptr
  );
}
