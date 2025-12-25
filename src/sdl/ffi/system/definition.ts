import { FFIType, type FFIFunction } from 'bun:ffi';

export const SystemDefinition = {
  // void SDL_SetWindowsMessageHook(SDL_WindowsMessageHook callback, void *userdata);                                             // Set a callback for every Windows message, run before TranslateMessage().
  SDL_SetWindowsMessageHook: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // int SDL_GetDirect3D9AdapterIndex(SDL_DisplayID displayID);                                                                   // Get the D3D9 adapter index that matches the specified display.
  SDL_GetDirect3D9AdapterIndex: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // bool SDL_GetDXGIOutputInfo(SDL_DisplayID displayID, int *adapterIndex, int *outputIndex);                                    // Get the DXGI Adapter and Output indices for the specified display.
  SDL_GetDXGIOutputInfo: {
    args: [FFIType.u32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_SetX11EventHook(SDL_X11EventHook callback, void *userdata);                                                         // Set a callback for every X11 event.
  SDL_SetX11EventHook: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_SetLinuxThreadPriority(Sint64 threadID, int priority);                                                              // Sets the UNIX nice value for a thread.
  SDL_SetLinuxThreadPriority: {
    args: [FFIType.i64, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SetLinuxThreadPriorityAndPolicy(Sint64 threadID, int sdlPriority, int schedPolicy);                                 // Sets the priority (not nice level) and scheduling policy for a thread.
  SDL_SetLinuxThreadPriorityAndPolicy: {
    args: [FFIType.i64, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SetiOSAnimationCallback(SDL_Window *window, int interval, SDL_iOSAnimationCallback callback, void *callbackParam);  // Use this function to set the animation callback on Apple iOS.
  SDL_SetiOSAnimationCallback: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_SetiOSEventPump(bool enabled);                                                                                      // Use this function to enable or disable the SDL event pump on Apple iOS.
  SDL_SetiOSEventPump: {
    args: [FFIType.bool],
    returns: FFIType.void,
  },
  // void * SDL_GetAndroidJNIEnv(void);                                                                                           // Get the Android Java Native Interface Environment of the current thread.
  SDL_GetAndroidJNIEnv: {
    args: [],
    returns: FFIType.ptr,
  },
  // void * SDL_GetAndroidActivity(void);                                                                                         // Retrieve the Java instance of the Android activity class.
  SDL_GetAndroidActivity: {
    args: [],
    returns: FFIType.ptr,
  },
  // int SDL_GetAndroidSDKVersion(void);                                                                                          // Query Android API level of the current device.
  SDL_GetAndroidSDKVersion: {
    args: [],
    returns: FFIType.i32,
  },
  // bool SDL_IsChromebook(void);                                                                                                 // Query if the application is running on a Chromebook.
  SDL_IsChromebook: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_IsDeXMode(void);                                                                                                    // Query if the application is running on a Samsung DeX docking station.
  SDL_IsDeXMode: {
    args: [],
    returns: FFIType.bool,
  },
  // void SDL_SendAndroidBackButton(void);                                                                                        // Trigger the Android system back button behavior.
  SDL_SendAndroidBackButton: {
    args: [],
    returns: FFIType.void,
  },
  // const char * SDL_GetAndroidInternalStoragePath(void);                                                                        // Get the path used for internal storage for this Android application.
  SDL_GetAndroidInternalStoragePath: {
    args: [],
    returns: FFIType.cstring,
  },
  // Uint32 SDL_GetAndroidExternalStorageState(void);                                                                             // Get the current state of external storage for this Android application.
  SDL_GetAndroidExternalStorageState: {
    args: [],
    returns: FFIType.u32,
  },
  // const char * SDL_GetAndroidExternalStoragePath(void);                                                                        // Get the path used for external storage for this Android application.
  SDL_GetAndroidExternalStoragePath: {
    args: [],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetAndroidCachePath(void);                                                                                  // Get the path used for caching data for this Android application.
  SDL_GetAndroidCachePath: {
    args: [],
    returns: FFIType.cstring,
  },
  // bool SDL_RequestAndroidPermission(const char *permission, SDL_RequestAndroidPermissionCallback cb, void *userdata);          // Request permissions at runtime, asynchronously.
  SDL_RequestAndroidPermission: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ShowAndroidToast(const char *message, int duration, int gravity, int xoffset, int yoffset);                         // Shows an Android toast notification.
  SDL_ShowAndroidToast: {
    args: [FFIType.cstring, FFIType.i32, FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SendAndroidMessage(Uint32 command, int param);                                                                      // Send a user command to SDLActivity.
  SDL_SendAndroidMessage: {
    args: [FFIType.u32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_IsTablet(void);                                                                                                     // Query if the current device is a tablet.
  SDL_IsTablet: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_IsTV(void);                                                                                                         // Query if the current device is a TV.
  SDL_IsTV: {
    args: [],
    returns: FFIType.bool,
  },
  // SDL_Sandbox SDL_GetSandbox(void);                                                                                            // Get the application sandbox environment, if any.
  SDL_GetSandbox: {
    args: [],
    returns: FFIType.i32,
  },
  // void SDL_OnApplicationWillTerminate(void);                                                                                   // Let iOS apps with external event handling report onApplicationWillTerminate.
  SDL_OnApplicationWillTerminate: {
    args: [],
    returns: FFIType.void,
  },
  // void SDL_OnApplicationDidReceiveMemoryWarning(void);                                                                         // Let iOS apps with external event handling report onApplicationDidReceiveMemoryWarning.
  SDL_OnApplicationDidReceiveMemoryWarning: {
    args: [],
    returns: FFIType.void,
  },
  // void SDL_OnApplicationWillEnterBackground(void);                                                                             // Let iOS apps with external event handling report onApplicationWillResignActive.
  SDL_OnApplicationWillEnterBackground: {
    args: [],
    returns: FFIType.void,
  },
  // void SDL_OnApplicationDidEnterBackground(void);                                                                              // Let iOS apps with external event handling report onApplicationDidEnterBackground.
  SDL_OnApplicationDidEnterBackground: {
    args: [],
    returns: FFIType.void,
  },
  // void SDL_OnApplicationWillEnterForeground(void);                                                                             // Let iOS apps with external event handling report onApplicationWillEnterForeground.
  SDL_OnApplicationWillEnterForeground: {
    args: [],
    returns: FFIType.void,
  },
  // void SDL_OnApplicationDidEnterForeground(void);                                                                              // Let iOS apps with external event handling report onApplicationDidBecomeActive.
  SDL_OnApplicationDidEnterForeground: {
    args: [],
    returns: FFIType.void,
  },
  // void SDL_OnApplicationDidChangeStatusBarOrientation(void);                                                                   // Let iOS apps with external event handling report onApplicationDidChangeStatusBarOrientation.
  SDL_OnApplicationDidChangeStatusBarOrientation: {
    args: [],
    returns: FFIType.void,
  },
  // bool SDL_GetGDKTaskQueue(XTaskQueueHandle *outTaskQueue);                                                                    // Gets a reference to the global async task queue handle for GDK, initializing if needed.
  SDL_GetGDKTaskQueue: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetGDKDefaultUser(XUserHandle *outUserHandle);                                                                      // Gets a reference to the default user handle for GDK.
  SDL_GetGDKDefaultUser: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
