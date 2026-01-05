import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawAssertData } from './types';

export class AssertData implements RawAssertData {
  public static readonly BYTE_SIZE = 48;

  public always_ignore: boolean;
  public trigger_count: number;
  public condition: string;
  public filename: string;
  public linenum: number;
  public function: string;
  public next: Pointer | null;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawAssertData) {
    this.always_ignore = options.always_ignore;
    this.trigger_count = options.trigger_count;
    this.condition = options.condition;
    this.filename = options.filename;
    this.linenum = options.linenum;
    this.function = options.function;
    this.next = options.next;
    this.free = options.free;
    this.address = options.address;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL | null = null) {
    const conditionPtr = read.ptr(pointer, 8) as Pointer;
    const filenamePtr = read.ptr(pointer, 16) as Pointer;
    const functionPtr = read.ptr(pointer, 32) as Pointer;
    const nextPtr = read.ptr(pointer, 40) as Pointer | null;

    const result = {
      always_ignore: read.u8(pointer, 0) === 1,
      trigger_count: read.u32(pointer, 4),
      // Use your existing helper to read the C string from the pointer
      condition: new CString(conditionPtr).toString(),
      filename: new CString(filenamePtr).toString(),
      linenum: read.i32(pointer, 24),
      function: new CString(functionPtr).toString(),
      next: nextPtr,
      free: sdl ? () => sdl.symbols.SDL_free(pointer) : null,
      address: pointer,
    } as RawAssertData;

    return new AssertData(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const conditionPtr = view.getBigUint64(8, true) as unknown as Pointer;
    const filenamePtr = view.getBigUint64(16, true) as unknown as Pointer;
    const functionPtr = view.getBigUint64(32, true) as unknown as Pointer;
    const nextPtr = view.getBigUint64(40, true) as unknown as Pointer | null;

    const result = {
      always_ignore: view.getUint8(0) === 1,
      trigger_count: view.getUint32(4, true),
      condition: new CString(conditionPtr).toString(),
      filename: new CString(filenamePtr).toString(),
      linenum: view.getInt32(24, true),
      function: new CString(functionPtr).toString(),
      next: nextPtr,
      free: null,
      address: null,
    } as RawAssertData;

    return new AssertData(result);
  }
}
