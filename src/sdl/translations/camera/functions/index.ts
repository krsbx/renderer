import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { type Pointer } from 'bun:ffi';
import type {
  CameraPermissionState,
  CameraPosition,
} from '../../../ffi/camera/constant';
import { Surface } from '../../surface/struct';
import { CameraSpec } from '../struct';

export function getNumCameraDrivers(this: SDL) {
  return this.symbols.SDL_GetNumCameraDrivers();
}

export function getCameraDriver(this: SDL, index: number) {
  return this.symbols.SDL_GetCameraDriver(index).toString();
}

export function getCurrentCameraDriver(this: SDL) {
  return this.symbols.SDL_GetCurrentCameraDriver().toString();
}

export function getCameras(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetCameras(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const cameras = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return cameras;
}

export function getCameraSupportedFormats(this: SDL, cameraId: number) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetCameraSupportedFormats(
    cameraId,
    struct.$address
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const formats = CStruct.readArray(CameraSpec, listPtr, count, true);

  this.symbols.SDL_free(listPtr);

  return formats;
}

export function getCameraName(this: SDL, cameraId: number) {
  return this.symbols.SDL_GetCameraName(cameraId).toString();
}

export function getCameraPosition(this: SDL, cameraId: number) {
  return this.symbols.SDL_GetCameraPosition(cameraId) as CameraPosition;
}

export function openCamera(
  this: SDL,
  options: {
    cameraId: number;
    spec?: CameraSpec | null;
  }
) {
  const specInstance = options.spec ?? CameraSpec.create();
  const camera = this.symbols.SDL_OpenCamera(
    options.cameraId,
    specInstance.$address
  );

  if (!camera) return null;

  return {
    camera,
    spec: specInstance,
  };
}

export function getCameraPermissionState(this: SDL, camera: Pointer) {
  return this.symbols.SDL_GetCameraPermissionState(
    camera
  ) as CameraPermissionState;
}

export function getCameraId(this: SDL, camera: Pointer) {
  return this.symbols.SDL_GetCameraID(camera);
}

export function getCameraProperties(this: SDL, camera: Pointer) {
  return this.symbols.SDL_GetCameraProperties(camera);
}

export function getCameraFormat(
  this: SDL,
  options: {
    camera: Pointer;
    spec?: CameraSpec | null;
  }
) {
  const specInstance = options.spec ?? CameraSpec.create();
  const success = this.symbols.SDL_GetCameraFormat(
    options.camera,
    specInstance.$address
  );

  if (!success) return null;

  return specInstance;
}

export function acquireCameraFrame(this: SDL, camera: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const surfacePtr = this.symbols.SDL_AcquireCameraFrame(
    camera,
    struct.$address
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
    camera: Pointer;
    surface: Surface;
  }
) {
  this.symbols.SDL_ReleaseCameraFrame(options.camera, options.surface.$address);
}

export function closeCamera(this: SDL, camera: Pointer) {
  this.symbols.SDL_CloseCamera(camera);
}
