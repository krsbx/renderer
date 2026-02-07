import type { SDL } from '@/sdl';
import type { Window } from '@/sdl/types/definition';
import type { Int32, UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import type { Keycode, Keymod } from '../../../ffi/keycode/constant';
import type { Scancode } from '../../../ffi/scancode/constant';
import { Rect } from '../../rect/struct';
import { KeyboardState } from '../struct';

export function hasKeyboard(this: SDL) {
  return this.symbols.SDL_HasKeyboard();
}

export function getKeyboards(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetKeyboards(countStruct.$memory);

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const keyboards = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return keyboards;
}

export function getKeyboardNameForID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetKeyboardNameForID(instanceId).toString();
}

export function getKeyboardFocus(this: SDL) {
  return this.symbols.SDL_GetKeyboardFocus() as Window;
}

export function getKeyboardState(this: SDL) {
  const numkeysStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const statePtr = this.symbols.SDL_GetKeyboardState(numkeysStruct.$memory);

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
    modstateStruct.$memory
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

export function startTextInput(this: SDL, window: Window) {
  return this.symbols.SDL_StartTextInput(window);
}

export function startTextInputWithProperties(
  this: SDL,
  options: {
    window: Window;
    props: UInt32;
  }
) {
  return this.symbols.SDL_StartTextInputWithProperties(
    options.window,
    options.props
  );
}

export function textInputActive(this: SDL, window: Window) {
  return this.symbols.SDL_TextInputActive(window);
}

export function stopTextInput(this: SDL, window: Window) {
  return this.symbols.SDL_StopTextInput(window);
}

export function clearComposition(this: SDL, window: Window) {
  return this.symbols.SDL_ClearComposition(window);
}

export function setTextInputArea(
  this: SDL,
  options: {
    window: Window;
    rect: Rect;
    cursor: Int32;
  }
) {
  return this.symbols.SDL_SetTextInputArea(
    options.window,
    options.rect.$memory,
    options.cursor
  );
}

export function getTextInputArea(this: SDL, window: Window) {
  const rect = Rect.create();
  const cursorStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetTextInputArea(
    window,
    rect.$memory,
    cursorStruct.$memory
  );

  if (!success) return null;

  return {
    rect,
    cursor: cursorStruct.getValue(0, 'i32') as Int32,
  };
}

export function hasScreenKeyboardSupport(this: SDL) {
  return this.symbols.SDL_HasScreenKeyboardSupport();
}

export function screenKeyboardShown(this: SDL, window: Window) {
  return this.symbols.SDL_ScreenKeyboardShown(window);
}
