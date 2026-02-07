import type { AudioDeviceID, AudioStream } from '@/sdl/types/definition';
import { CallbackManager } from '@/sdl/utility';
import type { Int32 } from '@/types/primitive';
import { FFIType, JSCallback, toArrayBuffer, type Pointer } from 'bun:ffi';
import { AudioSpec } from '../struct';
import type {
  AudioPostmixCallbackFn,
  AudioStreamCallbackFn,
  AudioStreamDataCompleteCallbackFn,
} from '../types/callback';

export const AudioStreamPrefix = {
  get: 'audio:stream:get:',
  put: 'audio:stream:put:',
  device: 'audio:stream:device:',
} as const;

export const AudioPostmixPrefix = 'audio:postmix:';

export const AudioNoCopyPrefix = 'audio:nocopy:';

export function getNoCopyRegistryKey() {
  return `${AudioNoCopyPrefix}${Date.now()}:${Math.random()}` as const;
}

export function createNoCopyCallback(
  callback: AudioStreamDataCompleteCallbackFn
) {
  const key = getNoCopyRegistryKey();

  const cb = new JSCallback(
    (_: Pointer, buf: Pointer, len: number) => {
      const buffer = new Uint8Array(toArrayBuffer(buf, 0, len));

      callback(buffer);

      // Auto-cleanup after callback is invoked
      CallbackManager.unregister(key);
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
      returns: FFIType.void,
    }
  );

  return {
    cb,
    key,
  };
}

export function getStreamRegistryKey(
  stream: AudioStream,
  type: keyof typeof AudioStreamPrefix
) {
  return `${AudioStreamPrefix[type]}${stream}` as const;
}

export function createStreamCallback(callback: AudioStreamCallbackFn) {
  const cb = new JSCallback(
    (
      _: Pointer,
      stream: Pointer,
      additionalAmount: Int32,
      totalAmount: Int32
    ) => {
      callback({
        stream,
        additionalAmount,
        totalAmount,
      });
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32],
      returns: FFIType.void,
    }
  );

  return cb;
}

export function getPostmixRegistryKey(deviceId: AudioDeviceID) {
  return `${AudioPostmixPrefix}${deviceId}` as const;
}

export function createPostmixCallback(callback: AudioPostmixCallbackFn) {
  const cb = new JSCallback(
    (_: Pointer, specPtr: Pointer, bufferPtr: Pointer, buflen: number) => {
      const spec = new AudioSpec(specPtr);
      const buffer = new Float32Array(toArrayBuffer(bufferPtr, 0, buflen));

      callback({
        spec,
        buffer,
      });
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32],
      returns: FFIType.void,
    }
  );

  return cb;
}
