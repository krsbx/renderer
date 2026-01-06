import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import { ByteOffset } from './constant';
import type { RawDialogFileFilter } from './types';

export class DialogFileFilter implements RawDialogFileFilter {
  public static readonly BYTE_SIZE = 16;

  public name: string;
  public pattern: string;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawDialogFileFilter) {
    this.name = options.name;
    this.pattern = options.pattern;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = DialogFileFilter.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setBigUint64(ByteOffset.name, 0n, true);
    view.setBigUint64(ByteOffset.pattern, 0n, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const namePtr = read.ptr(pointer, ByteOffset.name) as Pointer | null;
    const patternPtr = read.ptr(pointer, ByteOffset.pattern) as Pointer | null;

    const result = {
      name: namePtr ? new CString(namePtr).toString() : '',
      pattern: patternPtr ? new CString(patternPtr).toString() : '',
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawDialogFileFilter;

    return new DialogFileFilter(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const nameAddr = view.getBigUint64(ByteOffset.name, true);
    const patternAddr = view.getBigUint64(ByteOffset.pattern, true);

    const result = {
      name:
        nameAddr !== 0n
          ? new CString(nameAddr as unknown as Pointer).toString()
          : '',
      pattern:
        patternAddr !== 0n
          ? new CString(patternAddr as unknown as Pointer).toString()
          : '',
      free: null,
      address: null,
    } as RawDialogFileFilter;

    return new DialogFileFilter(result);
  }
}
