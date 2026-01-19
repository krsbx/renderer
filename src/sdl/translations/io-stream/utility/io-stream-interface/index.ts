import {
  linkSymbols,
  ptr,
  toArrayBuffer,
  type FFIFunction,
  type Library,
  type Pointer,
} from 'bun:ffi';
import type { IOStatus } from '../../../../ffi/io-stream/constant';
import { CStruct } from '../../../../utility/cstruct';
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

  public size(userdata?: Pointer | null) {
    return this.invoke<number>(
      ByteOffset.size,
      IOStreamInterfaceDefinition.size,
      [userdata ?? null]
    );
  }

  public seek(options: SeekOptions) {
    return this.invoke<number>(
      ByteOffset.seek,
      IOStreamInterfaceDefinition.seek,
      [options.userdata ?? null, options.offset, options.whence]
    );
  }

  public read(options: ReadOptions) {
    const statusStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

    const result = this.invoke<bigint>(
      ByteOffset.read,
      IOStreamInterfaceDefinition.read,
      [
        options.userdata ?? null,
        options.ptr,
        BigInt(options.size),
        statusStruct.$address,
      ]
    );

    return {
      result,
      status: statusStruct.getValue(0, 'i32') as IOStatus,
    };
  }

  public write(options: WriteOptions) {
    const statusStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

    const result = this.invoke<bigint>(
      ByteOffset.write,
      IOStreamInterfaceDefinition.write,
      [
        options.userdata ?? null,
        options.ptr,
        BigInt(options.size),
        statusStruct.$address,
      ]
    );

    return {
      result,
      status: statusStruct.getValue(0, 'i32') as IOStatus,
    };
  }

  public flush(userdata?: Pointer | null) {
    const statusStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

    const result = this.invoke<boolean>(
      ByteOffset.flush,
      IOStreamInterfaceDefinition.flush,
      [userdata ?? null, statusStruct.$address]
    );

    return {
      result: result,
      status: statusStruct.getValue(0, 'i32') as IOStatus,
    };
  }

  public close(userdata?: Pointer | null) {
    return this.invoke<boolean>(
      ByteOffset.close,
      IOStreamInterfaceDefinition.close,
      [userdata ?? null]
    );
  }
}
