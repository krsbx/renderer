import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { Sound, Wave } from '../struct';

export function loadSound(this: RayLib, fileName: string) {
  const sound = Sound.create();

  this.symbols.LoadSound(stringToCString(fileName).ptr, sound.$address);

  return sound;
}

export function loadSoundFromWave(this: RayLib, wave: Wave) {
  const sound = Sound.create();

  this.symbols.LoadSoundFromWave(wave.$address, sound.$address);

  return sound;
}

export function loadSoundAlias(this: RayLib, source: Sound) {
  const alias = Sound.create();

  this.symbols.LoadSoundAlias(source.$address, alias.$address);

  return alias;
}

export function isSoundValid(this: RayLib, sound: Sound) {
  return this.symbols.IsSoundValid(sound.$address);
}

export function updateSound(
  this: RayLib,
  options: {
    sound: Sound;
    data: Uint8Array;
    sampleCount: number;
  }
) {
  this.symbols.UpdateSound(
    options.sound.$address,
    options.data,
    options.sampleCount
  );
}

export function unloadSound(this: RayLib, sound: Sound) {
  this.symbols.UnloadSound(sound.$address);
}

export function unloadSoundAlias(this: RayLib, alias: Sound) {
  this.symbols.UnloadSoundAlias(alias.$address);
}

export function playSound(this: RayLib, sound: Sound) {
  this.symbols.PlaySound(sound.$address);
}

export function stopSound(this: RayLib, sound: Sound) {
  this.symbols.StopSound(sound.$address);
}

export function pauseSound(this: RayLib, sound: Sound) {
  this.symbols.PauseSound(sound.$address);
}

export function resumeSound(this: RayLib, sound: Sound) {
  this.symbols.ResumeSound(sound.$address);
}

export function isSoundPlaying(this: RayLib, sound: Sound) {
  return this.symbols.IsSoundPlaying(sound.$address);
}

export function setSoundVolume(
  this: RayLib,
  options: {
    sound: Sound;
    volume: number;
  }
) {
  this.symbols.SetSoundVolume(options.sound.$address, options.volume);
}

export function setSoundPitch(
  this: RayLib,
  options: {
    sound: Sound;
    pitch: number;
  }
) {
  this.symbols.SetSoundPitch(options.sound.$address, options.pitch);
}

export function setSoundPan(
  this: RayLib,
  options: {
    sound: Sound;
    pan: number;
  }
) {
  this.symbols.SetSoundPan(options.sound.$address, options.pan);
}
