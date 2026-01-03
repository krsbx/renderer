import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { RawVirtualJoystickTouchpadDesc } from './types';

export class VirtualJoystickTouchpadDesc
  implements RawVirtualJoystickTouchpadDesc
{
  public static readonly BYTE_SIZE = 8;

  public nfingers: number;
  public padding: [padding1: number, padding2: number, padding3: number];
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawVirtualJoystickTouchpadDesc) {
    this.nfingers = options.nfingers;
    this.padding = options.padding;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = VirtualJoystickTouchpadDesc.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt16(0, this.nfingers, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      nfingers: read.i16(pointer, 0),
      padding: [read.u8(pointer, 2), read.u8(pointer, 4), read.u8(pointer, 6)],
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawVirtualJoystickTouchpadDesc;

    return new VirtualJoystickTouchpadDesc(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      nfingers: view.getInt16(0, true),
      padding: [
        view.getInt16(2, true),
        view.getInt16(4, true),
        view.getInt16(6, true),
      ],
      free: null,
      address: null,
    } as RawVirtualJoystickTouchpadDesc;

    return new VirtualJoystickTouchpadDesc(result);
  }
}
