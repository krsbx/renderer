import { FFIType, type FFIFunction } from 'bun:ffi';

export const HapticDefinition = {
  // SDL_HapticID * SDL_GetHaptics(int *count);                                                                 // Get a list of currently connected haptic devices.
  SDL_GetHaptics: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetHapticNameForID(SDL_HapticID instance_id);                                             // Get the implementation dependent name of a haptic device.
  SDL_GetHapticNameForID: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // SDL_Haptic * SDL_OpenHaptic(SDL_HapticID instance_id);                                                     // Open a haptic device for use.
  SDL_OpenHaptic: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_Haptic * SDL_GetHapticFromID(SDL_HapticID instance_id);                                                // Get the SDL_Haptic associated with an instance ID, if it has been opened.
  SDL_GetHapticFromID: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_HapticID SDL_GetHapticID(SDL_Haptic *haptic);                                                          // Get the instance ID of an opened haptic device.
  SDL_GetHapticID: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // const char * SDL_GetHapticName(SDL_Haptic *haptic);                                                        // Get the implementation dependent name of a haptic device.
  SDL_GetHapticName: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // bool SDL_IsMouseHaptic(void);                                                                              // Query whether or not the current mouse has haptic capabilities.
  SDL_IsMouseHaptic: {
    args: [],
    returns: FFIType.bool,
  },
  // SDL_Haptic * SDL_OpenHapticFromMouse(void);                                                                // Try to open a haptic device from the current mouse.
  SDL_OpenHapticFromMouse: {
    args: [],
    returns: FFIType.ptr,
  },
  // bool SDL_IsJoystickHaptic(SDL_Joystick *joystick);                                                         // Query if a joystick has haptic features.
  SDL_IsJoystickHaptic: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Haptic * SDL_OpenHapticFromJoystick(SDL_Joystick *joystick);                                           // Open a haptic device for use from a joystick device.
  SDL_OpenHapticFromJoystick: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_CloseHaptic(SDL_Haptic *haptic);                                                                  // Close a haptic device previously opened with SDL_OpenHaptic().
  SDL_CloseHaptic: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // int SDL_GetMaxHapticEffects(SDL_Haptic *haptic);                                                           // Get the number of effects a haptic device can store.
  SDL_GetMaxHapticEffects: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_GetMaxHapticEffectsPlaying(SDL_Haptic *haptic);                                                    // Get the number of effects a haptic device can play at the same time.
  SDL_GetMaxHapticEffectsPlaying: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // Uint32 SDL_GetHapticFeatures(SDL_Haptic *haptic);                                                          // Get the haptic device's supported features in bitwise manner.
  SDL_GetHapticFeatures: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // int SDL_GetNumHapticAxes(SDL_Haptic *haptic);                                                              // Get the number of haptic axes the device has.
  SDL_GetNumHapticAxes: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // bool SDL_HapticEffectSupported(SDL_Haptic *haptic, const SDL_HapticEffect *effect);                        // Check to see if an effect is supported by a haptic device.
  SDL_HapticEffectSupported: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_HapticEffectID SDL_CreateHapticEffect(SDL_Haptic *haptic, const SDL_HapticEffect *effect);             // Create a new haptic effect on a specified device.
  SDL_CreateHapticEffect: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // bool SDL_UpdateHapticEffect(SDL_Haptic *haptic, SDL_HapticEffectID effect, const SDL_HapticEffect *data);  // Update the properties of an effect.
  SDL_UpdateHapticEffect: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_RunHapticEffect(SDL_Haptic *haptic, SDL_HapticEffectID effect, Uint32 iterations);                // Run the haptic effect on its associated haptic device.
  SDL_RunHapticEffect: {
    args: [FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_StopHapticEffect(SDL_Haptic *haptic, SDL_HapticEffectID effect);                                  // Stop the haptic effect on its associated haptic device.
  SDL_StopHapticEffect: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // void SDL_DestroyHapticEffect(SDL_Haptic *haptic, SDL_HapticEffectID effect);                               // Destroy a haptic effect on the device.
  SDL_DestroyHapticEffect: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // bool SDL_GetHapticEffectStatus(SDL_Haptic *haptic, SDL_HapticEffectID effect);                             // Get the status of the current effect on the specified haptic device.
  SDL_GetHapticEffectStatus: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SetHapticGain(SDL_Haptic *haptic, int gain);                                                      // Set the global gain of the specified haptic device.
  SDL_SetHapticGain: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SetHapticAutocenter(SDL_Haptic *haptic, int autocenter);                                          // Set the global autocenter of the device.
  SDL_SetHapticAutocenter: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_PauseHaptic(SDL_Haptic *haptic);                                                                  // Pause a haptic device.
  SDL_PauseHaptic: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ResumeHaptic(SDL_Haptic *haptic);                                                                 // Resume a haptic device.
  SDL_ResumeHaptic: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_StopHapticEffects(SDL_Haptic *haptic);                                                            // Stop all the currently playing effects on a haptic device.
  SDL_StopHapticEffects: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_HapticRumbleSupported(SDL_Haptic *haptic);                                                        // Check whether rumble is supported on a haptic device.
  SDL_HapticRumbleSupported: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_InitHapticRumble(SDL_Haptic *haptic);                                                             // Initialize a haptic device for simple rumble playback.
  SDL_InitHapticRumble: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_PlayHapticRumble(SDL_Haptic *haptic, float strength, Uint32 length);                              // Run a simple rumble effect on a haptic device.
  SDL_PlayHapticRumble: {
    args: [FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_StopHapticRumble(SDL_Haptic *haptic);                                                             // Stop the simple rumble on a haptic device.
  SDL_StopHapticRumble: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
