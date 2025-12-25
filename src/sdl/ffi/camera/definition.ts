import { FFIType, type FFIFunction } from 'bun:ffi';

export const CameraDefinition = {
  // int SDL_GetNumCameraDrivers(void);                                                      // Use this function to get the number of built-in camera drivers.
  SDL_GetNumCameraDrivers: {
    args: [],
    returns: FFIType.i32,
  },
  // const char * SDL_GetCameraDriver(int index);                                            // Use this function to get the name of a built in camera driver.
  SDL_GetCameraDriver: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetCurrentCameraDriver(void);                                          // Get the name of the current camera driver.
  SDL_GetCurrentCameraDriver: {
    args: [],
    returns: FFIType.cstring,
  },
  // SDL_CameraID * SDL_GetCameras(int *count);                                              // Get a list of currently connected camera devices.
  SDL_GetCameras: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_CameraSpec ** SDL_GetCameraSupportedFormats(SDL_CameraID instance_id, int *count);  // Get the list of native formats/sizes a camera supports.
  SDL_GetCameraSupportedFormats: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetCameraName(SDL_CameraID instance_id);                               // Get the human-readable device name for a camera.
  SDL_GetCameraName: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // SDL_CameraPosition SDL_GetCameraPosition(SDL_CameraID instance_id);                     // Get the position of the camera in relation to the system.
  SDL_GetCameraPosition: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // SDL_Camera * SDL_OpenCamera(SDL_CameraID instance_id, const SDL_CameraSpec *spec);      // Open a video recording device (a "camera").
  SDL_OpenCamera: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_CameraPermissionState SDL_GetCameraPermissionState(SDL_Camera *camera);             // Query if camera access has been approved by the user.
  SDL_GetCameraPermissionState: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // SDL_CameraID SDL_GetCameraID(SDL_Camera *camera);                                       // Get the instance ID of an opened camera.
  SDL_GetCameraID: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_PropertiesID SDL_GetCameraProperties(SDL_Camera *camera);                           // Get the properties associated with an opened camera.
  SDL_GetCameraProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // bool SDL_GetCameraFormat(SDL_Camera *camera, SDL_CameraSpec *spec);                     // Get the spec that a camera is using when generating images.
  SDL_GetCameraFormat: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_Surface * SDL_AcquireCameraFrame(SDL_Camera *camera, Uint64 *timestampNS);          // Acquire a frame.
  SDL_AcquireCameraFrame: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_ReleaseCameraFrame(SDL_Camera *camera, SDL_Surface *frame);                    // Release a frame of video acquired from a camera.
  SDL_ReleaseCameraFrame: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_CloseCamera(SDL_Camera *camera);                                               // Use this function to shut down camera processing and close the camera device.
  SDL_CloseCamera: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
