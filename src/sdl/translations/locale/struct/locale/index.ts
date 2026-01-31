import { BaseStruct } from '@basestruct';
import { stringToCString } from '@utility/common';
import { CString, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Locale extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  private $cache: Partial<{
    language: CString;
    country: CString;
  }> = {};

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
