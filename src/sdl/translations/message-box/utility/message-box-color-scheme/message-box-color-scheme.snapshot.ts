import { type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { MessageBoxColor } from '../message-box-color/message-box-color.snapshot';
import type { RawMessageBoxColorScheme } from './types';

export class MessageBoxColorScheme implements RawMessageBoxColorScheme {
  public static readonly BYTE_SIZE = 15;

  public colors: MessageBoxColor[];
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawMessageBoxColorScheme) {
    this.colors = options.colors;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = MessageBoxColorScheme.allocMemory();
    // Pack 5 colors into 15 bytes
    for (let i = 0; i < 5; i++) {
      const color = this.colors[i];

      if (!color) continue;

      const colorBuf = color.toMemory();

      buffer.set(colorBuf, i * MessageBoxColor.BYTE_SIZE);
    }
    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const colors: MessageBoxColor[] = [];

    for (let i = 0; i < 5; i++) {
      const offset = BigInt(i) * BigInt(MessageBoxColor.BYTE_SIZE);
      const colorPtr = (BigInt(pointer) + offset) as unknown as Pointer | null;

      if (!colorPtr) continue;

      colors.push(MessageBoxColor.fromPointer(colorPtr, sdl));
    }

    return new MessageBoxColorScheme({
      colors,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    });
  }

  public static fromMemory(data: Uint8Array) {
    const colors: MessageBoxColor[] = [];

    for (let i = 0; i < 5; i++) {
      const start = i * MessageBoxColor.BYTE_SIZE;
      const end = start + MessageBoxColor.BYTE_SIZE;

      const colorBuf = data.slice(start, end);
      const color = MessageBoxColor.fromMemory(colorBuf);

      colors.push(color);
    }

    return new MessageBoxColorScheme({
      colors,
      free: null,
      address: null,
    });
  }
}
