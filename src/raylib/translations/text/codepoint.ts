import type { RayLib } from '@/raylib';
import { CStruct } from '@cstruct';
import { stringToCString } from '@/utility/common';
import { CString, type Pointer } from 'bun:ffi';

export function loadUTF8(this: RayLib, codepoints: Int32Array) {
  const ptr = this.symbols.LoadUTF8(codepoints, codepoints.length);

  if (!ptr) return null;

  return {
    ptr,
    text: new CString(ptr).toString(),
  };
}

export function unloadUTF8(this: RayLib, text: Pointer) {
  this.symbols.UnloadUTF8(text);
}

export function loadCodepoints(this: RayLib, text: string) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const ptr = this.symbols.LoadCodepoints(
    stringToCString(text).ptr,
    countStruct.$address
  );

  if (!ptr) return null;

  const count = countStruct.getValue(0, 'i32');
  const codepoints = CStruct.readArrayPrimitive(ptr, count, 'i32');

  return {
    ptr,
    codepoints: new Int32Array(codepoints),
    count,
  };
}

export function unloadCodepoints(this: RayLib, codepoints: Pointer) {
  this.symbols.UnloadCodepoints(codepoints);
}

export function getCodepointCount(this: RayLib, text: string) {
  return this.symbols.GetCodepointCount(stringToCString(text).ptr);
}

export function getCodepoint(this: RayLib, text: string) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const codepoint = this.symbols.GetCodepoint(
    stringToCString(text).ptr,
    sizeStruct.$address
  );

  return {
    codepoint,
    codepointSize: sizeStruct.getValue(0, 'i32'),
  };
}

export function getCodepointNext(this: RayLib, text: string) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const codepoint = this.symbols.GetCodepointNext(
    stringToCString(text).ptr,
    sizeStruct.$address
  );

  return {
    codepoint,
    codepointSize: sizeStruct.getValue(0, 'i32'),
  };
}

export function getCodepointPrevious(this: RayLib, text: string) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const codepoint = this.symbols.GetCodepointPrevious(
    stringToCString(text).ptr,
    sizeStruct.$address
  );

  return {
    codepoint,
    codepointSize: sizeStruct.getValue(0, 'i32'),
  };
}

export function codepointToUTF8(this: RayLib, codepoint: number) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const result = this.symbols.CodepointToUTF8(codepoint, sizeStruct.$address);

  return {
    text: result?.toString() ?? null,
    utf8Size: sizeStruct.getValue(0, 'i32'),
  };
}
