import { type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { MessageBoxColor } from './message-box-color';
import type { RawMessageBoxColorScheme } from './types';

export class MessageBoxColorScheme implements RawMessageBoxColorScheme {
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

      buffer.set(colorBuf, i * 3);
    }
    return buffer;
  }

  public static allocMemory() {
    return new Uint8Array(15);
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const colors: MessageBoxColor[] = [];

    for (let i = 0; i < 5; i++) {
      // Move pointer by 3 bytes for each color
      const colorPtr = (BigInt(pointer) + BigInt(i * 3)) as unknown as Pointer;
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
      const start = i * 3;
      const end = i * 3 + 3;
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
