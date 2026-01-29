import { CStruct } from '@/utility/cstruct';
import { FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { AudioStream } from '../../struct';
import type { AudioCallbackFn } from './types';

export type RegistryKey = {
  usedOn?: AudioStream;
  type: 'AudioStream' | 'AudioStreamProcessor' | 'AudioMixedProcessor';
};

export class CallbackManager {
  private static $registry?: Map<RegistryKey, JSCallback>;

  private static get registry() {
    if (this.$registry) return this.$registry;

    this.$registry = new Map();

    return this.$registry;
  }

  public static register(identifier: RegistryKey, callback: JSCallback) {
    this.registry.get(identifier)?.close?.();
    this.registry.set(identifier, callback);
  }

  public static unregister(identifier: RegistryKey) {
    this.registry.get(identifier)?.close?.();
    this.registry.delete(identifier);
  }

  public static createAudioCallback(callback: AudioCallbackFn) {
    return new JSCallback(
      (bufferData: Pointer, frames: number) => {
        const buffer = CStruct.readArrayPrimitive(bufferData, frames, 'u8');

        return callback(buffer);
      },
      {
        args: [FFIType.ptr, FFIType.u32],
        returns: FFIType.bool,
      }
    );
  }

  public static createRegistryIdentifier<T extends RegistryKey>(identifier: T) {
    return identifier;
  }

  public static getAudioCallback(identifier: RegistryKey) {
    return this.registry.get(identifier);
  }
}
