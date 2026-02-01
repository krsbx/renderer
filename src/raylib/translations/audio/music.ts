import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { Music } from '../struct';

export function loadMusicStream(this: RayLib, fileName: string) {
  const music = Music.create();

  this.symbols.LoadMusicStream(stringToCString(fileName).ptr, music.$memory);

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
    music.$memory
  );

  return music;
}

export function isMusicValid(this: RayLib, music: Music) {
  return this.symbols.IsMusicValid(music.$memory);
}

export function unloadMusicStream(this: RayLib, music: Music) {
  this.symbols.UnloadMusicStream(music.$memory);
}

export function playMusicStream(this: RayLib, music: Music) {
  this.symbols.PlayMusicStream(music.$memory);
}

export function isMusicStreamPlaying(this: RayLib, music: Music) {
  return this.symbols.IsMusicStreamPlaying(music.$memory);
}

export function updateMusicStream(this: RayLib, music: Music) {
  this.symbols.UpdateMusicStream(music.$memory);
}

export function stopMusicStream(this: RayLib, music: Music) {
  this.symbols.StopMusicStream(music.$memory);
}

export function pauseMusicStream(this: RayLib, music: Music) {
  this.symbols.PauseMusicStream(music.$memory);
}

export function resumeMusicStream(this: RayLib, music: Music) {
  this.symbols.ResumeMusicStream(music.$memory);
}

export function seekMusicStream(
  this: RayLib,
  options: {
    music: Music;
    position: number;
  }
) {
  this.symbols.SeekMusicStream(options.music.$memory, options.position);
}

export function setMusicVolume(
  this: RayLib,
  options: {
    music: Music;
    volume: number;
  }
) {
  this.symbols.SetMusicVolume(options.music.$memory, options.volume);
}

export function setMusicPitch(
  this: RayLib,
  options: {
    music: Music;
    pitch: number;
  }
) {
  this.symbols.SetMusicPitch(options.music.$memory, options.pitch);
}

export function setMusicPan(
  this: RayLib,
  options: {
    music: Music;
    pan: number;
  }
) {
  this.symbols.SetMusicPan(options.music.$memory, options.pan);
}

export function getMusicTimeLength(this: RayLib, music: Music) {
  return this.symbols.GetMusicTimeLength(music.$memory);
}

export function getMusicTimePlayed(this: RayLib, music: Music) {
  return this.symbols.GetMusicTimePlayed(music.$memory);
}
