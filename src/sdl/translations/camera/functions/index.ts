import type { SDL } from '@/sdl';
import type { Camera, CameraID, PropertiesID } from '@/sdl/types/definition';
import type { Int32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import type {
  CameraPermissionState,
  CameraPosition,
} from '@sdl/ffi/constant/camera';
import { Surface } from '../../surface/struct';
import { CameraSpec } from '../struct';

export function getNumCameraDrivers(this: SDL) {
  return this.symbols.SDL_GetNumCameraDrivers() as Int32;
}

export function getCameraDriver(this: SDL, index: Int32) {
  return this.symbols.SDL_GetCameraDriver(index).toString();
}

export function getCurrentCameraDriver(this: SDL) {
  return this.symbols.SDL_GetCurrentCameraDriver().toString();
}

export function getCameras(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetCameras(struct.$memory);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const cameras = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return cameras;
}

export function getCameraSupportedFormats(this: SDL, cameraId: CameraID) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetCameraSupportedFormats(
    cameraId,
    struct.$memory
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const formats = CStruct.readArray(CameraSpec, listPtr, count, true);

  this.symbols.SDL_free(listPtr);

  return formats;
}

export function getCameraName(this: SDL, cameraId: CameraID) {
  return this.symbols.SDL_GetCameraName(cameraId).toString();
}

export function getCameraPosition(this: SDL, cameraId: CameraID) {
  return this.symbols.SDL_GetCameraPosition(cameraId) as CameraPosition;
}

export function openCamera(
  this: SDL,
  options: {
    cameraId: CameraID;
    spec?: CameraSpec | null;
  }
) {
  const spec = options.spec ?? null;
  const camera = this.symbols.SDL_OpenCamera(
    options.cameraId,
    spec?.$memory ?? null
  );

  if (!camera) return null;

  return camera as Camera;
}

export function getCameraPermissionState(this: SDL, camera: Camera) {
  return this.symbols.SDL_GetCameraPermissionState(
    camera
  ) as CameraPermissionState;
}

export function getCameraId(this: SDL, camera: Camera) {
  return this.symbols.SDL_GetCameraID(camera) as CameraID;
}

export function getCameraProperties(this: SDL, camera: Camera) {
  return this.symbols.SDL_GetCameraProperties(camera) as PropertiesID;
}

export function getCameraFormat(
  this: SDL,
  options: {
    camera: Camera;
    spec?: CameraSpec | null;
  }
) {
  const spec = options.spec ?? CameraSpec.create();
  const success = this.symbols.SDL_GetCameraFormat(
    options.camera,
    spec.$memory
  );

  if (!success) return null;

  return spec;
}

export function acquireCameraFrame(this: SDL, camera: Camera) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const surfacePtr = this.symbols.SDL_AcquireCameraFrame(
    camera,
    struct.$memory
  );

  if (!surfacePtr) return null;

  const timestamp = struct.getValue(0, 'u64');
  const surface = new Surface(surfacePtr);

  return {
    surface,
    timestamp,
  };
}

export function releaseCameraFrame(
  this: SDL,
  options: {
    camera: Camera;
    surface: Surface;
  }
) {
  this.symbols.SDL_ReleaseCameraFrame(options.camera, options.surface.$memory);
}

export function closeCamera(this: SDL, camera: Camera) {
  this.symbols.SDL_CloseCamera(camera);
}
