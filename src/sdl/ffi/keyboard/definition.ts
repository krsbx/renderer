import { type FFIFunction, FFIType } from 'bun:ffi';

export const KeyboardDefinition = {
  // bool SDL_HasKeyboard(void);                                                                      // Return whether a keyboard is currently connected.
  SDL_HasKeyboard: {
    args: [],
    returns: FFIType.bool,
  },
  // SDL_KeyboardID * SDL_GetKeyboards(int *count);                                                   // Get a list of currently connected keyboards.
  SDL_GetKeyboards: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetKeyboardNameForID(SDL_KeyboardID instance_id);                               // Get the name of a keyboard.
  SDL_GetKeyboardNameForID: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // SDL_Window * SDL_GetKeyboardFocus(void);                                                         // Query the window which currently has keyboard focus.
  SDL_GetKeyboardFocus: {
    args: [],
    returns: FFIType.ptr,
  },
  // const bool * SDL_GetKeyboardState(int *numkeys);                                                 // Get a snapshot of the current state of the keyboard.
  SDL_GetKeyboardState: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_ResetKeyboard(void);                                                                    // Clear the state of the keyboard.
  SDL_ResetKeyboard: {
    args: [],
    returns: FFIType.void,
  },
  // SDL_Keymod SDL_GetModState(void);                                                                // Get the current key modifier state for the keyboard.
  SDL_GetModState: {
    args: [],
    returns: FFIType.u16,
  },
  // void SDL_SetModState(SDL_Keymod modstate);                                                       // Set the current key modifier state for the keyboard.
  SDL_SetModState: {
    args: [FFIType.u16],
    returns: FFIType.void,
  },
  // SDL_Keycode SDL_GetKeyFromScancode(SDL_Scancode scancode, SDL_Keymod modstate, bool key_event);  // Get the key code corresponding to the given scancode according to the current keyboard layout.
  SDL_GetKeyFromScancode: {
    args: [FFIType.i32, FFIType.u16, FFIType.bool],
    returns: FFIType.u32,
  },
  // SDL_Scancode SDL_GetScancodeFromKey(SDL_Keycode key, SDL_Keymod *modstate);                      // Get the scancode corresponding to the given key code according to the current keyboard layout.
  SDL_GetScancodeFromKey: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.i32,
  },
  // bool SDL_SetScancodeName(SDL_Scancode scancode, const char *name);                               // Set a human-readable name for a scancode.
  SDL_SetScancodeName: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.bool,
  },
  // const char * SDL_GetScancodeName(SDL_Scancode scancode);                                         // Get a human-readable name for a scancode.
  SDL_GetScancodeName: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // SDL_Scancode SDL_GetScancodeFromName(const char *name);                                          // Get a scancode from a human-readable name.
  SDL_GetScancodeFromName: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // const char * SDL_GetKeyName(SDL_Keycode key);                                                    // Get a human-readable name for a key.
  SDL_GetKeyName: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // SDL_Keycode SDL_GetKeyFromName(const char *name);                                                // Get a key code from a human-readable name.
  SDL_GetKeyFromName: {
    args: [FFIType.cstring],
    returns: FFIType.u32,
  },
  // bool SDL_StartTextInput(SDL_Window *window);                                                     // Start accepting Unicode text input events in a window.
  SDL_StartTextInput: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_StartTextInputWithProperties(SDL_Window *window, SDL_PropertiesID props);               // Start accepting Unicode text input events in a window, with properties describing the input.
  SDL_StartTextInputWithProperties: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_TextInputActive(SDL_Window *window);                                                    // Check whether or not Unicode text input events are enabled for a window.
  SDL_TextInputActive: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_StopTextInput(SDL_Window *window);                                                      // Stop receiving any text input events in a window.
  SDL_StopTextInput: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ClearComposition(SDL_Window *window);                                                   // Dismiss the composition window/IME without disabling the subsystem.
  SDL_ClearComposition: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetTextInputArea(SDL_Window *window, const SDL_Rect *rect, int cursor);                 // Set the area used to type Unicode text input.
  SDL_SetTextInputAre: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetTextInputArea(SDL_Window *window, SDL_Rect *rect, int *cursor);                      // Get the area used to type Unicode text input.
  SDL_GetTextInputArea: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_HasScreenKeyboardSupport(void);                                                         // Check whether the platform has screen keyboard support.
  SDL_HasScreenKeyboardSupport: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_ScreenKeyboardShown(SDL_Window *window);                                                // Check whether the screen keyboard is shown for given window.
  SDL_ScreenKeyboardShown: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
