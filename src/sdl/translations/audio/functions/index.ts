import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructAddress, stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import { AudioBuffer, AudioSpec } from '../utility';

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
  const list = new CStruct({ address: listPtr });
  const devices: number[] = [];

  for (let i = 0; i < count; i++) {
    const deviceId = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    devices.push(deviceId);
  }

  this.symbols.SDL_free(listPtr);

  return devices;
}

export function getAudioRecordingDevices(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetAudioRecordingDevices(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const devices: number[] = [];

  for (let i = 0; i < count; i++) {
    const deviceId = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    devices.push(deviceId);
  }

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
  const specInstance = options.spec ?? new AudioSpec(AudioSpec.allocMemory());
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

  const list = new CStruct({ address: listPtr });
  const channels: number[] = [];

  for (let i = 0; i < count; i++) {
    const channel = list.getValue(i * CStruct.BYTE_SIZE.i32, 'i32');

    channels.push(channel);
  }

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
    getStructAddress(options.spec)
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
    streams: Pointer;
    streamsCount: number;
  }
) {
  return this.symbols.SDL_BindAudioStreams(
    options.deviceId,
    options.streams,
    options.streamsCount
  );
}

export function bindAudioStream(
  this: SDL,
  options: {
    deviceId: number;
    stream: Pointer;
  }
) {
  return this.symbols.SDL_BindAudioStream(options.deviceId, options.stream);
}

export function unbindAudioStreams(
  this: SDL,
  options: {
    streams: Pointer;
    streamsCount: number;
  }
) {
  this.symbols.SDL_UnbindAudioStreams(options.streams, options.streamsCount);
}

export function unbindAudioStream(this: SDL, stream: Pointer) {
  this.symbols.SDL_UnbindAudioStream(stream);
}

export function getAudioStreamDevice(this: SDL, stream: Pointer) {
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
    getStructAddress(options.srcSpec),
    getStructAddress(options.dstSpec)
  );
}

export function getAudioStreamProperties(this: SDL, stream: Pointer) {
  return this.symbols.SDL_GetAudioStreamProperties(stream);
}

export function getAudioStreamFormat(
  this: SDL,
  options: {
    stream: Pointer;
    srcSpec?: AudioSpec | null;
    dstSpec?: AudioSpec | null;
  }
) {
  const srcSpecInstance =
    options.srcSpec ?? new AudioSpec(AudioSpec.allocMemory());
  const dstSpecInstance =
    options.dstSpec ?? new AudioSpec(AudioSpec.allocMemory());

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
    stream: Pointer;
    srcSpec?: AudioSpec | null;
    dstSpec?: AudioSpec | null;
  }
) {
  return this.symbols.SDL_SetAudioStreamFormat(
    options.stream,
    options.srcSpec ? getStructAddress(options.srcSpec) : null,
    options.dstSpec ? getStructAddress(options.dstSpec) : null
  );
}

export function getAudioStreamFrequencyRatio(this: SDL, stream: Pointer) {
  return this.symbols.SDL_GetAudioStreamFrequencyRatio(stream);
}

export function setAudioStreamFrequencyRatio(
  this: SDL,
  options: {
    stream: Pointer;
    ratio: number;
  }
) {
  return this.symbols.SDL_SetAudioStreamFrequencyRatio(
    options.stream,
    options.ratio
  );
}

export function getAudioStreamGain(this: SDL, stream: Pointer) {
  return this.symbols.SDL_GetAudioStreamGain(stream);
}

export function setAudioStreamGain(
  this: SDL,
  options: {
    stream: Pointer;
    gain: number;
  }
) {
  return this.symbols.SDL_SetAudioStreamGain(options.stream, options.gain);
}

