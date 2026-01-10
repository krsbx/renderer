import {
  linkSymbols,
  ptr,
  toArrayBuffer,
  type FFIFunction,
  type Library,
  type Pointer,
} from 'bun:ffi';
import type { IOStatus } from '../../../ffi/io-stream/constant';
import { ByteOffset } from './constant';
import { IOStreamInterfaceDefinition } from './definition';
import type { ReadOptions, SeekOptions, WriteOptions } from './types';

export class IOStreamInterface {
  public static readonly BYTE_SIZE = 56;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;
  private $lib: Library<never> | null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, IOStreamInterface.BYTE_SIZE);
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
    const rawPtr = this.$view.getBigUint64(offset, true);
    const ptr = Number(rawPtr) as Pointer;

    if (!ptr) {
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

  public size(userData?: Pointer | null) {
    return this.invoke<number>(
      ByteOffset.size,
      IOStreamInterfaceDefinition.size,
      [userData ?? null]
    );
  }

  public seek(options: SeekOptions) {
    return this.invoke<number>(
      ByteOffset.seek,
      IOStreamInterfaceDefinition.seek,
      [options.userData ?? null, options.offset, options.whence]
    );
  }

  public read(options: ReadOptions) {
    const statusBuf = new Uint32Array(1);

    const result = this.invoke<bigint>(
      ByteOffset.read,
      IOStreamInterfaceDefinition.read,
      [
        options.userData ?? null,
        options.ptr,
        BigInt(options.size),
        ptr(statusBuf),
      ]
    );

    return {
      result,
      status: statusBuf[0] as IOStatus,
    };
  }

  public write(options: WriteOptions) {
    const statusBuf = new Uint32Array(1);

    const result = this.invoke<bigint>(
      ByteOffset.write,
      IOStreamInterfaceDefinition.write,
      [
        options.userData ?? null,
        options.ptr,
        BigInt(options.size),
        ptr(statusBuf),
      ]
    );

    return {
      result,
      status: statusBuf[0] as IOStatus,
    };
  }

  public flush(userData?: Pointer | null) {
    const statusBuf = new Uint32Array(1);

    const result = this.invoke<boolean>(
      ByteOffset.flush,
      IOStreamInterfaceDefinition.flush,
      [userData ?? null, ptr(statusBuf)]
    );

    return {
      result: result,
      status: statusBuf[0] as IOStatus,
    };
  }

  public close(userData?: Pointer | null) {
    return this.invoke<boolean>(
      ByteOffset.close,
      IOStreamInterfaceDefinition.close,
      [userData ?? null]
    );
  }
}
