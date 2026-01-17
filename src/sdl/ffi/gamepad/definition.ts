import { FFIType, type FFIFunction } from 'bun:ffi';

export const GamepadDefinition = {
  // int SDL_AddGamepadMapping(const char *mapping);                                                                                      // Add support for gamepads that SDL is unaware of or change the binding of an existing gamepad.
  SDL_AddGamepadMapping: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // int SDL_AddGamepadMappingsFromIO(SDL_IOStream *src, bool closeio);                                                                   // Load a set of gamepad mappings from an SDL_IOStream.
  SDL_AddGamepadMappingsFromIO: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.i32,
  },
  // int SDL_AddGamepadMappingsFromFile(const char *file);                                                                                // Load a set of gamepad mappings from a file.
  SDL_AddGamepadMappingsFromFile: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // bool SDL_ReloadGamepadMappings(void);                                                                                                // Reinitialize the SDL mapping database to its initial state.
  SDL_ReloadGamepadMappings: {
    args: [],
    returns: FFIType.bool,
  },
  // char ** SDL_GetGamepadMappings(int *count);                                                                                          // Get the current gamepad mappings.
  SDL_GetGamepadMappings: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char * SDL_GetGamepadMappingForGUID(SDL_GUID guid);                                                                                  // Get the gamepad mapping string for a given GUID.
  SDL_GetGamepadMappingForGUID: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char * SDL_GetGamepadMapping(SDL_Gamepad *gamepad);                                                                                  // Get the current mapping of a gamepad.
  SDL_GetGamepadMapping: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetGamepadMapping(SDL_JoystickID instance_id, const char *mapping);                                                         // Set the current mapping of a joystick or gamepad.
  SDL_SetGamepadMapping: {
    args: [FFIType.i32, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_HasGamepad(void);                                                                                                           // Return whether a gamepad is currently connected.
  SDL_HasGamepad: {
    args: [],
    returns: FFIType.bool,
  },
  // SDL_JoystickID * SDL_GetGamepads(int *count);                                                                                        // Get a list of currently connected gamepads.
  SDL_GetGamepads: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_IsGamepad(SDL_JoystickID instance_id);                                                                                      // Check if the given joystick is supported by the gamepad interface.
  SDL_IsGamepad: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // const char * SDL_GetGamepadNameForID(SDL_JoystickID instance_id);                                                                    // Get the implementation dependent name of a gamepad.
  SDL_GetGamepadNameForID: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetGamepadPathForID(SDL_JoystickID instance_id);                                                                    // Get the implementation dependent path of a gamepad.
  SDL_GetGamepadPathForID: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // int SDL_GetGamepadPlayerIndexForID(SDL_JoystickID instance_id);                                                                      // Get the player index of a gamepad.
  SDL_GetGamepadPlayerIndexForID: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // SDL_GUID SDL_GetGamepadGUIDForID(SDL_JoystickID instance_id);                                                                        // Get the implementation-dependent GUID of a gamepad.
  SDL_GetGamepadGUIDForID: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // Uint16 SDL_GetGamepadVendorForID(SDL_JoystickID instance_id);                                                                        // Get the USB vendor ID of a gamepad, if available.
  SDL_GetGamepadVendorForID: {
    args: [FFIType.u32],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetGamepadProductForID(SDL_JoystickID instance_id);                                                                       // Get the USB product ID of a gamepad, if available.
  SDL_GetGamepadProductForID: {
    args: [FFIType.u32],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetGamepadProductVersionForID(SDL_JoystickID instance_id);                                                                // Get the product version of a gamepad, if available.
  SDL_GetGamepadProductVersionForID: {
    args: [FFIType.u32],
    returns: FFIType.u16,
  },
  // SDL_GamepadType SDL_GetGamepadTypeForID(SDL_JoystickID instance_id);                                                                 // Get the type of a gamepad.
  SDL_GetGamepadTypeForID: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // SDL_GamepadType SDL_GetRealGamepadTypeForID(SDL_JoystickID instance_id);                                                             // Get the type of a gamepad, ignoring any mapping override.
  SDL_GetRealGamepadTypeForID: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // char * SDL_GetGamepadMappingForID(SDL_JoystickID instance_id);                                                                       // Get the mapping of a gamepad.
  SDL_GetGamepadMappingForID: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Gamepad * SDL_OpenGamepad(SDL_JoystickID instance_id);                                                                           // Open a gamepad for use.
  SDL_OpenGamepad: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Gamepad * SDL_GetGamepadFromID(SDL_JoystickID instance_id);                                                                      // Get the SDL_Gamepad associated with a joystick instance ID, if it has been opened.
  SDL_GetGamepadFromID: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Gamepad * SDL_GetGamepadFromPlayerIndex(int player_index);                                                                       // Get the SDL_Gamepad associated with a player index.
  SDL_GetGamepadFromPlayerIndex: {
    args: [FFIType.i32],
    returns: FFIType.ptr,
  },
  // SDL_PropertiesID SDL_GetGamepadProperties(SDL_Gamepad *gamepad);                                                                     // Get the properties associated with an opened gamepad.
  SDL_GetGamepadProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_JoystickID SDL_GetGamepadID(SDL_Gamepad *gamepad);                                                                               // Get the instance ID of an opened gamepad.
  SDL_GetGamepadID: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // const char * SDL_GetGamepadName(SDL_Gamepad *gamepad);                                                                               // Get the implementation-dependent name for an opened gamepad.
  SDL_GetGamepadName: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetGamepadPath(SDL_Gamepad *gamepad);                                                                               // Get the implementation-dependent path for an opened gamepad.
  SDL_GetGamepadPath: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // SDL_GamepadType SDL_GetGamepadType(SDL_Gamepad *gamepad);                                                                            // Get the type of an opened gamepad.
  SDL_GetGamepadType: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // SDL_GamepadType SDL_GetRealGamepadType(SDL_Gamepad *gamepad);                                                                        // Get the type of an opened gamepad, ignoring any mapping override.
  SDL_GetRealGamepadType: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_GetGamepadPlayerIndex(SDL_Gamepad *gamepad);                                                                                 // Get the player index of an opened gamepad.
  SDL_GetGamepadPlayerIndex: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // bool SDL_SetGamepadPlayerIndex(SDL_Gamepad *gamepad, int player_index);                                                              // Set the player index of an opened gamepad.
  SDL_SetGamepadPlayerIndex: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // Uint16 SDL_GetGamepadVendor(SDL_Gamepad *gamepad);                                                                                   // Get the USB vendor ID of an opened gamepad, if available.
  SDL_GetGamepadVendor: {
    args: [FFIType.ptr],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetGamepadProduct(SDL_Gamepad *gamepad);                                                                                  // Get the USB product ID of an opened gamepad, if available.
  SDL_GetGamepadProduct: {
    args: [FFIType.ptr],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetGamepadProductVersion(SDL_Gamepad *gamepad);                                                                           // Get the product version of an opened gamepad, if available.
  SDL_GetGamepadProductVersion: {
    args: [FFIType.ptr],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetGamepadFirmwareVersion(SDL_Gamepad *gamepad);                                                                          // Get the firmware version of an opened gamepad, if available.
  SDL_GetGamepadFirmwareVersion: {
    args: [FFIType.ptr],
    returns: FFIType.u16,
  },
  // const char * SDL_GetGamepadSerial(SDL_Gamepad *gamepad);                                                                             // Get the serial number of an opened gamepad, if available.
  SDL_GetGamepadSerial: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // Uint64 SDL_GetGamepadSteamHandle(SDL_Gamepad *gamepad);                                                                              // Get the Steam Input handle of an opened gamepad, if available.
  SDL_GetGamepadSteamHandle: {
    args: [FFIType.ptr],
    returns: FFIType.u64,
  },
  // SDL_JoystickConnectionState SDL_GetGamepadConnectionState(SDL_Gamepad *gamepad);                                                     // Get the connection state of a gamepad.
  SDL_GetGamepadConnectionState: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // SDL_PowerState SDL_GetGamepadPowerInfo(SDL_Gamepad *gamepad, int *percent);                                                          // Get the battery state of a gamepad.
  SDL_GetGamepadPowerInfo: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // bool SDL_GamepadConnected(SDL_Gamepad *gamepad);                                                                                     // Check if a gamepad has been opened and is currently connected.
  SDL_GamepadConnected: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Joystick * SDL_GetGamepadJoystick(SDL_Gamepad *gamepad);                                                                         // Get the underlying joystick from a gamepad.
  SDL_GetGamepadJoystick: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_SetGamepadEventsEnabled(bool enabled);                                                                                      // Set the state of gamepad event processing.
  SDL_SetGamepadEventsEnabled: {
    args: [FFIType.bool],
    returns: FFIType.void,
  },
  // bool SDL_GamepadEventsEnabled(void);                                                                                                 // Query the state of gamepad event processing.
  SDL_GamepadEventsEnabled: {
    args: [],
    returns: FFIType.bool,
  },
  // SDL_GamepadBinding ** SDL_GetGamepadBindings(SDL_Gamepad *gamepad, int *count);                                                      // Get the SDL joystick layer bindings for a gamepad.
  SDL_GetGamepadBindings: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_UpdateGamepads(void);                                                                                                       // Manually pump gamepad updates if not using the loop.
  SDL_UpdateGamepads: {
    args: [],
    returns: FFIType.void,
  },
  // SDL_GamepadType SDL_GetGamepadTypeFromString(const char *str);                                                                       // Convert a string into SDL_GamepadType enum.
  SDL_GetGamepadTypeFromString: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // const char * SDL_GetGamepadStringForType(SDL_GamepadType type);                                                                      // Convert from an SDL_GamepadType enum to a string.
  SDL_GetGamepadStringForType: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // SDL_GamepadAxis SDL_GetGamepadAxisFromString(const char *str);                                                                       // Convert a string into SDL_GamepadAxis enum.
  SDL_GetGamepadAxisFromString: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // const char * SDL_GetGamepadStringForAxis(SDL_GamepadAxis axis);                                                                      // Convert from an SDL_GamepadAxis enum to a string.
  SDL_GetGamepadStringForAxis: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // bool SDL_GamepadHasAxis(SDL_Gamepad *gamepad, SDL_GamepadAxis axis);                                                                 // Query whether a gamepad has a given axis.
  SDL_GamepadHasAxis: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // Sint16 SDL_GetGamepadAxis(SDL_Gamepad *gamepad, SDL_GamepadAxis axis);                                                               // Get the current state of an axis control on a gamepad.
  SDL_GetGamepadAxis: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.i16,
  },
  // SDL_GamepadButton SDL_GetGamepadButtonFromString(const char *str);                                                                   // Convert a string into an SDL_GamepadButton enum.
  SDL_GetGamepadButtonFromString: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // const char * SDL_GetGamepadStringForButton(SDL_GamepadButton button);                                                                // Convert from an SDL_GamepadButton enum to a string.
  SDL_GetGamepadStringForButton: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // bool SDL_GamepadHasButton(SDL_Gamepad *gamepad, SDL_GamepadButton button);                                                           // Query whether a gamepad has a given button.
  SDL_GamepadHasButton: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_GetGamepadButton(SDL_Gamepad *gamepad, SDL_GamepadButton button);                                                           // Get the current state of a button on a gamepad.
  SDL_GetGamepadButton: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // SDL_GamepadButtonLabel SDL_GetGamepadButtonLabelForType(SDL_GamepadType type, SDL_GamepadButton button);                             // Get the label of a button on a gamepad.
  SDL_GetGamepadButtonLabelForType: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  // SDL_GamepadButtonLabel SDL_GetGamepadButtonLabel(SDL_Gamepad *gamepad, SDL_GamepadButton button);                                    // Get the label of a button on a gamepad.
  SDL_GetGamepadButtonLabel: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_GetNumGamepadTouchpads(SDL_Gamepad *gamepad);                                                                                // Get the number of touchpads on a gamepad.
  SDL_GetNumGamepadTouchpads: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_GetNumGamepadTouchpadFingers(SDL_Gamepad *gamepad, int touchpad);                                                            // Get the number of supported simultaneous fingers on a touchpad on a game gamepad.
  SDL_GetNumGamepadTouchpadFingers: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.i32,
  },
  // bool SDL_GetGamepadTouchpadFinger(SDL_Gamepad *gamepad, int touchpad, int finger, bool *down, float *x, float *y, float *pressure);  // Get the current state of a finger on a touchpad on a gamepad.
  SDL_GetGamepadTouchpadFinger: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_GamepadHasSensor(SDL_Gamepad *gamepad, SDL_SensorType type);                                                                // Return whether a gamepad has a particular sensor.
  SDL_GamepadHasSensor: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SetGamepadSensorEnabled(SDL_Gamepad *gamepad, SDL_SensorType type, bool enabled);                                           // Set whether data reporting for a gamepad sensor is enabled.
  SDL_SetGamepadSensorEnabled: {
    args: [FFIType.ptr, FFIType.i32, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_GamepadSensorEnabled(SDL_Gamepad *gamepad, SDL_SensorType type);                                                            // Query whether sensor data reporting is enabled for a gamepad.
  SDL_GamepadSensorEnabled: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // float SDL_GetGamepadSensorDataRate(SDL_Gamepad *gamepad, SDL_SensorType type);                                                       // Get the data rate (number of events per second) of a gamepad sensor.
  SDL_GetGamepadSensorDataRate: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.f32,
  },
  // bool SDL_GetGamepadSensorData(SDL_Gamepad *gamepad, SDL_SensorType type, float *data, int num_values);                               // Get the current state of a gamepad sensor.
  SDL_GetGamepadSensorData: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_RumbleGamepad(SDL_Gamepad *gamepad, Uint16 low_frequency_rumble, Uint16 high_frequency_rumble, Uint32 duration_ms);         // Start a rumble effect on a gamepad.
  SDL_RumbleGamepad: {
    args: [FFIType.ptr, FFIType.u16, FFIType.u16, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_RumbleGamepadTriggers(SDL_Gamepad *gamepad, Uint16 left_rumble, Uint16 right_rumble, Uint32 duration_ms);                   // Start a rumble effect in the gamepad's triggers.
  SDL_RumbleGamepadTriggers: {
    args: [FFIType.ptr, FFIType.u16, FFIType.u16, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_SetGamepadLED(SDL_Gamepad *gamepad, Uint8 red, Uint8 green, Uint8 blue);                                                    // Update a gamepad's LED color.
  SDL_SetGamepadLED: {
    args: [FFIType.ptr, FFIType.u8, FFIType.u8, FFIType.u8],
    returns: FFIType.bool,
  },
  // bool SDL_SendGamepadEffect(SDL_Gamepad *gamepad, const void *data, int size);                                                        // Send a gamepad specific effect packet.
  SDL_SendGamepadEffect: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // void SDL_CloseGamepad(SDL_Gamepad *gamepad);                                                                                         // Close a gamepad previously opened with SDL_OpenGamepad().
  SDL_CloseGamepad: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // const char * SDL_GetGamepadAppleSFSymbolsNameForButton(SDL_Gamepad *gamepad, SDL_GamepadButton button);                              // Return the sfSymbolsName for a given button on a gamepad on Apple platforms.
  SDL_GetGamepadAppleSFSymbolsNameForButton: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetGamepadAppleSFSymbolsNameForAxis(SDL_Gamepad *gamepad, SDL_GamepadAxis axis);                                    // Return the sfSymbolsName for a given axis on a gamepad on Apple platforms.
  SDL_GetGamepadAppleSFSymbolsNameForAxis: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.cstring,
  },
} satisfies Record<string, FFIFunction>;
