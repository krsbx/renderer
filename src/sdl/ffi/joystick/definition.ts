import { FFIType, type FFIFunction } from 'bun:ffi';

export const JoystickDefinition = {
  // void SDL_LockJoysticks(void);                                                                                                                     // Locking for atomic access to the joystick API.
  SDL_LockJoysticks: {
    args: [],
    returns: FFIType.void,
  },
  // void SDL_UnlockJoysticks(void);                                                                                                                   // Unlocking for atomic access to the joystick API.
  SDL_UnlockJoysticks: {
    args: [],
    returns: FFIType.void,
  },
  // bool SDL_HasJoystick(void);                                                                                                                       // Return whether a joystick is currently connected.
  SDL_HasJoystick: {
    args: [],
    returns: FFIType.bool,
  },
  // SDL_JoystickID * SDL_GetJoysticks(int *count);                                                                                                    // Get a list of currently connected joysticks.
  SDL_GetJoysticks: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetJoystickNameForID(SDL_JoystickID instance_id);                                                                                // Get the implementation dependent name of a joystick.
  SDL_GetJoystickNameForID: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetJoystickPathForID(SDL_JoystickID instance_id);                                                                                // Get the implementation dependent path of a joystick.
  SDL_GetJoystickPathForID: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // int SDL_GetJoystickPlayerIndexForID(SDL_JoystickID instance_id);                                                                                  // Get the player index of a joystick.
  SDL_GetJoystickPlayerIndexForID: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // SDL_GUID SDL_GetJoystickGUIDForID(SDL_JoystickID instance_id);                                                                                    // Get the implementation-dependent GUID of a joystick.
  SDL_GetJoystickGUIDForID: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // Uint16 SDL_GetJoystickVendorForID(SDL_JoystickID instance_id);                                                                                    // Get the USB vendor ID of a joystick, if available.
  SDL_GetJoystickVendorForID: {
    args: [FFIType.u32],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetJoystickProductForID(SDL_JoystickID instance_id);                                                                                   // Get the USB product ID of a joystick, if available.
  SDL_GetJoystickProductForID: {
    args: [FFIType.u32],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetJoystickProductVersionForID(SDL_JoystickID instance_id);                                                                            // Get the product version of a joystick, if available.
  SDL_GetJoystickProductVersionForID: {
    args: [FFIType.u32],
    returns: FFIType.u16,
  },
  // SDL_JoystickType SDL_GetJoystickTypeForID(SDL_JoystickID instance_id);                                                                            // Get the type of a joystick, if available.
  SDL_GetJoystickTypeForID: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // SDL_Joystick * SDL_OpenJoystick(SDL_JoystickID instance_id);                                                                                      // Open a joystick for use.
  SDL_OpenJoystick: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Joystick * SDL_GetJoystickFromID(SDL_JoystickID instance_id);                                                                                 // Get the SDL_Joystick associated with an instance ID, if it has been opened.
  SDL_GetJoystickFromID: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Joystick * SDL_GetJoystickFromPlayerIndex(int player_index);                                                                                  // Get the SDL_Joystick associated with a player index.
  SDL_GetJoystickFromPlayerIndex: {
    args: [FFIType.i32],
    returns: FFIType.ptr,
  },
  // SDL_JoystickID SDL_AttachVirtualJoystick(const SDL_VirtualJoystickDesc *desc);                                                                    // Attach a new virtual joystick.
  SDL_AttachVirtualJoystick: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // bool SDL_DetachVirtualJoystick(SDL_JoystickID instance_id);                                                                                       // Detach a virtual joystick.
  SDL_DetachVirtualJoystick: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_IsJoystickVirtual(SDL_JoystickID instance_id);                                                                                           // Query whether or not a joystick is virtual.
  SDL_IsJoystickVirtual: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_SetJoystickVirtualAxis(SDL_Joystick *joystick, int axis, Sint16 value);                                                                  // Set the state of an axis on an opened virtual joystick.
  SDL_SetJoystickVirtualAxis: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i16],
    returns: FFIType.bool,
  },
  // bool SDL_SetJoystickVirtualBall(SDL_Joystick *joystick, int ball, Sint16 xrel, Sint16 yrel);                                                      // Generate ball motion on an opened virtual joystick.
  SDL_SetJoystickVirtualBall: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i16, FFIType.i16],
    returns: FFIType.bool,
  },
  // bool SDL_SetJoystickVirtualButton(SDL_Joystick *joystick, int button, bool down);                                                                 // Set the state of a button on an opened virtual joystick.
  SDL_SetJoystickVirtualButton: {
    args: [FFIType.ptr, FFIType.i32, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SetJoystickVirtualHat(SDL_Joystick *joystick, int hat, Uint8 value);                                                                     // Set the state of a hat on an opened virtual joystick.
  SDL_SetJoystickVirtualHat: {
    args: [FFIType.ptr, FFIType.i32, FFIType.u8],
    returns: FFIType.bool,
  },
  // bool SDL_SetJoystickVirtualTouchpad(SDL_Joystick *joystick, int touchpad, int finger, bool down, float x, float y, float pressure);               // Set touchpad finger state on an opened virtual joystick.
  SDL_SetJoystickVirtualTouchpad: {
    args: [
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.bool,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
    ],
    returns: FFIType.bool,
  },
  // bool SDL_SendJoystickVirtualSensorData(SDL_Joystick *joystick, SDL_SensorType type, Uint64 sensor_timestamp, const float *data, int num_values);  // Send a sensor update for an opened virtual joystick.
  SDL_SendJoystickVirtualSensorData: {
    args: [FFIType.ptr, FFIType.i32, FFIType.u64, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // SDL_PropertiesID SDL_GetJoystickProperties(SDL_Joystick *joystick);                                                                               // Get the properties associated with a joystick.
  SDL_GetJoystickProperties: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetJoystickName(SDL_Joystick *joystick);                                                                                         // Get the implementation dependent name of a joystick.
  SDL_GetJoystickName: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetJoystickPath(SDL_Joystick *joystick);                                                                                         // Get the implementation dependent path of a joystick.
  SDL_GetJoystickPath: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // int SDL_GetJoystickPlayerIndex(SDL_Joystick *joystick);                                                                                           // Get the player index of an opened joystick.
  SDL_GetJoystickPlayerIndex: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // bool SDL_SetJoystickPlayerIndex(SDL_Joystick *joystick, int player_index);                                                                        // Set the player index of an opened joystick.
  SDL_SetJoystickPlayerIndex: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // SDL_GUID SDL_GetJoystickGUID(SDL_Joystick *joystick);                                                                                             // Get the implementation-dependent GUID for the joystick.
  SDL_GetJoystickGUID: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // Uint16 SDL_GetJoystickVendor(SDL_Joystick *joystick);                                                                                             // Get the USB vendor ID of an opened joystick, if available.
  SDL_GetJoystickVendor: {
    args: [FFIType.ptr],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetJoystickProduct(SDL_Joystick *joystick);                                                                                            // Get the USB product ID of an opened joystick, if available.
  SDL_GetJoystickProduct: {
    args: [FFIType.ptr],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetJoystickProductVersion(SDL_Joystick *joystick);                                                                                     // Get the product version of an opened joystick, if available.
  SDL_GetJoystickProductVersion: {
    args: [FFIType.ptr],
    returns: FFIType.u16,
  },
  // Uint16 SDL_GetJoystickFirmwareVersion(SDL_Joystick *joystick);                                                                                    // Get the firmware version of an opened joystick, if available.
  SDL_GetJoystickFirmwareVersion: {
    args: [FFIType.ptr],
    returns: FFIType.u16,
  },
  // const char * SDL_GetJoystickSerial(SDL_Joystick *joystick);                                                                                       // Get the serial number of an opened joystick, if available.
  SDL_GetJoystickSerial: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // SDL_JoystickType SDL_GetJoystickType(SDL_Joystick *joystick);                                                                                     // Get the type of an opened joystick.
  SDL_GetJoystickType: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // void SDL_GetJoystickGUIDInfo(SDL_GUID guid, Uint16 *vendor, Uint16 *product, Uint16 *version, Uint16 *crc16);                                     // Get the device information encoded in a SDL_GUID structure.
  SDL_GetJoystickGUIDInfo: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_JoystickConnected(SDL_Joystick *joystick);                                                                                               // Get the status of a specified joystick.
  SDL_JoystickConnected: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_JoystickID SDL_GetJoystickID(SDL_Joystick *joystick);                                                                                         // Get the instance ID of an opened joystick.
  SDL_GetJoystickID: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_GetNumJoystickAxes(SDL_Joystick *joystick);                                                                                               // Get the number of general axis controls on a joystick.
  SDL_GetNumJoystickAxes: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_GetNumJoystickBalls(SDL_Joystick *joystick);                                                                                              // Get the number of trackballs on a joystick.
  SDL_GetNumJoystickBalls: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_GetNumJoystickHats(SDL_Joystick *joystick);                                                                                               // Get the number of POV hats on a joystick.
  SDL_GetNumJoystickHats: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_GetNumJoystickButtons(SDL_Joystick *joystick);                                                                                            // Get the number of buttons on a joystick.
  SDL_GetNumJoystickButtons: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // void SDL_SetJoystickEventsEnabled(bool enabled);                                                                                                  // Set the state of joystick event processing.
  SDL_SetJoystickEventsEnabled: {
    args: [FFIType.bool],
    returns: FFIType.void,
  },
  // bool SDL_JoystickEventsEnabled(void);                                                                                                             // Query the state of joystick event processing.
  SDL_JoystickEventsEnabled: {
    args: [],
    returns: FFIType.bool,
  },
  // void SDL_UpdateJoysticks(void);                                                                                                                   // Update the current state of the open joysticks.
  SDL_UpdateJoysticks: {
    args: [],
    returns: FFIType.void,
  },
  // Sint16 SDL_GetJoystickAxis(SDL_Joystick *joystick, int axis);                                                                                     // Get the current state of an axis control on a joystick.
  SDL_GetJoystickAxis: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.i16,
  },
  // bool SDL_GetJoystickAxisInitialState(SDL_Joystick *joystick, int axis, Sint16 *state);                                                            // Get the initial state of an axis control on a joystick.
  SDL_GetJoystickAxisInitialState: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetJoystickBall(SDL_Joystick *joystick, int ball, int *dx, int *dy);                                                                     // Get the ball axis change since the last poll.
  SDL_GetJoystickBall: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // Uint8 SDL_GetJoystickHat(SDL_Joystick *joystick, int hat);                                                                                        // Get the current state of a POV hat on a joystick.
  SDL_GetJoystickHat: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.u8,
  },
  // bool SDL_GetJoystickButton(SDL_Joystick *joystick, int button);                                                                                   // Get the current state of a button on a joystick.
  SDL_GetJoystickButton: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_RumbleJoystick(SDL_Joystick *joystick, Uint16 low_frequency_rumble, Uint16 high_frequency_rumble, Uint32 duration_ms);                   // Start a rumble effect.
  SDL_RumbleJoystick: {
    args: [FFIType.ptr, FFIType.u16, FFIType.u16, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_RumbleJoystickTriggers(SDL_Joystick *joystick, Uint16 left_rumble, Uint16 right_rumble, Uint32 duration_ms);                             // Start a rumble effect in the joystick's triggers.
  SDL_RumbleJoystickTriggers: {
    args: [FFIType.ptr, FFIType.u16, FFIType.u16, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_SetJoystickLED(SDL_Joystick *joystick, Uint8 red, Uint8 green, Uint8 blue);                                                              // Update a joystick's LED color.
  SDL_SetJoystickLED: {
    args: [FFIType.ptr, FFIType.u8, FFIType.u8, FFIType.u8],
    returns: FFIType.bool,
  },
  // bool SDL_SendJoystickEffect(SDL_Joystick *joystick, const void *data, int size);                                                                  // Send a joystick specific effect packet.
  SDL_SendJoystickEffect: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // void SDL_CloseJoystick(SDL_Joystick *joystick);                                                                                                   // Close a joystick previously opened with SDL_OpenJoystick().
  SDL_CloseJoystick: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_JoystickConnectionState SDL_GetJoystickConnectionState(SDL_Joystick *joystick);                                                               // Get the connection state of a joystick.
  SDL_GetJoystickConnectionState: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // SDL_PowerState SDL_GetJoystickPowerInfo(SDL_Joystick *joystick, int *percent);                                                                    // Get the battery state of a joystick.
  SDL_GetJoystickPowerInfo: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
} satisfies Record<string, FFIFunction>;
