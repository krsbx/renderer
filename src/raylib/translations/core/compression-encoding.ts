import type { RayLib } from '@/raylib';
import { CStruct } from '@/utility/cstruct';
import { toArrayBuffer } from 'bun:ffi';

const encoder = new TextEncoder();

function toBytes(data: Uint8Array | string): Uint8Array {
  return typeof data === 'string' ? encoder.encode(data) : data;
}

export function compressData(this: RayLib, data: Uint8Array | string) {
  const bytes = toBytes(data);
  const outputSizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const compressedPtr = this.symbols.CompressData(
    bytes,
    bytes.byteLength,
    outputSizeStruct.$memory
  );

  if (!compressedPtr) return null;

  const compressedSize = outputSizeStruct.getValue(0, 'i32');
  const compressedBuffer = toArrayBuffer(compressedPtr, 0, compressedSize);

  return {
    ptr: compressedPtr,
    data: new Uint8Array(compressedBuffer),
  };
}

export function decompressData(this: RayLib, data: Uint8Array) {
  const outputSizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const decompressedPtr = this.symbols.DecompressData(
    data,
    data.byteLength,
    outputSizeStruct.$memory
  );

  if (!decompressedPtr) return null;

  const decompressedSize = outputSizeStruct.getValue(0, 'i32');
  const decompressedBuffer = toArrayBuffer(
    decompressedPtr,
    0,
    decompressedSize
  );

  return {
    ptr: decompressedPtr,
    data: new Uint8Array(decompressedBuffer),
  };
}

export function encodeDataBase64(this: RayLib, data: Uint8Array | string) {
  const bytes = toBytes(data);
  const outputSizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const encoded = this.symbols.EncodeDataBase64(
    bytes,
    bytes.byteLength,
    outputSizeStruct.$memory
  );

  if (!encoded) return null;

  return encoded.toString();
}

export function decodeDataBase64(this: RayLib, data: string) {
  const bytes = encoder.encode(data);
  const outputSizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const decodedPtr = this.symbols.DecodeDataBase64(
    bytes,
    outputSizeStruct.$memory
  );

  if (!decodedPtr) return null;

  const decodedSize = outputSizeStruct.getValue(0, 'i32');
  const decodedBuffer = toArrayBuffer(decodedPtr, 0, decodedSize);

  return {
    ptr: decodedPtr,
    data: new Uint8Array(decodedBuffer),
  };
}

export function computeCRC32(this: RayLib, data: Uint8Array | string) {
  const bytes = toBytes(data);

  return this.symbols.ComputeCRC32(bytes, bytes.byteLength);
}

export function computeMD5(this: RayLib, data: Uint8Array | string) {
  const bytes = toBytes(data);
  const hashPtr = this.symbols.ComputeMD5(bytes, bytes.byteLength);

  if (!hashPtr) return null;

  // MD5 returns 4 unsigned ints (128 bits = 16 bytes)
  const hashBuffer = toArrayBuffer(hashPtr, 0, 16);

  return {
    ptr: hashPtr,
    hash: new Uint32Array(hashBuffer),
  };
}

export function computeSHA1(this: RayLib, data: Uint8Array | string) {
  const bytes = toBytes(data);
  const hashPtr = this.symbols.ComputeSHA1(bytes, bytes.byteLength);

  if (!hashPtr) return null;

  // SHA1 returns 5 unsigned ints (160 bits = 20 bytes)
  const hashBuffer = toArrayBuffer(hashPtr, 0, 20);

  return {
    ptr: hashPtr,
    hash: new Uint32Array(hashBuffer),
  };
}
