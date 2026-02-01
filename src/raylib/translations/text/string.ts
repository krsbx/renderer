import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@cstruct';
import { CString, type Pointer } from 'bun:ffi';

export function textCopy(
  this: RayLib,
  options: {
    dst: Pointer;
    src: string;
  }
) {
  return this.symbols.TextCopy(options.dst, stringToCString(options.src).ptr);
}

export function textIsEqual(
  this: RayLib,
  options: {
    text1: string;
    text2: string;
  }
) {
  return this.symbols.TextIsEqual(
    stringToCString(options.text1).ptr,
    stringToCString(options.text2).ptr
  );
}

export function textLength(this: RayLib, text: string) {
  return this.symbols.TextLength(stringToCString(text).ptr);
}

export function textSubtext(
  this: RayLib,
  options: {
    text: string;
    position: number;
    length: number;
  }
) {
  const result = this.symbols.TextSubtext(
    stringToCString(options.text).ptr,
    options.position,
    options.length
  );

  return result?.toString() ?? null;
}

export function textReplace(
  this: RayLib,
  options: {
    text: string;
    replace: string;
    by: string;
  }
) {
  const result = this.symbols.TextReplace(
    stringToCString(options.text).ptr,
    stringToCString(options.replace).ptr,
    stringToCString(options.by).ptr
  );

  if (!result) return null;

  return new CString(result).toString();
}

export function textInsert(
  this: RayLib,
  options: {
    text: string;
    insert: string;
    position: number;
  }
) {
  const result = this.symbols.TextInsert(
    stringToCString(options.text).ptr,
    stringToCString(options.insert).ptr,
    options.position
  );

  if (!result) return null;

  return new CString(result).toString();
}

export function textJoin(
  this: RayLib,
  options: {
    textList: string[];
    delimiter: string;
  }
) {
  if (options.textList.length === 0) return '';

  const { address } = CStruct.writeArrayString(options.textList);

  const result = this.symbols.TextJoin(
    address,
    options.textList.length,
    stringToCString(options.delimiter).ptr
  );

  return result?.toString() ?? '';
}

export function textSplit(
  this: RayLib,
  options: {
    text: string;
    delimiter: string;
  }
) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const delimiterCode = options.delimiter.charCodeAt(0);

  const listPtr = this.symbols.TextSplit(
    stringToCString(options.text).ptr,
    delimiterCode,
    countStruct.$memory
  );

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');

  return CStruct.readArrayString(listPtr, count);
}

export function textAppend(
  this: RayLib,
  options: {
    text: Pointer;
    append: string;
    position: Pointer;
  }
) {
  this.symbols.TextAppend(
    options.text,
    stringToCString(options.append).ptr,
    options.position
  );
}

export function textFindIndex(
  this: RayLib,
  options: {
    text: string;
    find: string;
  }
) {
  return this.symbols.TextFindIndex(
    stringToCString(options.text).ptr,
    stringToCString(options.find).ptr
  );
}

export function textToUpper(this: RayLib, text: string) {
  const result = this.symbols.TextToUpper(stringToCString(text).ptr);

  return result?.toString() ?? null;
}

export function textToLower(this: RayLib, text: string) {
  const result = this.symbols.TextToLower(stringToCString(text).ptr);

  return result?.toString() ?? null;
}

export function textToPascal(this: RayLib, text: string) {
  const result = this.symbols.TextToPascal(stringToCString(text).ptr);

  return result?.toString() ?? null;
}

export function textToSnake(this: RayLib, text: string) {
  const result = this.symbols.TextToSnake(stringToCString(text).ptr);

  return result?.toString() ?? null;
}

export function textToCamel(this: RayLib, text: string) {
  const result = this.symbols.TextToCamel(stringToCString(text).ptr);

  return result?.toString() ?? null;
}

export function textToInteger(this: RayLib, text: string) {
  return this.symbols.TextToInteger(stringToCString(text).ptr);
}

export function textToFloat(this: RayLib, text: string) {
  return this.symbols.TextToFloat(stringToCString(text).ptr);
}
