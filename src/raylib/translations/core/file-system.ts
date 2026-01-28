import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { FilePathList } from '../struct';

export function fileExists(this: RayLib, fileName: string) {
  return this.symbols.FileExists(stringToCString(fileName).ptr);
}

export function directoryExists(this: RayLib, dirPath: string) {
  return this.symbols.DirectoryExists(stringToCString(dirPath).ptr);
}

export function isFileExtension(this: RayLib, fileName: string, ext: string) {
  return this.symbols.IsFileExtension(
    stringToCString(fileName).ptr,
    stringToCString(ext).ptr
  );
}

export function getFileLength(this: RayLib, fileName: string) {
  return this.symbols.GetFileLength(stringToCString(fileName).ptr);
}

export function getFileExtension(this: RayLib, fileName: string) {
  return this.symbols
    .GetFileExtension(stringToCString(fileName).ptr)
    .toString();
}

export function getFileName(this: RayLib, filePath: string) {
  return this.symbols.GetFileName(stringToCString(filePath).ptr).toString();
}

export function getFileNameWithoutExt(this: RayLib, filePath: string) {
  return this.symbols
    .GetFileNameWithoutExt(stringToCString(filePath).ptr)
    .toString();
}

export function getDirectoryPath(this: RayLib, filePath: string) {
  return this.symbols
    .GetDirectoryPath(stringToCString(filePath).ptr)
    .toString();
}

export function getPrevDirectoryPath(this: RayLib, filePath: string) {
  return this.symbols
    .GetPrevDirectoryPath(stringToCString(filePath).ptr)
    .toString();
}

export function getWorkingDirectory(this: RayLib) {
  return this.symbols.GetWorkingDirectory().toString();
}

export function getApplicationDirectory(this: RayLib) {
  return this.symbols.GetApplicationDirectory().toString();
}

export function makeDirectory(this: RayLib, dirPath: string) {
  return this.symbols.MakeDirectory(stringToCString(dirPath).ptr);
}

export function changeDirectory(this: RayLib, dir: string) {
  return this.symbols.ChangeDirectory(stringToCString(dir).ptr);
}

export function isPathFile(this: RayLib, path: string) {
  return this.symbols.IsPathFile(stringToCString(path).ptr);
}

export function isFileNameValid(this: RayLib, fileName: string) {
  return this.symbols.IsFileNameValid(stringToCString(fileName).ptr);
}

export function loadDirectoryFiles(this: RayLib, dirPath: string) {
  const lilst = FilePathList.create();

  this.symbols.LoadDirectoryFiles(stringToCString(dirPath).ptr, lilst.$address);

  return lilst;
}

export function loadDirectoryFilesEx(
  this: RayLib,
  options: {
    dirPath: string;
    filter: string;
    recursive: boolean;
  }
) {
  const lilst = FilePathList.create();

  this.symbols.LoadDirectoryFilesEx(
    stringToCString(options.dirPath).ptr,
    stringToCString(options.filter).ptr,
    options.recursive,
    lilst.$address
  );

  return lilst;
}

export function unloadDirectoryFiles(this: RayLib, list: FilePathList) {
  this.symbols.UnloadDirectoryFiles(list.$address);
}

export function isFileDropped(this: RayLib) {
  return this.symbols.IsFileDropped();
}

export function loadDroppedFiles(this: RayLib) {
  const list = FilePathList.create();

  this.symbols.LoadDroppedFiles(list.$address);

  return list;
}

export function unloadDroppedFiles(this: RayLib, list: FilePathList) {
  this.symbols.UnloadDroppedFiles(list.$address);
}

export function getFileModTime(this: RayLib, fileName: string) {
  return this.symbols.GetFileModTime(stringToCString(fileName).ptr);
}
