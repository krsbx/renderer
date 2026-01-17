import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';
import { Locale } from '../utility';

export function getPreferredLocales(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetPreferredLocales(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const locales: Locale[] = [];

  for (let i = 0; i < count; i++) {
    const localePtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (!localePtr) continue;

    const sdlLocale = new Locale(localePtr);
    const locale = new Locale(sdlLocale.$memory.slice());

    locales.push(locale);
  }

  this.symbols.SDL_free(listPtr);

  return locales;
}
