import { JSCallback } from 'bun:ffi';

/**
 * Registry Manager for managing JSCallback lifecycles.
 * Prevents garbage collection of callbacks passed to C code.
 */
export class CallbackManager {
  private static callbacks = new Map<string, JSCallback>();

  /**
   * Register a callback with a unique key.
   * The callback will be kept alive until unregistered.
   */
  public static register(key: string, callback: JSCallback): JSCallback {
    // Clean up existing callback with same key if present
    this.unregister(key);
    this.callbacks.set(key, callback);
    return callback;
  }

  /**
   * Get a registered callback by key.
   */
  public static get(key: string): JSCallback | undefined {
    return this.callbacks.get(key);
  }

  /**
   * Check if a callback is registered with the given key.
   */
  public static has(key: string): boolean {
    return this.callbacks.has(key);
  }

  /**
   * Unregister and close a callback by key.
   */
  public static unregister(key: string): boolean {
    const cb = this.callbacks.get(key);
    if (cb) {
      cb.close();
      this.callbacks.delete(key);
      return true;
    }
    return false;
  }

  /**
   * Unregister all callbacks matching a prefix.
   * Useful for cleaning up all callbacks for a specific resource.
   */
  public static unregisterByPrefix(prefix: string): number {
    let count = 0;
    for (const key of this.callbacks.keys()) {
      if (key.startsWith(prefix)) {
        this.unregister(key);
        count++;
      }
    }
    return count;
  }

  /**
   * Get all registered callback keys.
   */
  public static keys(): IterableIterator<string> {
    return this.callbacks.keys();
  }

  /**
   * Get the number of registered callbacks.
   */
  public static get size(): number {
    return this.callbacks.size;
  }

  /**
   * Close and remove all registered callbacks.
   */
  public static clear(): void {
    for (const cb of this.callbacks.values()) {
      cb.close();
    }
    this.callbacks.clear();
  }
}
