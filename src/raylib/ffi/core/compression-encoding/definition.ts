import { FFIType, type FFIFunction } from 'bun:ffi';

export const CompressionEncodingDefinition = {
  // unsigned char *CompressData(const unsigned char *data, int dataSize, int *compDataSize);
  CompressData: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // unsigned char *DecompressData(const unsigned char *compData, int compDataSize, int *dataSize);
  DecompressData: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char *EncodeDataBase64(const unsigned char *data, int dataSize, int *outputSize);
  EncodeDataBase64: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.cstring,
  },
  // unsigned char *DecodeDataBase64(const unsigned char *data, int *outputSize);
  DecodeDataBase64: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // unsigned int ComputeCRC32(unsigned char *data, int dataSize);
  ComputeCRC32: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.u32,
  },
  // unsigned int *ComputeMD5(unsigned char *data, int dataSize);
  ComputeMD5: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // unsigned int *ComputeSHA1(unsigned char *data, int dataSize);
  ComputeSHA1: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
