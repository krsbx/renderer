import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { Locale } from '../utility';

export function getPreferredLocales(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetPreferredLocales(countStruct.$address);

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');
  const pointers = CStruct.readArrayPrimitive(listPtr, count, 'ptr');
  const locales = pointers.map((ptr) => new Locale(ptr).clone());

  this.symbols.SDL_free(listPtr);

  return locales;
}
