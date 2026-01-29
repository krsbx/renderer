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
    stream.$address
  );

  return stream;
}

export function isAudioStreamValid(this: RayLib, stream: AudioStream) {
  return this.symbols.IsAudioStreamValid(stream.$address);
}

export function unloadAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.UnloadAudioStream(stream.$address);
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
    options.stream.$address,
    options.data,
    options.frameCount
  );
}

export function isAudioStreamProcessed(this: RayLib, stream: AudioStream) {
  return this.symbols.IsAudioStreamProcessed(stream.$address);
}

export function playAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.PlayAudioStream(stream.$address);
}

export function pauseAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.PauseAudioStream(stream.$address);
}

export function resumeAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.ResumeAudioStream(stream.$address);
}

export function isAudioStreamPlaying(this: RayLib, stream: AudioStream) {
  return this.symbols.IsAudioStreamPlaying(stream.$address);
}

export function stopAudioStream(this: RayLib, stream: AudioStream) {
  this.symbols.StopAudioStream(stream.$address);
}

export function setAudioStreamVolume(
  this: RayLib,
  options: {
    stream: AudioStream;
    volume: number;
  }
) {
  this.symbols.SetAudioStreamVolume(options.stream.$address, options.volume);
}

export function setAudioStreamPitch(
  this: RayLib,
  options: {
    stream: AudioStream;
    pitch: number;
  }
) {
  this.symbols.SetAudioStreamPitch(options.stream.$address, options.pitch);
}

export function setAudioStreamPan(
  this: RayLib,
  options: {
    stream: AudioStream;
    pan: number;
  }
) {
  this.symbols.SetAudioStreamPan(options.stream.$address, options.pan);
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
    this.symbols.SetAudioStreamCallback(options.stream.$address, null);
    return;
  }

  const cb = CallbackManager.createAudioCallback(options.callback);
  CallbackManager.register(identifier, cb);
  this.symbols.SetAudioStreamCallback(options.stream.$address, cb.ptr);
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
  this.symbols.AttachAudioStreamProcessor(options.stream.$address, cb.ptr);
}

export function detachAudioStreamProcessor(this: RayLib, stream: AudioStream) {
  const identifier = CallbackManager.createRegistryIdentifier({
    usedOn: stream,
    type: 'AudioStreamProcessor',
  });

  const cb = CallbackManager.getAudioCallback(identifier);

  if (!cb) return;

  this.symbols.DetachAudioStreamProcessor(stream.$address, cb.ptr);
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
