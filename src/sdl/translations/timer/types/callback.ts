/**
 * Callback function for millisecond timers.
 *
 * The callback receives the current timer ID and interval, and should return
 * the next timer interval in milliseconds. Return 0 to cancel the timer.
 *
 * @param timerID - The current timer being processed
 * @param interval - The current callback time interval in milliseconds
 * @returns The next callback interval in ms, or 0 to cancel the timer
 */
export interface TimerCallbackFn {
  (options: { timerID: number; interval: number }): number;
}

/**
 * Callback function for nanosecond timers.
 *
 * The callback receives the current timer ID and interval, and should return
 * the next timer interval in nanoseconds. Return 0n to cancel the timer.
 *
 * @param timerID - The current timer being processed
 * @param interval - The current callback time interval in nanoseconds
 * @returns The next callback interval in ns, or 0n to cancel the timer
 */
export interface NSTimerCallbackFn {
  (options: { timerID: number; interval: bigint }): bigint;
}
