import { CString, read, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';
import { AudioBuffer, AudioSpec } from '../utility';

export function getNumAudioDrivers(this: SDL) {
  return this.symbols.SDL_GetNumAudioDrivers();
}

export function getAudioDriver(this: SDL, index: number) {
  return this.symbols.SDL_GetAudioDriver(index);
}

export function getCurrentAudioDriver(this: SDL) {
  return this.symbols.SDL_GetCurrentAudioDriver();
}

export function getAudioPlaybackDevices(this: SDL) {
  const struct = new CStruct(CStruct.BYTE_SIZE.i32);

  const listPtr = this.symbols.SDL_GetAudioPlaybackDevices(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct(count * CStruct.BYTE_SIZE.u32, listPtr);
  const devices: number[] = [];

  for (let i = 0; i < count; i++) {
    const deviceId = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    devices.push(deviceId);
  }

  this.symbols.SDL_free(listPtr);

  return devices;
}

export function getAudioRecordingDevices(this: SDL) {
  const struct = new CStruct(CStruct.BYTE_SIZE.i32);

  const listPtr = this.symbols.SDL_GetAudioRecordingDevices(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct(count * CStruct.BYTE_SIZE.u32, listPtr);
  const devices: number[] = [];

  for (let i = 0; i < count; i++) {
    const deviceId = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    devices.push(deviceId);
  }

  this.symbols.SDL_free(listPtr);

  return devices;
}

export function getAudioDeviceName(this: SDL, deviceId: number) {
  return this.symbols.SDL_GetAudioDeviceName(deviceId);
}

export function getAudioDeviceFormat(
  this: SDL,
  options: {
    deviceId: number;
    spec?: AudioSpec | Pointer | null;
  }
) {
  let specPtr: Pointer;
  let specInstance: AudioSpec | null = null;

  if (options.spec instanceof AudioSpec) {
    specPtr = options.spec.$address;
    specInstance = options.spec;
  } else if (options.spec) {
    specPtr = options.spec;
  } else {
    specInstance = new AudioSpec(AudioSpec.allocMemory());
    specPtr = specInstance.$address;
  }

  const sampleFrames = new CStruct(CStruct.BYTE_SIZE.i32);

  const success = this.symbols.SDL_GetAudioDeviceFormat(
    options.deviceId,
    specPtr,
    sampleFrames.$address
  );

  if (!success) return null;

  return {
    spec: specInstance ?? new AudioSpec(specPtr),
    sampleFrames: sampleFrames.getValue(0, 'i32'),
  };
}

export function getAudioDeviceChannelMap(this: SDL, deviceId: number) {
  const struct = new CStruct(CStruct.BYTE_SIZE.i32);

  const listPtr = this.symbols.SDL_GetAudioDeviceChannelMap(
    deviceId,
    struct.$address
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const list = new CStruct(count * CStruct.BYTE_SIZE.i32, listPtr);
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
    spec: AudioSpec | Pointer;
  }
) {
  const addr =
    options.spec instanceof AudioSpec ? options.spec.$address : options.spec;

  return this.symbols.SDL_OpenAudioDevice(options.deviceId, addr);
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
    srcSpec: AudioSpec | Pointer;
    dstSpec: AudioSpec | Pointer;
  }
) {
  const srcAddr =
    options.srcSpec instanceof AudioSpec
      ? options.srcSpec.$address
      : options.srcSpec;

  const dstAddr =
    options.dstSpec instanceof AudioSpec
      ? options.dstSpec.$address
      : options.dstSpec;

  return this.symbols.SDL_CreateAudioStream(srcAddr, dstAddr);
}

export function getAudioStreamProperties(this: SDL, stream: Pointer) {
  return this.symbols.SDL_GetAudioStreamProperties(stream);
}

export function getAudioStreamFormat(
  this: SDL,
  options: {
    stream: Pointer;
    srcSpec?: AudioSpec | Pointer | null;
    dstSpec?: AudioSpec | Pointer | null;
  }
) {
  let srcAddr: Pointer;
  let srcSpecInstance: AudioSpec | null = null;

  let dstAddr: Pointer;
  let dstSpecInstance: AudioSpec | null = null;

  if (options.srcSpec instanceof AudioSpec) {
    srcAddr = options.srcSpec.$address;
    srcSpecInstance = options.srcSpec;
  } else if (options.srcSpec) {
    srcAddr = options.srcSpec;
  } else {
    srcSpecInstance = new AudioSpec(AudioSpec.allocMemory());
    srcAddr = srcSpecInstance.$address;
  }

  if (options.dstSpec instanceof AudioSpec) {
    dstAddr = options.dstSpec.$address;
    dstSpecInstance = options.dstSpec;
  } else if (options.dstSpec) {
    dstAddr = options.dstSpec;
  } else {
    dstSpecInstance = new AudioSpec(AudioSpec.allocMemory());
    dstAddr = dstSpecInstance.$address;
  }

  const success = this.symbols.SDL_GetAudioStreamFormat(
    options.stream,
    srcAddr,
    dstAddr
  );

  if (!success) return null;

  return {
    srcSpec: srcSpecInstance ?? new AudioSpec(srcAddr),
    dstSpec: dstSpecInstance ?? new AudioSpec(dstAddr),
  };
}

export function setAudioStreamFormat(
  this: SDL,
  options: {
    stream: Pointer;
    srcSpec?: AudioSpec | Pointer | null;
    dstSpec?: AudioSpec | Pointer | null;
  }
) {
  const srcAddr =
    options.srcSpec instanceof AudioSpec
      ? options.srcSpec.$address
      : options.srcSpec;

  const dstAddr =
    options.dstSpec instanceof AudioSpec
      ? options.dstSpec.$address
      : options.dstSpec;

  return this.symbols.SDL_SetAudioStreamFormat(
    options.stream,
    srcAddr ?? null,
    dstAddr ?? null
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
  const struct = new CStruct(CStruct.BYTE_SIZE.i32);
  const listPtr = this.symbols.SDL_GetAudioStreamInputChannelMap(
    stream,
    struct.$address
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const channels: number[] = [];

  for (let i = 0; i < count; i++) {
    channels.push(read.i32(listPtr, i * CStruct.BYTE_SIZE.i32));
  }

  this.symbols.SDL_free(listPtr);

  return channels;
}

export function getAudioStreamOutputChannelMap(this: SDL, stream: Pointer) {
  const struct = new CStruct(CStruct.BYTE_SIZE.i32);
  const listPtr = this.symbols.SDL_GetAudioStreamOutputChannelMap(
    stream,
    struct.$address
  );

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const channels: number[] = [];

  for (let i = 0; i < count; i++) {
    channels.push(read.i32(listPtr, i * CStruct.BYTE_SIZE.i32));
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
    spec: AudioSpec | Pointer | null;
    callback: Pointer | null;
    userdata: Pointer | null;
  }
) {
  const specAddr =
    options.spec instanceof AudioSpec ? options.spec.$address : options.spec;

  return this.symbols.SDL_OpenAudioDeviceStream(
    options.deviceId,
    specAddr,
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
  options: { src: Pointer; closeio: boolean; spec?: AudioSpec | Pointer | null }
) {
  let specInstance: AudioSpec | null = null;
  let specAddr: Pointer;

  if (options.spec instanceof AudioSpec) {
    specAddr = options.spec.$address;
    specInstance = options.spec;
  } else if (options.spec) {
    specAddr = options.spec;
  } else {
    specInstance = new AudioSpec(AudioSpec.allocMemory());
    specAddr = specInstance.$address;
  }

  const audioBuf = new CStruct(CStruct.BYTE_SIZE.ptr);
  const audioLen = new CStruct(CStruct.BYTE_SIZE.u32);

  const success = this.symbols.SDL_LoadWAV_IO(
    options.src,
    options.closeio,
    specAddr,
    audioBuf.$address,
    audioLen.$address
  );
  if (!success) return null;

  return new AudioBuffer({
    sdl: this,
    address: audioBuf.getValue(0, 'ptr'),
    length: audioLen.getValue(0, 'u32'),
    spec: specInstance ?? new AudioSpec(specAddr),
  });
}

export function loadWAV(
  this: SDL,
  options: {
    path: CString;
    spec?: AudioSpec | Pointer | null;
  }
) {
  let specInstance: AudioSpec | null = null;
  let specAddr: Pointer;

  if (options.spec instanceof AudioSpec) {
    specAddr = options.spec.$address;
    specInstance = options.spec;
  } else if (options.spec) {
    specAddr = options.spec;
  } else {
    specInstance = new AudioSpec(AudioSpec.allocMemory());
    specAddr = specInstance.$address;
  }

  const audioBuf = new CStruct(CStruct.BYTE_SIZE.ptr);
  const audioLen = new CStruct(CStruct.BYTE_SIZE.u32);

  const success = this.symbols.SDL_LoadWAV(
    options.path.ptr,
    specAddr,
    audioBuf.$address,
    audioLen.$address
  );

  if (!success) return null;

  return new AudioBuffer({
    sdl: this,
    address: audioBuf.getValue(0, 'ptr'),
    length: audioLen.getValue(0, 'u32'),
    spec: specInstance ?? new AudioSpec(specAddr),
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
    srcSpec: AudioSpec | Pointer;
    srcData: Pointer;
    srcLen: number;
    dstSpec: AudioSpec | Pointer;
  }
) {
  const srcSpecAddr =
    options.srcSpec instanceof AudioSpec
      ? options.srcSpec.$address
      : options.srcSpec;
  const dstSpecAddr =
    options.dstSpec instanceof AudioSpec
      ? options.dstSpec.$address
      : options.dstSpec;

  const dstData = new CStruct(CStruct.BYTE_SIZE.ptr);
  const dstLen = new CStruct(CStruct.BYTE_SIZE.i32);

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
  return this.symbols.SDL_GetAudioFormatName(format);
}

export function getSilenceValueForFormat(this: SDL, format: number) {
  return this.symbols.SDL_GetSilenceValueForFormat(format);
}
