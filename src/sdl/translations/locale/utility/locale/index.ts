import { CString, ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { stringToCString } from '../../../../utility/common';
import { ByteOffset } from './constant';

export class Locale {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  private $cache: Partial<{
    language: CString;
    country: CString;
  }>;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, Locale.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
    this.$cache = {};
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get language() {
    const languageAddr = this.$view.getBigUint64(ByteOffset.language, true);
    const languagePtr = Number(languageAddr) as Pointer;

    return new CString(languagePtr).toString();
  }

  public set language(value: string) {
    this.$cache.language = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.language,
      BigInt(this.$cache.language.ptr),
      true
    );
  }

  public get country() {
    const countryAddr = this.$view.getBigUint64(ByteOffset.country, true);

    if (!countryAddr || countryAddr === 0n) return null;

    const countryPtr = Number(countryAddr) as Pointer;

    return new CString(countryPtr).toString();
  }

  public set country(value: string | null) {
    if (!value) {
      this.$view.setBigUint64(ByteOffset.country, 0n, true);
      this.$cache.country = undefined;
      return;
    }

    this.$cache.country = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.country,
      BigInt(this.$cache.country.ptr),
      true
    );
  }
}
