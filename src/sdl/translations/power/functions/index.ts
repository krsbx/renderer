import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import type { PowerState } from '../../../ffi/power/constant';

export function getPowerInfo(this: SDL) {
  const secondsStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const percentStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const state = this.symbols.SDL_GetPowerInfo(
    secondsStruct.$memory,
    percentStruct.$memory
  ) as PowerState;
  const seconds = secondsStruct.getValue(0, 'i32');
  const percent = percentStruct.getValue(0, 'i32');

  return {
    state,
    seconds,
    percent,
  };
}
