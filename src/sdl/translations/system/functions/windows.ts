import type { JSCallback, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';

export function setWindowsMessageHook(
  this: SDL,
  options: {
    callback: JSCallback | null;
    userdata?: Pointer | null;
  }
) {
  this.symbols.SDL_SetWindowsMessageHook(
    options.callback?.ptr ?? null,
    options.userdata ?? null
  );
}

export function getDirect3D9AdapterIndex(this: SDL, displayId: number) {
  return this.symbols.SDL_GetDirect3D9AdapterIndex(displayId);
}

export function getDXGIOutputInfo(this: SDL, displayId: number) {
  const adapterIndexStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const outputIndexStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetDXGIOutputInfo(
    displayId,
    adapterIndexStruct.$address,
    outputIndexStruct.$address
  );

  if (!success) return null;

  return {
    adapterIndex: adapterIndexStruct.getValue(0, 'i32'),
    outputIndex: outputIndexStruct.getValue(0, 'i32'),
  };
}
