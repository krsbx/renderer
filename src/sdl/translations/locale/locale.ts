import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import { convertStringToFfi } from '../../utility/common';
import type { RawLocale } from './types';

export class Locale implements RawLocale {
  public static readonly BYTE_SIZE = 16;

  public language: string;
  public country: string;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawLocale) {
    this.language = options.language;
    this.country = options.country;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = Locale.allocMemory();
    const view = new DataView(
      buffer.buffer,
      buffer.byteOffset,
      buffer.byteLength
    );

    const language = convertStringToFfi(this.language);
    const country = convertStringToFfi(this.country);

    view.setBigUint64(0, BigInt(language.reference), true);
    view.setBigUint64(8, BigInt(country.reference), true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const languagePtr = read.ptr(pointer, 0) as Pointer;
    const countryPtr = read.ptr(pointer, 8) as Pointer;

    const language = new CString(languagePtr).toString();
    const country = new CString(countryPtr).toString();

    const result = {
      language,
      country,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawLocale;

    return new Locale(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const languagePtr = view.getBigUint64(0, true) as unknown as Pointer;
    const countryPtr = view.getBigUint64(8, true) as unknown as Pointer;

    const language = new CString(languagePtr).toString();
    const country = new CString(countryPtr).toString();

    const result = {
      language,
      country,
      free: null,
      address: null,
    } as RawLocale;

    return new Locale(result);
  }
}
