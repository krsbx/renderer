import type { TrayEntry } from '@/sdl/types/definition';

/**
 * Callback function invoked when a tray entry is selected.
 *
 * @param entry - The tray entry that was selected
 */
export interface TrayCallbackFn {
  (entry: TrayEntry): void;
}