export function getAudioStreamInputChannelMap(this: SDL, stream: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const listPtr = this.symbols.SDL_GetAudioStreamInputChannelMap(
    stream,
    struct.$address
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const channels: number[] = [];

  for (let i = 0; i < count; i++) {
    const channel = list.getValue(i * CStruct.BYTE_SIZE.i32, 'i32');

    channels.push(channel);
  }

  this.symbols.SDL_free(listPtr);

  return channels;
}

export function getAudioStreamOutputChannelMap(this: SDL, stream: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const listPtr = this.symbols.SDL_GetAudioStreamOutputChannelMap(
    stream,
    struct.$address
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const channels: number[] = [];

  for (let i = 0; i < count; i++) {
    const channel = list.getValue(i * CStruct.BYTE_SIZE.i32, 'i32');

    channels.push(channel);
  }

  this.symbols.SDL_free(listPtr);

  return channels;
}

export function setAudioStreamInputChannelMap(
  this: SDL,
  options: {
    stream: Pointer;
    chmap: Pointer;
    count: number;
  }
) {
  return this.symbols.SDL_SetAudioStreamInputChannelMap(
    options.stream,
    options.chmap,
    options.count
  );
}

export function setAudioStreamOutputChannelMap(
  this: SDL,
  options: {
    stream: Pointer;
    chmap: Pointer;
    count: number;
  }
) {
  return this.symbols.SDL_SetAudioStreamOutputChannelMap(
    options.stream,
    options.chmap,
    options.count
  );
}

export function putAudioStreamData(
  this: SDL,
  options: {
    stream: Pointer;
    buf: Pointer;
    len: number;
  }
) {
  return this.symbols.SDL_PutAudioStreamData(
    options.stream,
    options.buf,
    options.len
  );
}

export function putAudioStreamDataNoCopy(
  this: SDL,
  options: {
    stream: Pointer;
    buf: Pointer;
    len: number;
    callback: Pointer;
    userdata: Pointer | null;
  }
) {
  return this.symbols.SDL_PutAudioStreamDataNoCopy(
    options.stream,
    options.buf,
    options.len,
    options.callback,
    options.userdata
  );
}

export function putAudioStreamPlanarData(
  this: SDL,
  options: {
    stream: Pointer;
    channelBuffers: Pointer;
    numChannels: number;
    numSamples: number;
  }
) {
  return this.symbols.SDL_PutAudioStreamPlanarData(
    options.stream,
    options.channelBuffers,
    options.numChannels,
    options.numSamples
  );
}

export function getAudioStreamData(
  this: SDL,
  options: { stream: Pointer; buf: Pointer; len: number }
) {
  return this.symbols.SDL_GetAudioStreamData(
    options.stream,
    options.buf,
    options.len
  );
}

export function getAudioStreamAvailable(this: SDL, stream: Pointer) {
  return this.symbols.SDL_GetAudioStreamAvailable(stream);
}

export function getAudioStreamQueued(this: SDL, stream: Pointer) {
  return this.symbols.SDL_GetAudioStreamQueued(stream);
}

export function flushAudioStream(this: SDL, stream: Pointer) {
  return this.symbols.SDL_FlushAudioStream(stream);
}

export function clearAudioStream(this: SDL, stream: Pointer) {
  return this.symbols.SDL_ClearAudioStream(stream);
}

export function pauseAudioStreamDevice(this: SDL, stream: Pointer) {
  return this.symbols.SDL_PauseAudioStreamDevice(stream);
}

export function resumeAudioStreamDevice(this: SDL, stream: Pointer) {
  return this.symbols.SDL_ResumeAudioStreamDevice(stream);
}

export function audioStreamDevicePaused(this: SDL, stream: Pointer) {
  return this.symbols.SDL_AudioStreamDevicePaused(stream);
}

export function lockAudioStream(this: SDL, stream: Pointer) {
  return this.symbols.SDL_LockAudioStream(stream);
}

export function unlockAudioStream(this: SDL, stream: Pointer) {
  return this.symbols.SDL_UnlockAudioStream(stream);
}

export function setAudioStreamGetCallback(
  this: SDL,
  options: { stream: Pointer; callback: Pointer; userdata: Pointer | null }
) {
  return this.symbols.SDL_SetAudioStreamGetCallback(
    options.stream,
    options.callback,
    options.userdata
  );
}

export function setAudioStreamPutCallback(
  this: SDL,
  options: { stream: Pointer; callback: Pointer; userdata: Pointer | null }
) {
  return this.symbols.SDL_SetAudioStreamPutCallback(
    options.stream,
    options.callback,
    options.userdata
  );
}

export function destroyAudioStream(this: SDL, stream: Pointer) {
  this.symbols.SDL_DestroyAudioStream(stream);
}

export function openAudioDeviceStream(
  this: SDL,
  options: {
    deviceId: number;
    spec: AudioSpec | null;
    callback: Pointer | null;
    userdata: Pointer | null;
  }
) {
  return this.symbols.SDL_OpenAudioDeviceStream(
    options.deviceId,
    options.spec ? getStructAddress(options.spec) : null,
    options.callback,
    options.userdata ?? null
  );
}

export function setAudioPostmixCallback(
  this: SDL,
  options: { deviceId: number; callback: Pointer; userdata: Pointer | null }
) {
  return this.symbols.SDL_SetAudioPostmixCallback(
    options.deviceId,
    options.callback,
    options.userdata
  );
}

export function loadWAV_IO(
  this: SDL,
  options: { src: Pointer; closeio: boolean; spec?: AudioSpec | null }
) {
  const specInstance = options.spec ?? new AudioSpec(AudioSpec.allocMemory());
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
  const specInstance = options.spec ?? new AudioSpec(AudioSpec.allocMemory());
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
    dst: Pointer;
    src: Pointer;
    format: number;
    len: number;
    volume: number;
  }
) {
  return this.symbols.SDL_MixAudio(
    options.dst,
    options.src,
    options.format,
    options.len,
    options.volume
  );
}

export function convertAudioSamples(
  this: SDL,
  options: {
    srcSpec: AudioSpec;
    srcData: Pointer;
    srcLen: number;
    dstSpec: AudioSpec;
  }
) {
  const srcSpecAddr = getStructAddress(options.srcSpec);
  const dstSpecAddr = getStructAddress(options.dstSpec);

  const dstData = new CStruct({ length: CStruct.BYTE_SIZE.ptr });
  const dstLen = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_ConvertAudioSamples(
    srcSpecAddr,
    options.srcData,
    options.srcLen,
    dstSpecAddr,
    dstData.$address,
    dstLen.$address
  );

  if (!success) return null;

  return new AudioBuffer({
    sdl: this,
    address: dstData.getValue(0, 'ptr'),
    length: dstLen.getValue(0, 'i32'),
    spec:
      options.dstSpec instanceof AudioSpec
        ? options.dstSpec
        : new AudioSpec(dstSpecAddr),
  });
}

export function getAudioFormatName(this: SDL, format: number) {
  return this.symbols.SDL_GetAudioFormatName(format).toString();
}

export function getSilenceValueForFormat(this: SDL, format: number) {
  return this.symbols.SDL_GetSilenceValueForFormat(format);
}
