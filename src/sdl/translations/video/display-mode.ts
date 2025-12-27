import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import type { PixelFormat } from '../../ffi/video/constant';
import type { RawDisplayMode } from './types';

export class DisplayMode implements RawDisplayMode {
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
    return new Int32Array([
      this.displayID,
      this.format,
      this.w,
      this.h,
      this.pixelDensity,
      this.refreshRate,
      this.refreshRateNumerator,
      this.refreshRateDenominator,
    ]);
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      displayID: read.u32(pointer, 0),
      format: read.u32(pointer, 4) as PixelFormat,
      w: read.i32(pointer, 8),
      h: read.i32(pointer, 12),
      pixelDensity: read.f32(pointer, 16),
      refreshRate: read.f32(pointer, 20),
      refreshRateNumerator: read.i32(pointer, 24),
      refreshRateDenominator: read.i32(pointer, 28),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawDisplayMode;

    return new DisplayMode(result);
  }

  public static fromMemory(displayMode: Int32Array) {
    const result = {
      displayID: displayMode[0],
      format: displayMode[1] as PixelFormat,
      w: displayMode[2],
      h: displayMode[3],
      pixelDensity: displayMode[4],
      refreshRate: displayMode[5],
      refreshRateNumerator: displayMode[6],
      refreshRateDenominator: displayMode[7],
      free: null,
      address: null,
    } as RawDisplayMode;

    return new DisplayMode(result);
  }
}
