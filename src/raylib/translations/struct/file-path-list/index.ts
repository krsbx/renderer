import { BaseStruct } from '@/utility/base-struct';
import { CString, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class FilePathList extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  // Cached paths
  private $paths: string[] | null = null;

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
