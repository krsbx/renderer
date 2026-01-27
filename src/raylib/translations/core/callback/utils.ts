import { CStruct } from '@/utility/cstruct';
import {
  CString,
  FFIType,
  JSCallback,
  toArrayBuffer,
  type Pointer,
} from 'bun:ffi';

export class CallbackManager {
  private static $encoder?: TextEncoder;
  private static $registry?: Map<string, JSCallback>;

  private static get encoder() {
    if (this.$encoder) return this.$encoder;

    this.$encoder = new TextEncoder();

    return this.$encoder;
  }

  private static get registry() {
    if (this.$registry) return this.$registry;

    this.$registry = new Map();

    return this.$registry;
  }

  static register(name: string, callback: JSCallback) {
    this.registry.get(name)?.close?.();
    this.registry.set(name, callback);
  }

  static unregister(name: string) {
    this.registry.get(name)?.close?.();
    this.registry.delete(name);
  }

  static createTraceLog(callback: (logLevel: number, text: string) => void) {
    return new JSCallback(
      (logLevel: number, textPtr: Pointer) => {
        const text = textPtr ? new CString(textPtr).toString() : '';
        callback(logLevel, text);
      },
      {
        args: [FFIType.i32, FFIType.ptr, FFIType.ptr],
        returns: FFIType.void,
      }
    );
  }

  static createLoadFileData(callback: (fileName: string) => Uint8Array | null) {
    const bufferRegistry = new Set<Uint8Array>();

    return new JSCallback(
      (fileNamePtr: Pointer, dataSizePtr: Pointer) => {
        const fileName = new CString(fileNamePtr).toString();
        const data = callback(fileName);

        if (dataSizePtr) {
          const sizeStruct = new CStruct({
            address: dataSizePtr,
            length: CStruct.BYTE_SIZE.i32,
          });
          sizeStruct.setValue(0, data?.byteLength ?? 0, 'i32');
        }

        if (!data) return [];

        bufferRegistry.add(data);
        return data;
      },
      {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.ptr,
      }
    );
  }

  static createSaveFileData(
    callback: (fileName: string, data: Uint8Array) => boolean
  ) {
    return new JSCallback(
      (fileNamePtr: Pointer, dataPtr: Pointer, dataSize: number) => {
        const fileName = new CString(fileNamePtr).toString();
        const data = new Uint8Array(toArrayBuffer(dataPtr, 0, dataSize));
        return callback(fileName, data);
      },
      {
        args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
        returns: FFIType.bool,
      }
    );
  }

  static createLoadFileText(callback: (fileName: string) => string | null) {
    const bufferRegistry = new Set<Uint8Array>();

    return new JSCallback(
      (fileNamePtr: Pointer) => {
        const fileName = fileNamePtr ? new CString(fileNamePtr).toString() : '';
        let text = callback(fileName)?.trim?.() ?? '';

        if (!text) return [];

        if (!text.endsWith('\0')) text += '\0';

        const encoded = this.encoder.encode(text);
        bufferRegistry.add(encoded);

        return encoded;
      },
      {
        args: [FFIType.ptr],
        returns: FFIType.ptr,
      }
    );
  }

  static createSaveFileText(
    callback: (fileName: string, text: string) => boolean
  ) {
    return new JSCallback(
      (fileNamePtr: Pointer, textPtr: Pointer) => {
        const fileName = new CString(fileNamePtr).toString();
        const text = new CString(textPtr).toString();
        return callback(fileName, text);
      },
      {
        args: [FFIType.ptr, FFIType.ptr],
        returns: FFIType.bool,
      }
    );
  }
}
