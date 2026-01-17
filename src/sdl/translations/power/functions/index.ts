import type { SDL } from '../../..';
import type { PowerState } from '../../../ffi/power/constant';
import { CStruct } from '../../../utility/cstruct';

export function getPowerInfo(this: SDL) {
  const secondsStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const percentStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const state = this.symbols.SDL_GetPowerInfo(
    secondsStruct.$address,
    percentStruct.$address
  ) as PowerState;
  const seconds = secondsStruct.getValue(0, 'i32');
  const percent = percentStruct.getValue(0, 'i32');

  return {
    state,
    seconds,
    percent,
  };
}
