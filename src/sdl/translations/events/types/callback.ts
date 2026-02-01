import type { Event } from '../struct';

/**
 * Event filter callback function.
 *
 * The callback receives userdata and an event, and should return
 * true to keep the event in the queue, false to drop it.
 *
 * @param userdata - User data pointer passed when setting the filter
 * @param event - The event to filter
 * @returns true to keep the event, false to drop it
 */
export interface EventFilterCallbackFn {
  (event: Event): boolean;
}
