import { FFIType, type FFIFunction } from 'bun:ffi';

export const IOStreamDefinition = {
  // SDL_IOStream * SDL_IOFromFile(const char *file, const char *mode);                         // Use this function to create a new SDL_IOStream structure for reading from and/or writing to a named file.
  SDL_IOFromFile: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.ptr,
  },
  // SDL_IOStream * SDL_IOFromMem(void *mem, size_t size);                                      // Use this function to prepare a read-write memory buffer for use with SDL_IOStream.
  SDL_IOFromMem: {
    args: [FFIType.ptr, FFIType.u64],
    returns: FFIType.ptr,
  },
  // SDL_IOStream * SDL_IOFromConstMem(const void *mem, size_t size);                           // Use this function to prepare a read-only memory buffer for use with SDL_IOStream.
  SDL_IOFromConstMem: {
    args: [FFIType.ptr, FFIType.u64],
    returns: FFIType.ptr,
  },
  // SDL_IOStream * SDL_IOFromDynamicMem(void);                                                 // Use this function to create an SDL_IOStream that is backed by dynamically allocated memory.
  SDL_IOFromDynamicMem: {
    args: [],
    returns: FFIType.ptr,
  },
  // SDL_IOStream * SDL_OpenIO(const SDL_IOStreamInterface *iface, void *userdata);             // Create a custom SDL_IOStream.
  SDL_OpenIO: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_CloseIO(SDL_IOStream *context);                                                   // Close and free an allocated SDL_IOStream structure.
  SDL_CloseIO: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_PropertiesID SDL_GetIOProperties(SDL_IOStream *context);                               // Get the properties associated with an SDL_IOStream.
  SDL_GetIOProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_IOStatus SDL_GetIOStatus(SDL_IOStream *context);                                       // Query the stream status of an SDL_IOStream.
  SDL_GetIOStatus: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // Sint64 SDL_GetIOSize(SDL_IOStream *context);                                               // Use this function to get the size of the data stream in an SDL_IOStream.
  SDL_GetIOSize: {
    args: [FFIType.ptr],
    returns: FFIType.i64,
  },
  // Sint64 SDL_SeekIO(SDL_IOStream *context, Sint64 offset, SDL_IOWhence whence);              // Seek within an SDL_IOStream data stream.
  SDL_SeekIO: {
    args: [FFIType.ptr, FFIType.i64, FFIType.i32],
    returns: FFIType.i64,
  },
  // Sint64 SDL_TellIO(SDL_IOStream *context);                                                  // Determine the current read/write offset in an SDL_IOStream data stream.
  SDL_TellIO: {
    args: [FFIType.ptr],
    returns: FFIType.i64,
  },
  // size_t SDL_ReadIO(SDL_IOStream *context, void *ptr, size_t size);                          // Read from a data source.
  SDL_ReadIO: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // size_t SDL_WriteIO(SDL_IOStream *context, const void *ptr, size_t size);                   // Write to an SDL_IOStream data stream.
  SDL_WriteIO: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // size_t SDL_IOprintf(SDL_IOStream *context, const char *fmt, ... ...);                      // Print to an SDL_IOStream data stream.
  SDL_IOprintf: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.u64,
  },
  // size_t SDL_IOvprintf(SDL_IOStream *context, const char *fmt, va_list ap);                  // Print to an SDL_IOStream data stream.
  SDL_IOvprintf: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
    returns: FFIType.u64,
  },
  // bool SDL_FlushIO(SDL_IOStream *context);                                                   // Flush any buffered data in the stream.
  SDL_FlushIO: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void * SDL_LoadFile_IO(SDL_IOStream *src, size_t *datasize, bool closeio);                 // Load all the data from an SDL data stream.
  SDL_LoadFile_IO: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.bool],
    returns: FFIType.ptr,
  },
  // void * SDL_LoadFile(const char *file, size_t *datasize);                                   // Load all the data from a file path.
  SDL_LoadFile: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SaveFile_IO(SDL_IOStream *src, const void *data, size_t datasize, bool closeio);  // Save all the data into an SDL data stream.
  SDL_SaveFile_IO: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SaveFile(const char *file, const void *data, size_t datasize);                    // Save all the data into a file path.
  SDL_SaveFile: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.u64],
    returns: FFIType.bool,
  },
  // bool SDL_ReadU8(SDL_IOStream *src, Uint8 *value);                                          // Use this function to read a byte from an SDL_IOStream.
  SDL_ReadU8: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadS8(SDL_IOStream *src, Sint8 *value);                                          // Use this function to read a signed byte from an SDL_IOStream.
  SDL_ReadS8: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadU16LE(SDL_IOStream *src, Uint16 *value);                                      // Use this function to read 16 bits of little-endian data from an SDL_IOStream and return in native format.
  SDL_ReadU16LE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadS16LE(SDL_IOStream *src, Sint16 *value);                                      // Use this function to read 16 bits of little-endian data from an SDL_IOStream and return in native format.
  SDL_ReadS16LE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadU16BE(SDL_IOStream *src, Uint16 *value);                                      // Use this function to read 16 bits of big-endian data from an SDL_IOStream and return in native format.
  SDL_ReadU16BE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadS16BE(SDL_IOStream *src, Sint16 *value);                                      // Use this function to read 16 bits of big-endian data from an SDL_IOStream and return in native format.
  SDL_ReadS16BE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadU32LE(SDL_IOStream *src, Uint32 *value);                                      // Use this function to read 32 bits of little-endian data from an SDL_IOStream and return in native format.
  SDL_ReadU32LE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadS32LE(SDL_IOStream *src, Sint32 *value);                                      // Use this function to read 32 bits of little-endian data from an SDL_IOStream and return in native format.
  SDL_ReadS32LE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadU32BE(SDL_IOStream *src, Uint32 *value);                                      // Use this function to read 32 bits of big-endian data from an SDL_IOStream and return in native format.
  SDL_ReadU32BE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadS32BE(SDL_IOStream *src, Sint32 *value);                                      // Use this function to read 32 bits of big-endian data from an SDL_IOStream and return in native format.
  SDL_ReadS32BE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadU64LE(SDL_IOStream *src, Uint64 *value);                                      // Use this function to read 64 bits of little-endian data from an SDL_IOStream and return in native format.
  SDL_ReadU64LE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadS64LE(SDL_IOStream *src, Sint64 *value);                                      // Use this function to read 64 bits of little-endian data from an SDL_IOStream and return in native format.
  SDL_ReadS64LE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadU64BE(SDL_IOStream *src, Uint64 *value);                                      // Use this function to read 64 bits of big-endian data from an SDL_IOStream and return in native format.
  SDL_ReadU64BE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ReadS64BE(SDL_IOStream *src, Sint64 *value);                                      // Use this function to read 64 bits of big-endian data from an SDL_IOStream and return in native format.
  SDL_ReadS64BE: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WriteU8(SDL_IOStream *dst, Uint8 value);                                          // Use this function to write a byte to an SDL_IOStream.
  SDL_WriteU8: {
    args: [FFIType.ptr, FFIType.u8],
    returns: FFIType.bool,
  },
  // bool SDL_WriteS8(SDL_IOStream *dst, Sint8 value);                                          // Use this function to write a signed byte to an SDL_IOStream.
  SDL_WriteS8: {
    args: [FFIType.ptr, FFIType.i8],
    returns: FFIType.bool,
  },
  // bool SDL_WriteU16LE(SDL_IOStream *dst, Uint16 value);                                      // Use this function to write 16 bits in native format to an SDL_IOStream as little-endian data.
  SDL_WriteU16LE: {
    args: [FFIType.ptr, FFIType.u16],
    returns: FFIType.bool,
  },
  // bool SDL_WriteS16LE(SDL_IOStream *dst, Sint16 value);                                      // Use this function to write 16 bits in native format to an SDL_IOStream as little-endian data.
  SDL_WriteS16LE: {
    args: [FFIType.ptr, FFIType.i16],
    returns: FFIType.bool,
  },
  // bool SDL_WriteU16BE(SDL_IOStream *dst, Uint16 value);                                      // Use this function to write 16 bits in native format to an SDL_IOStream as big-endian data.
  SDL_WriteU16BE: {
    args: [FFIType.ptr, FFIType.u16],
    returns: FFIType.bool,
  },
  // bool SDL_WriteS16BE(SDL_IOStream *dst, Sint16 value);                                      // Use this function to write 16 bits in native format to an SDL_IOStream as big-endian data.
  SDL_WriteS16BE: {
    args: [FFIType.ptr, FFIType.i16],
    returns: FFIType.bool,
  },
  // bool SDL_WriteU32LE(SDL_IOStream *dst, Uint32 value);                                      // Use this function to write 32 bits in native format to an SDL_IOStream as little-endian data.
  SDL_WriteU32LE: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_WriteS32LE(SDL_IOStream *dst, Sint32 value);                                      // Use this function to write 32 bits in native format to an SDL_IOStream as little-endian data.
  SDL_WriteS32LE: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_WriteU32BE(SDL_IOStream *dst, Uint32 value);                                      // Use this function to write 32 bits in native format to an SDL_IOStream as big-endian data.
  SDL_WriteU32BE: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_WriteS32BE(SDL_IOStream *dst, Sint32 value);                                      // Use this function to write 32 bits in native format to an SDL_IOStream as big-endian data.
  SDL_WriteS32BE: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_WriteU64LE(SDL_IOStream *dst, Uint64 value);                                      // Use this function to write 64 bits in native format to an SDL_IOStream as little-endian data.
  SDL_WriteU64LE: {
    args: [FFIType.ptr, FFIType.u64],
    returns: FFIType.bool,
  },
  // bool SDL_WriteS64LE(SDL_IOStream *dst, Sint64 value);                                      // Use this function to write 64 bits in native format to an SDL_IOStream as little-endian data.
  SDL_WriteS64LE: {
    args: [FFIType.ptr, FFIType.i64],
    returns: FFIType.bool,
  },
  // bool SDL_WriteU64BE(SDL_IOStream *dst, Uint64 value);                                      // Use this function to write 64 bits in native format to an SDL_IOStream as big-endian data.
  SDL_WriteU64BE: {
    args: [FFIType.ptr, FFIType.u64],
    returns: FFIType.bool,
  },
  // bool SDL_WriteS64BE(SDL_IOStream *dst, Sint64 value);                                      // Use this function to write 64 bits in native format to an SDL_IOStream as big-endian data.
  SDL_WriteS64BE: {
    args: [FFIType.ptr, FFIType.i64],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
