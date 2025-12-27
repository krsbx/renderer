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
    const buffer = DisplayMode.allocMemory();

    buffer[0] = this.displayID;
    buffer[1] = this.format;
    buffer[2] = this.w;
    buffer[3] = this.h;
    buffer[4] = this.pixelDensity;
    buffer[5] = this.refreshRate;
    buffer[6] = this.refreshRateNumerator;
    buffer[7] = this.refreshRateDenominator;

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Int32Array(40);

    return buffer;
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
