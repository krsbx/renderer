import {
  linkSymbols,
  ptr,
  toArrayBuffer,
  type FFIFunction,
  type Library,
  type Pointer,
} from 'bun:ffi';
import { PathInfo } from '../../file-system/utility/path-info';
import { ByteOffset } from './constant';
import { StorageInterfaceDefinition } from './definition';
import type {
  CopyOptions,
  EnumerateDirectoryOptions,
  InfoOptions,
  MkdirOptions,
  ReadFileOptionss,
  RemoveOptions,
  RenameOptions,
  WriteFileOptions,
} from './types';

export class StorageInterface {
  public static readonly BYTE_SIZE = 96;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;
  private $lib: Library<never> | null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, StorageInterface.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
    this.$lib = null;
  }

  public [Symbol.dispose]() {
    this.$lib?.close?.();
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get version() {
    return this.$view.getUint32(ByteOffset.version, true);
  }

  private invoke<T>(offset: number, definition: FFIFunction, args: unknown[]) {
    const ptr = this.$view.getBigUint64(
      offset,
      true
    ) as unknown as Pointer | null;

    if (!ptr || ptr === (0n as unknown as Pointer)) {
      throw new Error(
        `IOStreamInterface: Attempted to call null function pointer at offset ${offset}`
      );
    }

    const lib = linkSymbols({
      fn: {
        ...definition,
        ptr,
      },
    });

    const result = lib.symbols.fn(...(args as never));

    // Close immediately
    lib.close();

    return result as T;
  }

  public close(userData?: Pointer | null) {
    const success = this.invoke<boolean>(
      ByteOffset.close,
      StorageInterfaceDefinition.close,
      [userData ?? null]
    );

    return success;
  }

  public ready(userData?: Pointer | null) {
    const success = this.invoke<boolean>(
      ByteOffset.ready,
      StorageInterfaceDefinition.ready,
      [userData ?? null]
    );

    return success;
  }

  public enumerate(options: EnumerateDirectoryOptions) {
    const success = this.invoke<boolean>(
      ByteOffset.enumerate,
      StorageInterfaceDefinition.enumerate,
      [
        options.userdata ?? null,
        options.path.ptr,
        options.callback.ptr,
        options.callback_userdata ?? null,
      ]
    );

    return success;
  }

  public info(options: InfoOptions) {
    const infoMemory = PathInfo.allocMemory();

    const success = this.invoke<boolean>(
      ByteOffset.info,
      StorageInterfaceDefinition.info,
      [options.userdata ?? null, options.path.ptr, infoMemory]
    );

    if (!success) return null;

    const info = new PathInfo(infoMemory);

    return info;
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

    const success = this.invoke<boolean>(
      ByteOffset.read_file,
      StorageInterfaceDefinition.read_file,
      [options.userdata ?? null, pathPtr, destPtr, length]
    );

    return success ? dest : null;
  }

  public writeFile(options: WriteFileOptions) {
    const pathPtr = options.path.ptr;
    const srcPtr = ptr(options.source);
    const length = BigInt(options.source.byteLength);

    const success = this.invoke<boolean>(
      ByteOffset.write_file,
      StorageInterfaceDefinition.write_file,
      [options.userdata ?? null, pathPtr, srcPtr, length]
    );

    return success;
  }

  public mkdir(options: MkdirOptions) {
    const pathPtr = options.path.ptr;

    const success = this.invoke<boolean>(
      ByteOffset.mkdir,
      StorageInterfaceDefinition.mkdir,
      [options.userdata ?? null, pathPtr]
    );

    return success;
  }

  public remove(options: RemoveOptions) {
    const pathPtr = options.path.ptr;

    const success = this.invoke<boolean>(
      ByteOffset.remove,
      StorageInterfaceDefinition.remove,
      [options.userdata ?? null, pathPtr]
    );

    return success;
  }

  public rename(options: RenameOptions) {
    const oldPathPtr = options.oldPath.ptr;
    const newPathPtr = options.newPath.ptr;

    const success = this.invoke<boolean>(
      ByteOffset.rename,
      StorageInterfaceDefinition.rename,
      [options.userdata ?? null, oldPathPtr, newPathPtr]
    );

    return success;
  }

  public copy(options: CopyOptions) {
    const oldPathPtr = options.oldPath.ptr;
    const newPathPtr = options.newPath.ptr;

    const success = this.invoke<boolean>(
      ByteOffset.copy,
      StorageInterfaceDefinition.copy,
      [options.userdata ?? null, oldPathPtr, newPathPtr]
    );

    return success;
  }

  public spaceRemaining(userdata?: Pointer | null) {
    return this.invoke<bigint>(
      ByteOffset.space_remaining,
      StorageInterfaceDefinition.space_remaining,
      [userdata ?? null]
    );
  }
}
