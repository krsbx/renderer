import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';

export function loadFileData(this: RayLib, fileName: string) {
  const dataSize = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const data = this.symbols.LoadFileData(
    stringToCString(fileName).ptr,
    dataSize.$memory
  );

  return {
    data,
    dataSize: dataSize.getValue(0, 'i32'),
  };
}

export function unloadFileData(this: RayLib, data: Pointer) {
  this.symbols.UnloadFileData(data);
}

export function saveFileData(
  this: RayLib,
  options: {
    fileName: string;
    data: Pointer;
    dataSize: number;
  }
) {
  return this.symbols.SaveFileData(
    stringToCString(options.fileName).ptr,
    options.data,
    options.dataSize
  );
}

export function exportDataAsCode(
  this: RayLib,
  options: {
    data: Pointer;
    dataSize: number;
    fileName: string;
  }
) {
  return this.symbols.ExportDataAsCode(
    options.data,
    options.dataSize,
    stringToCString(options.fileName).ptr
  );
}

export function loadFileText(this: RayLib, fileName: string) {
  return this.symbols.LoadFileText(stringToCString(fileName).ptr).toString();
}

export function unloadFileText(this: RayLib, text: string) {
  this.symbols.UnloadFileText(stringToCString(text).ptr);
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
