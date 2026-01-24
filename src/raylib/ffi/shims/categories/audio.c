#undef LoadWave
#undef LoadWaveFromMemory
#undef WaveCopy
#undef LoadSound
#undef LoadSoundFromWave
#undef LoadSoundAlias
#undef LoadMusicStream
#undef LoadMusicStreamFromMemory
#undef LoadAudioStream

SHIM_1(Wave, LoadWave, const char*, fileName)
SHIM_3(Wave, LoadWaveFromMemory, const char*, fileType, const unsigned char*, fileData, int, dataSize)
SHIM_1(Wave, WaveCopy, Wave, wave)
SHIM_1(Sound, LoadSound, const char*, fileName)
SHIM_1(Sound, LoadSoundFromWave, Wave, wave)
SHIM_1(Sound, LoadSoundAlias, Sound, source)
SHIM_1(Music, LoadMusicStream, const char*, fileName)
SHIM_3(Music, LoadMusicStreamFromMemory, const char*, fileType, const unsigned char*, data, int, dataSize)
SHIM_3(AudioStream, LoadAudioStream, unsigned int, sampleRate, unsigned int, sampleSize, unsigned int, channels)
