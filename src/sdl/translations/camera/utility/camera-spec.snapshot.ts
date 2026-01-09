import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { Colorspace, PixelFormat } from '../../../ffi/pixels/constant';
import { ByteOffset } from './constant';
import type { RawCameraSpec } from './types';

export class CameraSpec implements RawCameraSpec {
  public static readonly BYTE_SIZE = 24;

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

    view.setUint32(ByteOffset.format, this.format, true);
    view.setUint32(ByteOffset.colorspace, this.colorspace, true);
    view.setInt32(ByteOffset.width, this.width, true);
    view.setInt32(ByteOffset.height, this.height, true);
    view.setInt32(
      ByteOffset.framerate_numerator,
      this.framerate_numerator,
      true
    );
    view.setInt32(
      ByteOffset.framerate_denominator,
      this.framerate_denominator,
      true
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      format: read.u32(pointer, ByteOffset.format),
      colorspace: read.u32(pointer, ByteOffset.colorspace),
      width: read.i32(pointer, ByteOffset.width),
      height: read.i32(pointer, ByteOffset.height),
      framerate_numerator: read.i32(pointer, ByteOffset.framerate_numerator),
      framerate_denominator: read.i32(
        pointer,
        ByteOffset.framerate_denominator
      ),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawCameraSpec;

    return new CameraSpec(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      format: view.getUint32(ByteOffset.format, true),
      colorspace: view.getUint32(ByteOffset.colorspace, true),
      width: view.getInt32(ByteOffset.width, true),
      height: view.getInt32(ByteOffset.height, true),
      framerate_numerator: view.getInt32(ByteOffset.framerate_numerator, true),
      framerate_denominator: view.getInt32(
        ByteOffset.framerate_denominator,
        true
      ),
      free: null,
      address: null,
    } as RawCameraSpec;

    return new CameraSpec(result);
  }
}
