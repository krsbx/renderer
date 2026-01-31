import type { Scancode } from '@sdl/ffi/constant/scancode';
import { read, type Pointer } from 'bun:ffi';

/**
 * Wrapper for SDL keyboard state array.
 *
 * The internal state pointer is managed by SDL and remains valid
 * for the application's lifetime. Do not free this memory.
 *
 * Use `isPressed()` to check if a key is currently pressed.
 * Call `SDL_PumpEvents()` to update the state before checking.
 */
export class KeyboardState {
  public readonly $address: Pointer;
  public readonly numkeys: number;

  public constructor(state: Pointer, numkeys: number) {
    this.$address = state;
    this.numkeys = numkeys;
  }

  /**
   * Check if a key is currently pressed.
   * @param scancode The scancode of the key to check
   * @returns true if the key is pressed, false otherwise
   */
  public isPressed(scancode: Scancode): boolean {
    return read.u8(this.$address, scancode) !== 0;
  }

  /**
   * Get the raw state value for a scancode.
   * @param scancode The scancode of the key to check
   * @returns 1 if pressed, 0 if not pressed
   */
  public get(scancode: Scancode): number {
    return read.u8(this.$address, scancode);
  }
}
