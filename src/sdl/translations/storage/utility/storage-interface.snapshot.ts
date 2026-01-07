import { type Library, type Pointer, linkSymbols, ptr, read } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { PathInfo } from '../../file-system/utility/path-info.snapshot';
import { ByteOffset } from './constant';
import { StorageInterfaceDefinition } from './definition';
import type {
  CopyOptions,
  CreateFfiOptions,
  EnumerateDirectoryOptions,
  InfoOptions,
  MkdirOptions,
  RawStorageInterface,
  ReadFileOptionss,
  RemoveOptions,
  RenameOptions,
  WriteFileOptions,
} from './types';

export class StorageInterface implements RawStorageInterface {
  public static readonly BYTE_SIZE = 96;

  public version: number;
  public $ffi: Library<StorageInterfaceDefinition>;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawStorageInterface) {
    this.version = options.version;
    this.$ffi = options.$ffi;

    this.free = options.free;
    this.address = options.address;
  }

  // Automatically close the library for preventing memory leaks
  public [Symbol.dispose]() {
    this.$ffi.close();
  }

  public close(userData?: Pointer | null) {
    return this.$ffi.symbols.close(userData ?? null);
  }

  public ready(userData?: Pointer | null) {
    return this.$ffi.symbols.ready(userData ?? null);
  }

  public enumerate(options: EnumerateDirectoryOptions) {
    return this.$ffi.symbols.enumerate(
      options.userdata ?? null,
      options.path.ptr,
      options.callback.ptr,
      options.callback_userdata ?? null
    );
  }

  public info(options: InfoOptions) {
    const info = PathInfo.allocMemory();
    const success = this.$ffi.symbols.info(
      options.userdata ?? null,
      options.path.ptr,
      info
    );

    if (!success) return null;

    return PathInfo.fromMemory(info);
  }

  /** Passing the length, will by-pass the needs to call info */
  public readFile(options: ReadFileOptionss) {
    const pathPtr = options.path.ptr;
    let length: number | null = options.length ? Number(options.length) : null;

    if (!length) {
      const info = this.info({
        path: options.path,
      });

      if (!info) return null;

      length = Number(info.size);
    }

    const dest = new Uint8Array(length);
    const destPtr = ptr(dest);

    const success = this.$ffi.symbols.read_file(
      options.userdata ?? null,
      pathPtr,
      destPtr,
      length
    );

    return success ? dest : null;
  }

  public writeFile(options: WriteFileOptions) {
    const pathPtr = options.path.ptr;
    const srcPtr = ptr(options.source);
    const length = BigInt(options.source.byteLength);

    const success = this.$ffi.symbols.write_file(
      options.userdata ?? null,
      pathPtr,
      srcPtr,
      length
    );

    return success;
  }

  public mkdir(options: MkdirOptions) {
    const pathPtr = options.path.ptr;

    const success = this.$ffi.symbols.mkdir(options.userdata ?? null, pathPtr);

    return success;
  }

  public remove(options: RemoveOptions) {
    const pathPtr = options.path.ptr;

    const success = this.$ffi.symbols.remove(options.userdata ?? null, pathPtr);

    return success;
  }

  public rename(options: RenameOptions) {
    const oldPathPtr = options.oldPath.ptr;
    const newPathPtr = options.newPath.ptr;

    const success = this.$ffi.symbols.rename(
      options.userdata ?? null,
      oldPathPtr,
      newPathPtr
    );

    return success;
  }

  public copy(options: CopyOptions) {
    const oldPathPtr = options.oldPath.ptr;
    const newPathPtr = options.newPath.ptr;

    const success = this.$ffi.symbols.copy(
      options.userdata ?? null,
      oldPathPtr,
      newPathPtr
    );

    return success;
  }

  public spaceRemaining(userdata?: Pointer | null) {
    return this.$ffi.symbols.space_remaining(userdata ?? null);
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  private static createFfi(options: CreateFfiOptions) {
    const $ffi = linkSymbols({
      close: {
        ...StorageInterfaceDefinition.close,
        ptr: options.closePtr,
      },
      ready: {
        ...StorageInterfaceDefinition.ready,
        ptr: options.readyPtr,
      },
      enumerate: {
        ...StorageInterfaceDefinition.enumerate,
        ptr: options.enumeratePtr,
      },
      info: {
        ...StorageInterfaceDefinition.info,
        ptr: options.infoPtr,
      },
      read_file: {
        ...StorageInterfaceDefinition.read_file,
        ptr: options.read_filePtr,
      },
      write_file: {
        ...StorageInterfaceDefinition.write_file,
        ptr: options.write_filePtr,
      },
      mkdir: {
        ...StorageInterfaceDefinition.mkdir,
        ptr: options.mkdirPtr,
      },
      remove: {
        ...StorageInterfaceDefinition.remove,
        ptr: options.removePtr,
      },
      rename: {
        ...StorageInterfaceDefinition.rename,
        ptr: options.renamePtr,
      },
      copy: {
        ...StorageInterfaceDefinition.copy,
        ptr: options.copyPtr,
      },
      space_remaining: {
        ...StorageInterfaceDefinition.space_remaining,
        ptr: options.spaceRemainingPtr,
      },
    });

    return $ffi;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const version = read.u32(pointer, ByteOffset.version);
    const closePtr = read.ptr(pointer, ByteOffset.close) as Pointer;
    const readyPtr = read.ptr(pointer, ByteOffset.ready) as Pointer;
    const enumeratePtr = read.ptr(pointer, ByteOffset.enumerate) as Pointer;
    const infoPtr = read.ptr(pointer, ByteOffset.info) as Pointer;
    const read_filePtr = read.ptr(pointer, ByteOffset.read_file) as Pointer;
    const write_filePtr = read.ptr(pointer, ByteOffset.write_file) as Pointer;
    const mkdirPtr = read.ptr(pointer, ByteOffset.mkdir) as Pointer;
    const removePtr = read.ptr(pointer, ByteOffset.remove) as Pointer;
    const renamePtr = read.ptr(pointer, ByteOffset.rename) as Pointer;
    const copyPtr = read.ptr(pointer, ByteOffset.copy) as Pointer;
    const spaceRemainingPtr = read.ptr(
      pointer,
      ByteOffset.space_remaining
    ) as Pointer;

    const $ffi = this.createFfi({
      closePtr,
      readyPtr,
      enumeratePtr,
      infoPtr,
      read_filePtr,
      write_filePtr,
      mkdirPtr,
      removePtr,
      renamePtr,
      copyPtr,
      spaceRemainingPtr,
    });

    const result = {
      version: version,
      $ffi,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawStorageInterface;

    return new StorageInterface(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const version = view.getUint32(ByteOffset.version, true);
    const closePtr = view.getBigUint64(
      ByteOffset.close,
      true
    ) as unknown as Pointer;
    const readyPtr = view.getBigUint64(
      ByteOffset.ready,
      true
    ) as unknown as Pointer;
    const enumeratePtr = view.getBigUint64(
      ByteOffset.enumerate,
      true
    ) as unknown as Pointer;
    const infoPtr = view.getBigUint64(
      ByteOffset.info,
      true
    ) as unknown as Pointer;
    const read_filePtr = view.getBigUint64(
      ByteOffset.read_file,
      true
    ) as unknown as Pointer;
    const write_filePtr = view.getBigUint64(
      ByteOffset.write_file,
      true
    ) as unknown as Pointer;
    const mkdirPtr = view.getBigUint64(
      ByteOffset.mkdir,
      true
    ) as unknown as Pointer;
    const removePtr = view.getBigUint64(
      ByteOffset.remove,
      true
    ) as unknown as Pointer;
    const renamePtr = view.getBigUint64(
      ByteOffset.rename,
      true
    ) as unknown as Pointer;
    const copyPtr = view.getBigUint64(
      ByteOffset.copy,
      true
    ) as unknown as Pointer;
    const spaceRemainingPtr = view.getBigUint64(
      ByteOffset.space_remaining,
      true
    ) as unknown as Pointer;

    const $ffi = this.createFfi({
      closePtr,
      readyPtr,
      enumeratePtr,
      infoPtr,
      read_filePtr,
      write_filePtr,
      mkdirPtr,
      removePtr,
      renamePtr,
      copyPtr,
      spaceRemainingPtr,
    });

    const result = {
      version: version,
      $ffi,
      free: null,
      address: null,
    } as RawStorageInterface;

    return new StorageInterface(result);
  }
}
