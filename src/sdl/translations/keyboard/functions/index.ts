import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructAddress, stringToCString } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import type { Keycode, Keymod } from '../../../ffi/keycode/constant';
import type { Scancode } from '../../../ffi/scancode/constant';
import { Rect } from '../../rect/utility';
import { KeyboardState } from '../utility';

export function hasKeyboard(this: SDL) {
  return this.symbols.SDL_HasKeyboard();
}

export function getKeyboards(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetKeyboards(countStruct.$address);

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const keyboards: number[] = [];

  for (let i = 0; i < count; i++) {
    const keyboardId = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    keyboards.push(keyboardId);
  }

  this.symbols.SDL_free(listPtr);

  return keyboards;
}

export function getKeyboardNameForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetKeyboardNameForID(instanceId).toString();
}

export function getKeyboardFocus(this: SDL) {
  return this.symbols.SDL_GetKeyboardFocus();
}

export function getKeyboardState(this: SDL) {
  const numkeysStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const statePtr = this.symbols.SDL_GetKeyboardState(numkeysStruct.$address);

  if (!statePtr) return null;

  const numkeys = numkeysStruct.getValue(0, 'i32');

  return new KeyboardState(statePtr, numkeys);
}

export function resetKeyboard(this: SDL) {
  this.symbols.SDL_ResetKeyboard();
}

export function getModState(this: SDL) {
  return this.symbols.SDL_GetModState() as Keymod;
}

export function setModState(this: SDL, modstate: Keymod) {
  this.symbols.SDL_SetModState(modstate);
}

export function getKeyFromScancode(
  this: SDL,
  options: {
    scancode: Scancode;
    modstate: Keymod;
    keyEvent: boolean;
  }
) {
  return this.symbols.SDL_GetKeyFromScancode(
    options.scancode,
    options.modstate,
    options.keyEvent
  ) as Keycode;
}

export function getScancodeFromKey(this: SDL, key: Keycode) {
  const modstateStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });

  const scancode = this.symbols.SDL_GetScancodeFromKey(
    key,
    modstateStruct.$address
  ) as Scancode;
  const modstate = modstateStruct.getValue(0, 'u16') as Keymod;

  return {
    scancode,
    modstate,
  };
}

export function setScancodeName(
  this: SDL,
  options: {
    scancode: Scancode;
    name: string;
  }
) {
  return this.symbols.SDL_SetScancodeName(
    options.scancode,
    stringToCString(options.name).ptr
  );
}

export function getScancodeName(this: SDL, scancode: Scancode) {
  return this.symbols.SDL_GetScancodeName(scancode).toString();
}

export function getScancodeFromName(this: SDL, name: string) {
  return this.symbols.SDL_GetScancodeFromName(
    stringToCString(name).ptr
  ) as Scancode;
}

export function getKeyName(this: SDL, key: Keycode) {
  return this.symbols.SDL_GetKeyName(key).toString();
}

export function getKeyFromName(this: SDL, name: string) {
  return this.symbols.SDL_GetKeyFromName(stringToCString(name).ptr) as Keycode;
}

export function startTextInput(this: SDL, window: Pointer) {
  return this.symbols.SDL_StartTextInput(window);
}

export function startTextInputWithProperties(
  this: SDL,
  options: {
    window: Pointer;
    props: number;
  }
) {
  return this.symbols.SDL_StartTextInputWithProperties(
    options.window,
    options.props
  );
}

export function textInputActive(this: SDL, window: Pointer) {
  return this.symbols.SDL_TextInputActive(window);
}

export function stopTextInput(this: SDL, window: Pointer) {
  return this.symbols.SDL_StopTextInput(window);
}

export function clearComposition(this: SDL, window: Pointer) {
  return this.symbols.SDL_ClearComposition(window);
}

export function setTextInputArea(
  this: SDL,
  options: {
    window: Pointer;
    rect: Rect | Pointer;
    cursor: number;
  }
) {
  return this.symbols.SDL_SetTextInputArea(
    options.window,
    getStructAddress(options.rect),
    options.cursor
  );
}

export function getTextInputArea(this: SDL, window: Pointer) {
  const rect = new Rect(Rect.allocMemory());
  const cursorStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetTextInputArea(
    window,
    rect.$address,
    cursorStruct.$address
  );

  if (!success) return null;

  return {
    rect,
    cursor: cursorStruct.getValue(0, 'i32'),
  };
}

export function hasScreenKeyboardSupport(this: SDL) {
  return this.symbols.SDL_HasScreenKeyboardSupport();
}

export function screenKeyboardShown(this: SDL, window: Pointer) {
  return this.symbols.SDL_ScreenKeyboardShown(window);
}
