import type { CString, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { MessageBoxFlags } from '../../../ffi/message-box/constant';
import { CStruct } from '../../../utility/cstruct';
import { MessageBoxData } from '../utility';

export function showMessageBox(
  this: SDL,
  messageboxdata: MessageBoxData | Pointer
) {
  const dataPtr =
    messageboxdata instanceof MessageBoxData
      ? messageboxdata.$address
      : messageboxdata;

  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_ShowMessageBox(dataPtr, struct.$address);

  if (!success) return null;

  return struct.getValue(0, 'i32');
}

export function showSimpleMessageBox(
  this: SDL,
  options: {
    flags: MessageBoxFlags;
    title: CString;
    message: CString;
    window?: Pointer | null;
  }
) {
  return this.symbols.SDL_ShowSimpleMessageBox(
    options.flags,
    options.title.ptr,
    options.message.ptr,
    options.window ?? null
  );
}
