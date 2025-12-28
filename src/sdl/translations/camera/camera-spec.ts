import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import type { Colorspace, PixelFormat } from '../../ffi/pixels/constant';
import type { RawCameraSpec } from './types';

export class CameraSpec implements RawCameraSpec {
  public format: PixelFormat;
  public colorspace: Colorspace;
  public width: number;
  public height: number;
  public framerate_numerator: number;
  public framerate_denominator: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawCameraSpec) {
    this.format = options.format;
    this.colorspace = options.colorspace;
    this.width = options.width;
    this.height = options.height;
    this.framerate_numerator = options.framerate_numerator;
    this.framerate_denominator = options.framerate_denominator;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = CameraSpec.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.format, true);
    view.setUint32(4, this.colorspace, true);
    view.setInt32(8, this.width, true);
    view.setInt32(12, this.height, true);
    view.setInt32(16, this.framerate_numerator, true);
    view.setInt32(20, this.framerate_denominator, true);
  }

  public static allocMemory() {
    const buffer = new Uint8Array(24);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      format: read.u32(pointer, 0),
      colorspace: read.u32(pointer, 4),
      width: read.i32(pointer, 8),
      height: read.i32(pointer, 12),
      framerate_numerator: read.i32(pointer, 16),
      framerate_denominator: read.i32(pointer, 20),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawCameraSpec;

    return new CameraSpec(result);
  }

  public static fromMemory(cameraSpec: Uint8Array) {
    const view = new DataView(
      cameraSpec.buffer,
      cameraSpec.byteOffset,
      cameraSpec.byteLength
    );

    const result = {
      format: view.getUint32(0, true),
      colorspace: view.getUint32(4, true),
      width: view.getInt32(8, true),
      height: view.getInt32(12, true),
      framerate_numerator: view.getInt32(16, true),
      framerate_denominator: view.getInt32(20, true),
      free: null,
      address: null,
    } as RawCameraSpec;

    return new CameraSpec(result);
  }
}
