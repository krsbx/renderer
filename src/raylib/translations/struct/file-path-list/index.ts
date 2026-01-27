import type { StructInit } from '@/types/shared';
import { CString, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class FilePathList {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  // Cached paths
  private $paths: string[] | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, FilePathList.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static create(data?: StructInit<FilePathList>) {
    const instance = new FilePathList(FilePathList.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get count() {
    return this.$view.getUint32(ByteOffset.count, true);
  }

  public set count(value: number) {
    this.$view.setUint32(ByteOffset.count, value, true);
  }

  // paths: char** (count)
  public get paths_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.paths, true)) as Pointer;
  }

  public set paths_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.paths, BigInt(value as number), true);
    this.$paths = null;
  }

  public get paths() {
    const ptr = this.paths_ptr;
    if (!ptr) return null;
    if (this.$paths) return this.$paths;

    const count = this.count;

    // Read array of string pointers (char**)
    const pointerArrayBuffer = toArrayBuffer(ptr, 0, count * 8);
    const pointerArrayView = new DataView(pointerArrayBuffer);

    this.$paths = new Proxy(new Array(count), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= count) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        // Get the char* for this path
        const strPtr = Number(
          pointerArrayView.getBigUint64(index * 8, true)
        ) as Pointer;
        if (!strPtr) return null;

        // Read the null-terminated string
        return new CString(strPtr).toString();
      },
      set: () => false,
    }) as never;

    return this.$paths;
  }
}
