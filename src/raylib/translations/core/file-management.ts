import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';

export function loadFileData(this: RayLib, fileName: string) {
  const dataSizeOut = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const dataPtr = this.symbols.LoadFileData(
    stringToCString(fileName).ptr,
    dataSizeOut.$memory
  );

  if (!dataPtr) return null;

  const dataSize = dataSizeOut.getValue(0, 'i32');

  const data = new CStruct({
    address: dataPtr,
    length: dataSize,
  }).clone().$memory;

  this.symbols.UnloadFileData(dataPtr);

  return data;
}

export function unloadFileData(this: RayLib, data: Pointer) {
  this.symbols.UnloadFileData(data);
}

export function saveFileData(
  this: RayLib,
  options: {
    fileName: string;
    data: Uint8Array;
  }
) {
  return this.symbols.SaveFileData(
    stringToCString(options.fileName).ptr,
    options.data,
    options.data.byteLength
  );
}

export function exportDataAsCode(
  this: RayLib,
  options: {
    data: Uint8Array;
    fileName: string;
  }
) {
  return this.symbols.ExportDataAsCode(
    options.data,
    options.data.byteLength,
    stringToCString(options.fileName).ptr
  );
}

export function loadFileText(this: RayLib, fileName: string) {
  const textPtr = this.symbols.LoadFileText(stringToCString(fileName).ptr);

  if (!textPtr) return null;

  const text = textPtr.toString();

  this.symbols.UnloadFileText(textPtr);

  return text;
}

export function unloadFileText(this: RayLib, text: Pointer) {
  this.symbols.UnloadFileText(text);
}

export function saveFileText(
  this: RayLib,
  options: {
    fileName: string;
    text: string;
  }
) {
  return this.symbols.SaveFileText(
    stringToCString(options.fileName).ptr,
    stringToCString(options.text).ptr
  );
}
