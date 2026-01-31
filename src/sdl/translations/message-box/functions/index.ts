import type { SDL } from '@/sdl';
import type { Window } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { MessageBoxFlags } from '../../../ffi/message-box/constant';
import { MessageBoxData } from '../struct';

export function showMessageBox(this: SDL, messageboxdata: MessageBoxData) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_ShowMessageBox(
    messageboxdata.$address,
    struct.$address
  );

  if (!success) return null;

  return struct.getValue(0, 'i32');
}

export function showSimpleMessageBox(
  this: SDL,
  options: {
    flags: MessageBoxFlags;
    title: string;
    message: string;
    window?: Window | null;
  }
) {
  return this.symbols.SDL_ShowSimpleMessageBox(
    options.flags,
    stringToCString(options.title).ptr,
    stringToCString(options.message).ptr,
    options.window ?? null
  );
}
