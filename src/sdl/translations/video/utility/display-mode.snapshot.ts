import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { PixelFormat } from '../../../ffi/pixels/constant';
import { ByteOffset } from './constant';
import type { RawDisplayMode } from './types';

export class DisplayMode implements RawDisplayMode {
  public static readonly BYTE_SIZE = 32;

  public displayID: number;
  public format: PixelFormat;
  public w: number;
  public h: number;
  public pixelDensity: number;
  public refreshRate: number;
  public refreshRateNumerator: number;
  public refreshRateDenominator: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawDisplayMode) {
    this.displayID = options.displayID;
    this.format = options.format;
    this.w = options.w;
    this.h = options.h;
    this.pixelDensity = options.pixelDensity;
    this.refreshRate = options.refreshRate;
    this.refreshRateNumerator = options.refreshRateNumerator;
    this.refreshRateDenominator = options.refreshRateDenominator;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = DisplayMode.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(ByteOffset.displayID, this.displayID, true);
    view.setInt32(ByteOffset.format, this.format, true);
    view.setInt32(ByteOffset.w, this.w, true);
    view.setInt32(ByteOffset.h, this.h, true);
    view.setInt32(ByteOffset.pixelDensity, this.pixelDensity, true);
    view.setInt32(ByteOffset.refreshRate, this.refreshRate, true);
    view.setInt32(
      ByteOffset.refreshRateNumerator,
      this.refreshRateNumerator,
      true
    );
    view.setInt32(
      ByteOffset.refreshRateDenominator,
      this.refreshRateDenominator,
      true
    );

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      displayID: read.u32(pointer, ByteOffset.displayID),
      format: read.u32(pointer, ByteOffset.format) as PixelFormat,
      w: read.i32(pointer, ByteOffset.w),
      h: read.i32(pointer, ByteOffset.h),
      pixelDensity: read.f32(pointer, ByteOffset.pixelDensity),
      refreshRate: read.f32(pointer, ByteOffset.refreshRate),
      refreshRateNumerator: read.i32(pointer, ByteOffset.refreshRateNumerator),
      refreshRateDenominator: read.i32(
        pointer,
        ByteOffset.refreshRateDenominator
      ),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawDisplayMode;

    return new DisplayMode(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      displayID: view.getInt32(ByteOffset.displayID, true),
      format: view.getInt32(ByteOffset.format, true) as PixelFormat,
      w: view.getInt32(ByteOffset.w, true),
      h: view.getInt32(ByteOffset.h, true),
      pixelDensity: view.getInt32(ByteOffset.pixelDensity, true),
      refreshRate: view.getInt32(ByteOffset.refreshRate, true),
      refreshRateNumerator: view.getInt32(
        ByteOffset.refreshRateNumerator,
        true
      ),
      refreshRateDenominator: view.getInt32(
        ByteOffset.refreshRateDenominator,
        true
      ),
      free: null,
      address: null,
    } as RawDisplayMode;

    return new DisplayMode(result);
  }
}
