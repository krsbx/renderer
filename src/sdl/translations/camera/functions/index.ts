import { type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type {
  CameraPermissionState,
  CameraPosition,
} from '../../../ffi/camera/constant';
import { CStruct } from '../../../utility/cstruct';
import { Surface } from '../../surface/utility';
import { CameraSpec } from '../utility';

export function getNumCameraDrivers(this: SDL) {
  return this.symbols.SDL_GetNumCameraDrivers();
}

export function getCameraDriver(this: SDL, index: number) {
  return this.symbols.SDL_GetCameraDriver(index);
}

export function getCurrentCameraDriver(this: SDL) {
  return this.symbols.SDL_GetCurrentCameraDriver();
}

export function getCameras(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetCameras(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const cameras: number[] = [];

  for (let i = 0; i < count; i++) {
    const camera = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    cameras.push(camera);
  }

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
  const list = new CStruct({ address: listPtr });
  const formats: CameraSpec[] = [];

  for (let i = 0; i < count; i++) {
    const formatPtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (!formatPtr) continue;

    const format = new CameraSpec(formatPtr);

    formats.push(format);
  }

  this.symbols.SDL_free(listPtr);

  return formats;
}

export function getCameraName(this: SDL, cameraId: number) {
  return this.symbols.SDL_GetCameraName(cameraId);
}

export function getCameraPosition(this: SDL, cameraId: number) {
  return this.symbols.SDL_GetCameraPosition(cameraId) as CameraPosition;
}

export function openCamera(
  this: SDL,
  options: {
    cameraId: number;
    spec?: CameraSpec | Pointer | null;
  }
) {
  let specPtr: Pointer;
  let specInstance: CameraSpec | null = null;

  if (options.spec instanceof CameraSpec) {
    specPtr = options.spec.$address;
    specInstance = options.spec;
  } else if (options.spec) {
    specPtr = options.spec;
  } else {
    specInstance = new CameraSpec(CameraSpec.allocMemory());
    specPtr = specInstance.$address;
  }

  const camera = this.symbols.SDL_OpenCamera(options.cameraId, specPtr);

  if (!camera) return null;

  return {
    camera,
    spec: specInstance ?? new CameraSpec(specPtr),
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
    spec?: CameraSpec | Pointer | null;
  }
) {
  let specPtr: Pointer;
  let specInstance: CameraSpec | null = null;

  if (options.spec instanceof CameraSpec) {
    specPtr = options.spec.$address;
    specInstance = options.spec;
  } else if (options.spec) {
    specPtr = options.spec;
  } else {
    specInstance = new CameraSpec(CameraSpec.allocMemory());
    specPtr = specInstance.$address;
  }

  const success = this.symbols.SDL_GetCameraFormat(options.camera, specPtr);

  if (!success) return null;

  return specInstance ?? new CameraSpec(specPtr);
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
    surface: Surface | Pointer;
  }
) {
  const surfacePtr =
    options.surface instanceof Surface
      ? options.surface.$address
      : options.surface;

  this.symbols.SDL_ReleaseCameraFrame(options.camera, surfacePtr);
}

export function closeCamera(this: SDL, camera: Pointer) {
  this.symbols.SDL_CloseCamera(camera);
}
