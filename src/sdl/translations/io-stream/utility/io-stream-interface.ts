import { linkSymbols, ptr, read, type Library, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { IOStatus } from '../../../ffi/io-stream/constant';
import { IOStreamInterfaceDefinition } from './definition';
import type {
  CreateFfiOptions,
  RawIOStreamInterface,
  ReadOptions,
  SeekOptions,
  WriteOptions,
} from './types';

export class IOStreamInterface implements RawIOStreamInterface {
  public version: number;
  public $ffi: Library<IOStreamInterfaceDefinition>;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawIOStreamInterface) {
    this.version = options.version;
    this.$ffi = options.$ffi;
    this.free = options.free;
    this.address = options.address;
  }

  public [Symbol.dispose]() {
    this.$ffi.close();
  }

  public size(userData?: Pointer | null) {
    return this.$ffi.symbols.size(userData ?? null);
  }

  public seek(options: SeekOptions) {
    return this.$ffi.symbols.seek(
      options.userData ?? null,
      options.offset,
      options.whence
    );
  }

  public read(options: ReadOptions) {
    const statusBuf = new Uint32Array(1);

    const result = this.$ffi.symbols.read(
      options.userData ?? null,
      options.ptr,
      BigInt(options.size),
      ptr(statusBuf)
    );

    return {
      result,
      status: statusBuf[0] as IOStatus,
    };
  }

  public write(options: WriteOptions) {
    const statusBuf = new Uint32Array(1);

    const result = this.$ffi.symbols.write(
      options.userData ?? null,
      options.ptr,
      BigInt(options.size),
      ptr(statusBuf)
    );

    return {
      result,
      status: statusBuf[0] as IOStatus,
    };
  }

  public flush(userData?: Pointer | null) {
    const statusBuf = new Uint32Array(1);

    const result = this.$ffi.symbols.flush(userData ?? null, ptr(statusBuf));

    return {
      result: Boolean(result),
      status: statusBuf[0] as IOStatus,
    };
  }

  public close(userData?: Pointer | null) {
    return this.$ffi.symbols.close(userData ?? null);
  }

  public static allocMemory() {
    const buffer = new Uint8Array(56);

    return buffer;
  }

  private static createFfi(options: CreateFfiOptions) {
    const $ffi = linkSymbols({
      size: {
        ...IOStreamInterfaceDefinition.size,
        ptr: options.sizePtr,
      },
      seek: {
        ...IOStreamInterfaceDefinition.seek,
        ptr: options.seekPtr,
      },
      read: {
        ...IOStreamInterfaceDefinition.read,
        ptr: options.readPtr,
      },
      write: {
        ...IOStreamInterfaceDefinition.write,
        ptr: options.writePtr,
      },
      flush: {
        ...IOStreamInterfaceDefinition.flush,
        ptr: options.flushPtr,
      },
      close: {
        ...IOStreamInterfaceDefinition.close,
        ptr: options.closePtr,
      },
    });

    return $ffi;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const version = read.u32(pointer, 0);
    const sizePtr = read.ptr(pointer, 8) as Pointer;
    const seekPtr = read.ptr(pointer, 16) as Pointer;
    const readPtr = read.ptr(pointer, 24) as Pointer;
    const writePtr = read.ptr(pointer, 32) as Pointer;
    const flushPtr = read.ptr(pointer, 40) as Pointer;
    const closePtr = read.ptr(pointer, 48) as Pointer;

    const $ffi = this.createFfi({
      sizePtr,
      seekPtr,
      readPtr,
      writePtr,
      flushPtr,
      closePtr,
    });

    const result = {
      version: version,
      $ffi: $ffi,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawIOStreamInterface;

    return new IOStreamInterface(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const version = view.getUint32(0, true);
    const sizePtr = view.getBigUint64(8, true) as unknown as Pointer;
    const seekPtr = view.getBigUint64(16, true) as unknown as Pointer;
    const readPtr = view.getBigUint64(24, true) as unknown as Pointer;
    const writePtr = view.getBigUint64(32, true) as unknown as Pointer;
    const flushPtr = view.getBigUint64(40, true) as unknown as Pointer;
    const closePtr = view.getBigUint64(48, true) as unknown as Pointer;

    const $ffi = this.createFfi({
      sizePtr,
      seekPtr,
      readPtr,
      writePtr,
      flushPtr,
      closePtr,
    });

    const result = {
      version: version,
      $ffi: $ffi,
      free: null,
      address: null,
    } as RawIOStreamInterface;

    return new IOStreamInterface(result);
  }
}
