import type { Pointer } from 'bun:ffi';

/**
 * Callback function for TLS destructor.
 *
 * Called when thread-local storage is cleaned up, allowing you to
 * free any resources associated with the TLS value.
 *
 * @param value - The TLS value being destroyed
 */
export interface TLSDestructorCallbackFn {
  (value: Pointer): void;
}
