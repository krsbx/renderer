import { type FFIFunction, FFIType } from 'bun:ffi';

export const InitDefinition = {
  // bool SDL_Init(SDL_InitFlags flags);                                                               // Initialize the SDL library.
  SDL_Init: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_InitSubSystem(SDL_InitFlags flags);                                                      // Compatibility function to initialize the SDL library.
  SDL_InitSubSystem: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // void SDL_QuitSubSystem(SDL_InitFlags flags);                                                      // Shut down specific SDL subsystems.
  SDL_QuitSubSystem: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  // SDL_InitFlags SDL_WasInit(SDL_InitFlags flags);                                                   // Get a mask of the specified subsystems which are currently initialized.
  SDL_WasInit: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // void SDL_Quit(void);                                                                              // Clean up all initialized subsystems.
  SDL_Quit: {
    args: [],
    returns: FFIType.void,
  },
  // bool SDL_IsMainThread(void);                                                                      // Return whether this is the main thread.
  SDL_IsMainThread: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_RunOnMainThread(SDL_MainThreadCallback callback, void *userdata, bool wait_complete);    // Call a function on the main thread during event processing.
  SDL_RunOnMainThread: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_SetAppMetadata(const char *appname, const char *appversion, const char *appidentifier);  // Specify basic metadata about your app.
  SDL_SetAppMetadata: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_SetAppMetadataProperty(const char *name, const char *value);                             // Specify metadata about your app through a set of properties.
  SDL_SetAppMetadataProperty: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // const char * SDL_GetAppMetadataProperty(const char *name);                                        // Get metadata about your app.
  SDL_GetAppMetadataProperty: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
} satisfies Record<string, FFIFunction>;
