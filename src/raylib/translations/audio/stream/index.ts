import type { RayLib } from '@/raylib';
import { AudioStream } from '../../struct';
import type { AudioCallbackFn } from './types';
import { CallbackManager } from './utils';

export function loadAudioStream(
  this: RayLib,
  options: {
    sampleRate: number;
    sampleSize: number;
    channels: number;
  }
) {
  const stream = AudioStream.create();

  this.symbols.LoadAudioStream(
    options.sampleRate,
    options.sampleSize,
    options.channels,
    stream.$memory
  );

  return stream;
}

export function isAudioStreamValid(this: RayLib, stream: AudioStream) {
  return this.symbols.IsAudioStreamValid(stream.$memory);
}

export function unloadAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.UnloadAudioStream(stream.$memory);
}

export function updateAudioStream(
  this: RayLib,
  options: {
    stream: AudioStream;
    data: Uint8Array;
    frameCount: number;
  }
) {
  this.symbols.UpdateAudioStream(
    options.stream.$memory,
    options.data,
    options.frameCount
  );
}

export function isAudioStreamProcessed(this: RayLib, stream: AudioStream) {
  return this.symbols.IsAudioStreamProcessed(stream.$memory);
}

export function playAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.PlayAudioStream(stream.$memory);
}

export function pauseAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.PauseAudioStream(stream.$memory);
}

export function resumeAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.ResumeAudioStream(stream.$memory);
}

export function isAudioStreamPlaying(this: RayLib, stream: AudioStream) {
  return this.symbols.IsAudioStreamPlaying(stream.$memory);
}

export function stopAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.StopAudioStream(stream.$memory);
}

export function setAudioStreamVolume(
  this: RayLib,
  options: {
    stream: AudioStream;
    volume: number;
  }
) {
  this.symbols.SetAudioStreamVolume(options.stream.$memory, options.volume);
}

export function setAudioStreamPitch(
  this: RayLib,
  options: {
    stream: AudioStream;
    pitch: number;
  }
) {
  this.symbols.SetAudioStreamPitch(options.stream.$memory, options.pitch);
}

export function setAudioStreamPan(
  this: RayLib,
  options: {
    stream: AudioStream;
    pan: number;
  }
) {
  this.symbols.SetAudioStreamPan(options.stream.$memory, options.pan);
}

export function setAudioStreamBufferSizeDefault(this: RayLib, size: number) {
  this.symbols.SetAudioStreamBufferSizeDefault(size);
}

export function setAudioStreamCallback(
  this: RayLib,
  options: {
    stream: AudioStream;
    callback: AudioCallbackFn | null;
  }
) {
  const identifier = CallbackManager.createRegistryIdentifier({
    usedOn: options.stream,
    type: 'AudioStream',
  });

  if (!options.callback) {
    CallbackManager.unregister(identifier);
    this.symbols.SetAudioStreamCallback(options.stream.$memory, null);
    return;
  }

  const cb = CallbackManager.createAudioCallback(options.callback);
  CallbackManager.register(identifier, cb);
  this.symbols.SetAudioStreamCallback(options.stream.$memory, cb.ptr);
}

export function attachAudioStreamProcessor(
  this: RayLib,
  options: {
    stream: AudioStream;
    processor: AudioCallbackFn;
  }
) {
  const identifier = CallbackManager.createRegistryIdentifier({
    usedOn: options.stream,
    type: 'AudioStreamProcessor',
  });

  const cb = CallbackManager.createAudioCallback(options.processor);
  CallbackManager.register(identifier, cb);
  this.symbols.AttachAudioStreamProcessor(options.stream.$memory, cb.ptr);
}

export function detachAudioStreamProcessor(this: RayLib, stream: AudioStream) {
  const identifier = CallbackManager.createRegistryIdentifier({
    usedOn: stream,
    type: 'AudioStreamProcessor',
  });

  const cb = CallbackManager.getAudioCallback(identifier);

  if (!cb) return;

  this.symbols.DetachAudioStreamProcessor(stream.$memory, cb.ptr);
}

export function attachAudioMixedProcessor(
  this: RayLib,
  processor: AudioCallbackFn
) {
  const identifier = CallbackManager.createRegistryIdentifier({
    type: 'AudioMixedProcessor',
  });

  const cb = CallbackManager.createAudioCallback(processor);
  CallbackManager.register(identifier, cb);
  this.symbols.AttachAudioMixedProcessor(cb.ptr);
}

export function detachAudioMixedProcessor(this: RayLib) {
  const identifier = CallbackManager.createRegistryIdentifier({
    type: 'AudioMixedProcessor',
  });

  const cb = CallbackManager.getAudioCallback(identifier);

  if (!cb) return;

  this.symbols.DetachAudioMixedProcessor(cb.ptr);
}
