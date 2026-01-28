import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import type { MessageBoxFlags } from '../../../ffi/message-box/constant';
import { MessageBoxData } from '../utility';

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
    window?: Pointer | null;
  }
) {
  return this.symbols.SDL_ShowSimpleMessageBox(
    options.flags,
    stringToCString(options.title).ptr,
    stringToCString(options.message).ptr,
    options.window ?? null
  );
}
