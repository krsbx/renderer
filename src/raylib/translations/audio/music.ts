import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { Music } from '../struct';

export function loadMusicStream(this: RayLib, fileName: string) {
  const music = Music.create();

  this.symbols.LoadMusicStream(stringToCString(fileName).ptr, music.$address);

  return music;
}

export function loadMusicStreamFromMemory(
  this: RayLib,
  options: {
    fileType: string;
    data: Uint8Array;
  }
) {
  const music = Music.create();

  this.symbols.LoadMusicStreamFromMemory(
    stringToCString(options.fileType).ptr,
    options.data,
    options.data.byteLength,
    music.$address
  );

  return music;
}

export function isMusicValid(this: RayLib, music: Music) {
  return this.symbols.IsMusicValid(music.$address);
}

export function unloadMusicStream(this: RayLib, music: Music) {
  this.symbols.UnloadMusicStream(music.$address);
}

export function playMusicStream(this: RayLib, music: Music) {
  this.symbols.PlayMusicStream(music.$address);
}

export function isMusicStreamPlaying(this: RayLib, music: Music) {
  return this.symbols.IsMusicStreamPlaying(music.$address);
}

export function updateMusicStream(this: RayLib, music: Music) {
  this.symbols.UpdateMusicStream(music.$address);
}

export function stopMusicStream(this: RayLib, music: Music) {
  this.symbols.StopMusicStream(music.$address);
}

export function pauseMusicStream(this: RayLib, music: Music) {
  this.symbols.PauseMusicStream(music.$address);
}

export function resumeMusicStream(this: RayLib, music: Music) {
  this.symbols.ResumeMusicStream(music.$address);
}

export function seekMusicStream(
  this: RayLib,
  options: {
    music: Music;
    position: number;
  }
) {
  this.symbols.SeekMusicStream(options.music.$address, options.position);
}

export function setMusicVolume(
  this: RayLib,
  options: {
    music: Music;
    volume: number;
  }
) {
  this.symbols.SetMusicVolume(options.music.$address, options.volume);
}

export function setMusicPitch(
  this: RayLib,
  options: {
    music: Music;
    pitch: number;
  }
) {
  this.symbols.SetMusicPitch(options.music.$address, options.pitch);
}

export function setMusicPan(
  this: RayLib,
  options: {
    music: Music;
    pan: number;
  }
) {
  this.symbols.SetMusicPan(options.music.$address, options.pan);
}

export function getMusicTimeLength(this: RayLib, music: Music) {
  return this.symbols.GetMusicTimeLength(music.$address);
}

export function getMusicTimePlayed(this: RayLib, music: Music) {
  return this.symbols.GetMusicTimePlayed(music.$address);
}
