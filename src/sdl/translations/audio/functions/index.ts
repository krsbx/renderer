import type { SDL } from '@/sdl';
import type { AudioStream, IOStream } from '@/sdl/types/definition';
import { CallbackManager } from '@/sdl/utility';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { ptr } from 'bun:ffi';
import { AudioBuffer, AudioSpec } from '../struct';
import type {
  AudioPostmixCallbackFn,
  AudioStreamCallbackFn,
  AudioStreamDataCompleteCallbackFn,
} from '../types/callback';
import {
  createNoCopyCallback,
  createPostmixCallback,
  createStreamCallback,
  getPostmixRegistryKey,
  getStreamRegistryKey,
} from '../utility/callback';

export function getNumAudioDrivers(this: SDL) {
  return this.symbols.SDL_GetNumAudioDrivers();
}

export function getAudioDriver(this: SDL, index: number) {
  return this.symbols.SDL_GetAudioDriver(index).toString();
}

export function getCurrentAudioDriver(this: SDL) {
  return this.symbols.SDL_GetCurrentAudioDriver().toString();
}

export function getAudioPlaybackDevices(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetAudioPlaybackDevices(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const devices = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return devices;
}

export function getAudioRecordingDevices(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetAudioRecordingDevices(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const devices = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return devices;
}

export function getAudioDeviceName(this: SDL, deviceId: number) {
  return this.symbols.SDL_GetAudioDeviceName(deviceId).toString();
}

export function getAudioDeviceFormat(
  this: SDL,
  options: {
    deviceId: number;
    spec?: AudioSpec | null;
  }
) {
  const specInstance = options.spec ?? AudioSpec.create();
  const sampleFrames = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetAudioDeviceFormat(
    options.deviceId,
    specInstance.$address,
    sampleFrames.$address
  );

  if (!success) return null;

  return {
    spec: specInstance,
    sampleFrames: sampleFrames.getValue(0, 'i32'),
  };
}

export function getAudioDeviceChannelMap(this: SDL, deviceId: number) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetAudioDeviceChannelMap(
    deviceId,
    struct.$address
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const channels = CStruct.readArrayPrimitive(listPtr, count, 'i32');

  this.symbols.SDL_free(listPtr);

  return channels;
}

export function openAudioDevice(
  this: SDL,
  options: {
    deviceId: number;
    spec: AudioSpec;
  }
) {
  return this.symbols.SDL_OpenAudioDevice(
    options.deviceId,
    options.spec.$address
  );
}

export function isAudioDevicePhysical(this: SDL, deviceId: number) {
  return this.symbols.SDL_IsAudioDevicePhysical(deviceId);
}

export function isAudioDevicePlayback(this: SDL, deviceId: number) {
  return this.symbols.SDL_IsAudioDevicePlayback(deviceId);
}

export function pauseAudioDevice(this: SDL, deviceId: number) {
  return this.symbols.SDL_PauseAudioDevice(deviceId);
}

export function resumeAudioDevice(this: SDL, deviceId: number) {
  return this.symbols.SDL_ResumeAudioDevice(deviceId);
}

export function audioDevicePaused(this: SDL, deviceId: number) {
  return this.symbols.SDL_AudioDevicePaused(deviceId);
}

export function getAudioDeviceGain(this: SDL, deviceId: number) {
  return this.symbols.SDL_GetAudioDeviceGain(deviceId);
}

export function setAudioDeviceGain(
  this: SDL,
  options: {
    deviceId: number;
    gain: number;
  }
) {
  return this.symbols.SDL_SetAudioDeviceGain(options.deviceId, options.gain);
}

export function closeAudioDevice(this: SDL, deviceId: number) {
  this.symbols.SDL_CloseAudioDevice(deviceId);
}

export function bindAudioStreams(
  this: SDL,
  options: {
    deviceId: number;
    streams: AudioStream[];
  }
) {
  const { address } = CStruct.writeArrayPointer(options.streams);

  return this.symbols.SDL_BindAudioStreams(
    options.deviceId,
    address,
    options.streams.length
  );
}

export function bindAudioStream(
  this: SDL,
  options: {
    deviceId: number;
    stream: AudioStream;
  }
) {
  return this.symbols.SDL_BindAudioStream(options.deviceId, options.stream);
}

export function unbindAudioStreams(this: SDL, streams: AudioStream[]) {
  const { address } = CStruct.writeArrayPointer(streams);

  this.symbols.SDL_UnbindAudioStreams(address, streams.length);
}

export function unbindAudioStream(this: SDL, stream: AudioStream) {
  this.symbols.SDL_UnbindAudioStream(stream);
}

export function getAudioStreamDevice(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_GetAudioStreamDevice(stream);
}

export function createAudioStream(
  this: SDL,
  options: {
    srcSpec: AudioSpec;
    dstSpec: AudioSpec;
  }
) {
  return this.symbols.SDL_CreateAudioStream(
    options.srcSpec.$address,
    options.dstSpec.$address
  ) as AudioStream | null;
}

export function getAudioStreamProperties(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_GetAudioStreamProperties(stream);
}

export function getAudioStreamFormat(
  this: SDL,
  options: {
    stream: AudioStream;
    srcSpec?: AudioSpec | null;
    dstSpec?: AudioSpec | null;
  }
) {
  const srcSpecInstance = options.srcSpec ?? AudioSpec.create();
  const dstSpecInstance = options.dstSpec ?? AudioSpec.create();

  const success = this.symbols.SDL_GetAudioStreamFormat(
    options.stream,
    srcSpecInstance.$address,
    dstSpecInstance.$address
  );

  if (!success) return null;

  return {
    srcSpec: srcSpecInstance,
    dstSpec: dstSpecInstance,
  };
}

export function setAudioStreamFormat(
  this: SDL,
  options: {
    stream: AudioStream;
    srcSpec?: AudioSpec | null;
    dstSpec?: AudioSpec | null;
  }
) {
  return this.symbols.SDL_SetAudioStreamFormat(
    options.stream,
    options.srcSpec?.$address ?? null,
    options.dstSpec?.$address ?? null
  );
}

export function getAudioStreamFrequencyRatio(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_GetAudioStreamFrequencyRatio(stream);
}

export function setAudioStreamFrequencyRatio(
  this: SDL,
  options: {
    stream: AudioStream;
    ratio: number;
  }
) {
  return this.symbols.SDL_SetAudioStreamFrequencyRatio(
    options.stream,
    options.ratio
  );
}

export function getAudioStreamGain(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_GetAudioStreamGain(stream);
}

export function setAudioStreamGain(
  this: SDL,
  options: {
    stream: AudioStream;
    gain: number;
  }
) {
  return this.symbols.SDL_SetAudioStreamGain(options.stream, options.gain);
}

export function getAudioStreamInputChannelMap(this: SDL, stream: AudioStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const listPtr = this.symbols.SDL_GetAudioStreamInputChannelMap(
    stream,
    struct.$address
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const channels = CStruct.readArrayPrimitive(listPtr, count, 'i32');

  this.symbols.SDL_free(listPtr);

  return channels;
}

export function getAudioStreamOutputChannelMap(this: SDL, stream: AudioStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const listPtr = this.symbols.SDL_GetAudioStreamOutputChannelMap(
    stream,
    struct.$address
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const channels = CStruct.readArrayPrimitive(listPtr, count, 'i32');

  this.symbols.SDL_free(listPtr);

  return channels;
}

export function setAudioStreamInputChannelMap(
  this: SDL,
  options: {
    stream: AudioStream;
    chmap: Int32Array;
  }
) {
  return this.symbols.SDL_SetAudioStreamInputChannelMap(
    options.stream,
    options.chmap,
    options.chmap.length
  );
}

export function setAudioStreamOutputChannelMap(
  this: SDL,
  options: {
    stream: AudioStream;
    chmap: Int32Array;
  }
) {
  return this.symbols.SDL_SetAudioStreamOutputChannelMap(
    options.stream,
    options.chmap,
    options.chmap.length
  );
}

export function putAudioStreamData(
  this: SDL,
  options: {
    stream: AudioStream;
    buf: Uint8Array;
  }
) {
  return this.symbols.SDL_PutAudioStreamData(
    options.stream,
    options.buf,
    options.buf.byteLength
  );
}

export function putAudioStreamDataNoCopy(
  this: SDL,
  options: {
    stream: AudioStream;
    buf: Uint8Array;
    callback: AudioStreamDataCompleteCallbackFn | null;
  }
) {
  if (!options.callback) {
    return this.symbols.SDL_PutAudioStreamDataNoCopy(
      options.stream,
      options.buf,
      options.buf.byteLength,
      null,
      null
    );
  }

  const { key, cb } = createNoCopyCallback(options.callback);

  const result = this.symbols.SDL_PutAudioStreamDataNoCopy(
    options.stream,
    options.buf,
    options.buf.byteLength,
    cb.ptr,
    null
  );

  if (!result) {
    cb.close();
  } else {
    CallbackManager.register(key, cb);
  }

  return result;
}

export function putAudioStreamPlanarData(
  this: SDL,
  options: {
    stream: AudioStream;
    channelBuffers: Uint8Array[];
    numSamples: number;
  }
) {
  // Convert array of Uint8Arrays to array of pointers
  const pointers = options.channelBuffers.map((buf) => ptr(buf));
  const { address } = CStruct.writeArrayPointer(pointers);

  return this.symbols.SDL_PutAudioStreamPlanarData(
    options.stream,
    address,
    options.channelBuffers.length,
    options.numSamples
  );
}

export function getAudioStreamData(
  this: SDL,
  options: {
    stream: AudioStream;
    buf: Uint8Array;
  }
) {
  const bytesRead = this.symbols.SDL_GetAudioStreamData(
    options.stream,
    options.buf,
    options.buf.byteLength
  );

  return {
    success: bytesRead !== -1,
    buffer: options.buf,
    bytesRead,
  };
}

export function getAudioStreamAvailable(this: SDL, stream: AudioStream) {
  const resampledBytes = this.symbols.SDL_GetAudioStreamAvailable(stream);

  return {
    success: resampledBytes !== -1,
    bytesAvailable: resampledBytes,
  };
}

export function getAudioStreamQueued(this: SDL, stream: AudioStream) {
  const bytesQueued = this.symbols.SDL_GetAudioStreamQueued(stream);

  return {
    success: bytesQueued !== -1,
    bytesQueued,
  };
}

export function flushAudioStream(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_FlushAudioStream(stream);
}

export function clearAudioStream(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_ClearAudioStream(stream);
}

export function pauseAudioStreamDevice(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_PauseAudioStreamDevice(stream);
}

export function resumeAudioStreamDevice(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_ResumeAudioStreamDevice(stream);
}

export function audioStreamDevicePaused(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_AudioStreamDevicePaused(stream);
}

export function lockAudioStream(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_LockAudioStream(stream);
}

export function unlockAudioStream(this: SDL, stream: AudioStream) {
  return this.symbols.SDL_UnlockAudioStream(stream);
}

export function setAudioStreamGetCallback(
  this: SDL,
  options: {
    stream: AudioStream;
    callback: AudioStreamCallbackFn;
  }
) {
  const key = getStreamRegistryKey(options.stream, 'get');
  const cb = createStreamCallback(options.callback);

  const success = this.symbols.SDL_SetAudioStreamGetCallback(
    options.stream,
    cb.ptr,
    null
  );

  if (!success) {
    cb.close();
  } else {
    CallbackManager.register(key, cb);
  }

  return success;
}

export function setAudioStreamPutCallback(
  this: SDL,
  options: {
    stream: AudioStream;
    callback: AudioStreamCallbackFn;
  }
) {
  const key = getStreamRegistryKey(options.stream, 'put');
  const cb = createStreamCallback(options.callback);

  const success = this.symbols.SDL_SetAudioStreamPutCallback(
    options.stream,
    cb.ptr,
    null
  );

  if (!success) {
    cb.close();
  } else {
    CallbackManager.register(key, cb);
  }

  return success;
}

export function destroyAudioStream(this: SDL, stream: AudioStream) {
  this.symbols.SDL_DestroyAudioStream(stream);
}

export function openAudioDeviceStream(
  this: SDL,
  options: {
    deviceId: number;
    spec: AudioSpec | null;
    callback: AudioStreamCallbackFn | null;
  }
) {
  if (!options.callback) {
    return this.symbols.SDL_OpenAudioDeviceStream(
      options.deviceId,
      options.spec?.$address ?? null,
      null,
      null
    );
  }

  const cb = createStreamCallback(options.callback);

  const stream = this.symbols.SDL_OpenAudioDeviceStream(
    options.deviceId,
    options.spec?.$address ?? null,
    cb.ptr,
    null
  );

  if (!stream) {
    cb.close();
  } else {
    const key = getStreamRegistryKey(stream, 'device');

    CallbackManager.register(key, cb);
  }

  return stream;
}

export function setAudioPostmixCallback(
  this: SDL,
  options: {
    deviceId: number;
    callback: AudioPostmixCallbackFn | null;
  }
) {
  if (!options.callback) {
    return this.symbols.SDL_SetAudioPostmixCallback(
      options.deviceId,
      null,
      null
    );
  }

  const key = getPostmixRegistryKey(options.deviceId);
  const cb = createPostmixCallback(options.callback);

  const success = this.symbols.SDL_SetAudioPostmixCallback(
    options.deviceId,
    cb.ptr,
    null
  );

  if (!success) {
    cb.close();
  } else {
    CallbackManager.register(key, cb);
  }

  return success;
}

export function loadWAV_IO(
  this: SDL,
  options: {
    src: IOStream;
    closeio: boolean;
    spec?: AudioSpec | null;
  }
) {
  const specInstance = options.spec ?? AudioSpec.create();
  const audioBuf = new CStruct({ length: CStruct.BYTE_SIZE.ptr });
  const audioLen = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  const success = this.symbols.SDL_LoadWAV_IO(
    options.src,
    options.closeio,
    specInstance.$address,
    audioBuf.$address,
    audioLen.$address
  );

  if (!success) return null;

  return new AudioBuffer({
    sdl: this,
    address: audioBuf.getValue(0, 'ptr'),
    length: audioLen.getValue(0, 'u32'),
    spec: specInstance,
  });
}

export function loadWAV(
  this: SDL,
  options: {
    path: string;
    spec?: AudioSpec | null;
  }
) {
  const specInstance = options.spec ?? AudioSpec.create();
  const audioBuf = new CStruct({ length: CStruct.BYTE_SIZE.ptr });
  const audioLen = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  const success = this.symbols.SDL_LoadWAV(
    stringToCString(options.path).ptr,
    specInstance.$address,
    audioBuf.$address,
    audioLen.$address
  );

  if (!success) return null;

  return new AudioBuffer({
    sdl: this,
    address: audioBuf.getValue(0, 'ptr'),
    length: audioLen.getValue(0, 'u32'),
    spec: specInstance,
  });
}

export function mixAudio(
  this: SDL,
  options: {
    dst: Uint8Array;
    src: Uint8Array;
    format: number;
    volume: number;
  }
) {
  return this.symbols.SDL_MixAudio(
    options.dst,
    options.src,
    options.format,
    options.src.byteLength,
    options.volume
  );
}

export function convertAudioSamples(
  this: SDL,
  options: {
    srcSpec: AudioSpec;
    srcData: Uint8Array;
    dstSpec: AudioSpec;
  }
) {
  const dstData = new CStruct({ length: CStruct.BYTE_SIZE.ptr });
  const dstLen = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_ConvertAudioSamples(
    options.srcSpec.$address,
    options.srcData,
    options.srcData.byteLength,
    options.dstSpec.$address,
    dstData.$address,
    dstLen.$address
  );

  if (!success) return null;

  return new AudioBuffer({
    sdl: this,
    address: dstData.getValue(0, 'ptr'),
    length: dstLen.getValue(0, 'i32'),
    spec: options.dstSpec,
  });
}

export function getAudioFormatName(this: SDL, format: number) {
  return this.symbols.SDL_GetAudioFormatName(format).toString();
}

export function getSilenceValueForFormat(this: SDL, format: number) {
  return this.symbols.SDL_GetSilenceValueForFormat(format);
}
