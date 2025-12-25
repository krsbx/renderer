import { FFIType, type FFIFunction } from 'bun:ffi';

export const AudioDefinition = {
  // int SDL_GetNumAudioDrivers(void);                                                                                                                                // Use this function to get the number of built-in audio drivers.
  SDL_GetNumAudioDrivers: {
    args: [],
    returns: FFIType.i32,
  },
  // const char * SDL_GetAudioDriver(int index);                                                                                                                      // Use this function to get the name of a built in audio driver.
  SDL_GetAudioDriver: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetCurrentAudioDriver(void);                                                                                                                    // Get the name of the current audio driver.
  SDL_GetCurrentAudioDriver: {
    args: [],
    returns: FFIType.cstring,
  },
  // SDL_AudioDeviceID * SDL_GetAudioPlaybackDevices(int *count);                                                                                                     // Get a list of currently-connected audio playback devices.
  SDL_GetAudioPlaybackDevices: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_AudioDeviceID * SDL_GetAudioRecordingDevices(int *count);                                                                                                    // Get a list of currently-connected audio recording devices.
  SDL_GetAudioRecordingDevices: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetAudioDeviceName(SDL_AudioDeviceID devid);                                                                                                    // Get the human-readable name of a specific audio device.
  SDL_GetAudioDeviceName: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // bool SDL_GetAudioDeviceFormat(SDL_AudioDeviceID devid, SDL_AudioSpec *spec, int *sample_frames);                                                                 // Get the current audio format of a specific audio device.
  SDL_GetAudioDeviceFormat: {
    args: [FFIType.u32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // int * SDL_GetAudioDeviceChannelMap(SDL_AudioDeviceID devid, int *count);                                                                                         // Get the current channel map of an audio device.
  SDL_GetAudioDeviceChannelMap: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_AudioDeviceID SDL_OpenAudioDevice(SDL_AudioDeviceID devid, const SDL_AudioSpec *spec);                                                                       // Open a specific audio device.
  SDL_OpenAudioDevice: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.u32,
  },
  // bool SDL_IsAudioDevicePhysical(SDL_AudioDeviceID devid);                                                                                                         // Determine if an audio device is physical (instead of logical).
  SDL_IsAudioDevicePhysical: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_IsAudioDevicePlayback(SDL_AudioDeviceID devid);                                                                                                         // Determine if an audio device is a playback device (instead of recording).
  SDL_IsAudioDevicePlayback: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_PauseAudioDevice(SDL_AudioDeviceID devid);                                                                                                              // Use this function to pause audio playback on a specified device.
  SDL_PauseAudioDevice: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_ResumeAudioDevice(SDL_AudioDeviceID devid);                                                                                                             // Use this function to unpause audio playback on a specified device.
  SDL_ResumeAudioDevice: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_AudioDevicePaused(SDL_AudioDeviceID devid);                                                                                                             // Use this function to query if an audio device is paused.
  SDL_AudioDevicePaused: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // float SDL_GetAudioDeviceGain(SDL_AudioDeviceID devid);                                                                                                           // Get the gain of an audio device.
  SDL_GetAudioDeviceGain: {
    args: [FFIType.u32],
    returns: FFIType.f32,
  },
  // bool SDL_SetAudioDeviceGain(SDL_AudioDeviceID devid, float gain);                                                                                                // Change the gain of an audio device.
  SDL_SetAudioDeviceGain: {
    args: [FFIType.u32, FFIType.f32],
    returns: FFIType.bool,
  },
  // void SDL_CloseAudioDevice(SDL_AudioDeviceID devid);                                                                                                              // Close a previously-opened audio device.
  SDL_CloseAudioDevice: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  // bool SDL_BindAudioStreams(SDL_AudioDeviceID devid, SDL_AudioStream * const *streams, int num_streams);                                                           // Bind a list of audio streams to an audio device.
  SDL_BindAudioStreams: {
    args: [FFIType.u32, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_BindAudioStream(SDL_AudioDeviceID devid, SDL_AudioStream *stream);                                                                                      // Bind a single audio stream to an audio device.
  SDL_BindAudioStream: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_UnbindAudioStreams(SDL_AudioStream * const *streams, int num_streams);                                                                                  // Unbind a list of audio streams from their audio devices.
  SDL_UnbindAudioStreams: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void SDL_UnbindAudioStream(SDL_AudioStream *stream);                                                                                                             // Unbind a single audio stream from its audio device.
  SDL_UnbindAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_AudioDeviceID SDL_GetAudioStreamDevice(SDL_AudioStream *stream);                                                                                             // Query an audio stream for its currently-bound device.
  SDL_GetAudioStreamDevice: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_AudioStream * SDL_CreateAudioStream(const SDL_AudioSpec *src_spec, const SDL_AudioSpec *dst_spec);                                                           // Create a new audio stream.
  SDL_CreateAudioStream: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_PropertiesID SDL_GetAudioStreamProperties(SDL_AudioStream *stream);                                                                                          // Get the properties associated with an audio stream.
  SDL_GetAudioStreamProperties: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_GetAudioStreamFormat(SDL_AudioStream *stream, SDL_AudioSpec *src_spec, SDL_AudioSpec *dst_spec);                                                        // Query the current format of an audio stream.
  SDL_GetAudioStreamFormat: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetAudioStreamFormat(SDL_AudioStream *stream, const SDL_AudioSpec *src_spec, const SDL_AudioSpec *dst_spec);                                            // Change the input and output formats of an audio stream.
  SDL_SetAudioStreamFormat: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // float SDL_GetAudioStreamFrequencyRatio(SDL_AudioStream *stream);                                                                                                 // Get the frequency ratio of an audio stream.
  SDL_GetAudioStreamFrequencyRatio: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  // bool SDL_SetAudioStreamFrequencyRatio(SDL_AudioStream *stream, float ratio);                                                                                     // Change the frequency ratio of an audio stream.
  SDL_SetAudioStreamFrequencyRatio: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // float SDL_GetAudioStreamGain(SDL_AudioStream *stream);                                                                                                           // Get the gain of an audio stream.
  SDL_GetAudioStreamGain: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  // bool SDL_SetAudioStreamGain(SDL_AudioStream *stream, float gain);                                                                                                // Change the gain of an audio stream.
  SDL_SetAudioStreamGain: {
    args: [FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // int * SDL_GetAudioStreamInputChannelMap(SDL_AudioStream *stream, int *count);                                                                                    // Get the current input channel map of an audio stream.
  SDL_GetAudioStreamInputChannelMap: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // int * SDL_GetAudioStreamOutputChannelMap(SDL_AudioStream *stream, int *count);                                                                                   // Get the current output channel map of an audio stream.
  SDL_GetAudioStreamOutputChannelMap: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetAudioStreamInputChannelMap(SDL_AudioStream *stream, const int *chmap, int count);                                                                    // Set the current input channel map of an audio stream.
  SDL_SetAudioStreamInputChannelMap: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SetAudioStreamOutputChannelMap(SDL_AudioStream *stream, const int *chmap, int count);                                                                   // Set the current output channel map of an audio stream.
  SDL_SetAudioStreamOutputChannelMap: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_PutAudioStreamData(SDL_AudioStream *stream, const void *buf, int len);                                                                                  // Add data to the stream.
  SDL_PutAudioStreamData: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_PutAudioStreamDataNoCopy(SDL_AudioStream *stream, const void *buf, int len, SDL_AudioStreamDataCompleteCallback callback, void *userdata);              // Add external data to an audio stream without copying it.
  SDL_PutAudioStreamDataNoCopy: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_PutAudioStreamPlanarData(SDL_AudioStream *stream, const void * const *channel_buffers, int num_channels, int num_samples);                              // Add data to the stream with each channel in a separate array.
  SDL_PutAudioStreamPlanarData: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // int SDL_GetAudioStreamData(SDL_AudioStream *stream, void *buf, int len);                                                                                         // Get converted/resampled data from the stream.
  SDL_GetAudioStreamData: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_GetAudioStreamAvailable(SDL_AudioStream *stream);                                                                                                        // Get the number of converted/resampled bytes available.
  SDL_GetAudioStreamAvailable: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_GetAudioStreamQueued(SDL_AudioStream *stream);                                                                                                           // Get the number of bytes currently queued.
  SDL_GetAudioStreamQueued: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // bool SDL_FlushAudioStream(SDL_AudioStream *stream);                                                                                                              // Tell the stream that you're done sending data, and anything being buffered should be converted/resampled and made available immediately.
  SDL_FlushAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ClearAudioStream(SDL_AudioStream *stream);                                                                                                              // Clear any pending data in the stream.
  SDL_ClearAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_PauseAudioStreamDevice(SDL_AudioStream *stream);                                                                                                        // Use this function to pause audio playback on the audio device associated with an audio stream.
  SDL_PauseAudioStreamDevice: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_ResumeAudioStreamDevice(SDL_AudioStream *stream);                                                                                                       // Use this function to unpause audio playback on the audio device associated with an audio stream.
  SDL_ResumeAudioStreamDevice: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_AudioStreamDevicePaused(SDL_AudioStream *stream);                                                                                                       // Use this function to query if an audio device associated with a stream is paused.
  SDL_AudioStreamDevicePaused: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_LockAudioStream(SDL_AudioStream *stream);                                                                                                               // Lock an audio stream for serialized access.
  SDL_LockAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_UnlockAudioStream(SDL_AudioStream *stream);                                                                                                             // Unlock an audio stream for serialized access.
  SDL_UnlockAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetAudioStreamGetCallback(SDL_AudioStream *stream, SDL_AudioStreamCallback callback, void *userdata);                                                   // Set a callback that runs when data is requested from an audio stream.
  SDL_SetAudioStreamGetCallback: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SetAudioStreamPutCallback(SDL_AudioStream *stream, SDL_AudioStreamCallback callback, void *userdata);                                                   // Set a callback that runs when data is added to an audio stream.
  SDL_SetAudioStreamPutCallback: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },

  // void SDL_DestroyAudioStream(SDL_AudioStream *stream);                                                                                                            // Free an audio stream.
  SDL_DestroyAudioStream: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_AudioStream * SDL_OpenAudioDeviceStream(SDL_AudioDeviceID devid, const SDL_AudioSpec *spec, SDL_AudioStreamCallback callback, void *userdata);               // Convenience function for straightforward audio init for the common case.
  SDL_OpenAudioDeviceStream: {
    args: [FFIType.i32, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetAudioPostmixCallback(SDL_AudioDeviceID devid, SDL_AudioPostmixCallback callback, void *userdata);                                                    // Set a callback that fires when data is about to be fed to an audio device.
  SDL_SetAudioPostmixCallback: {
    args: [FFIType.i32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_LoadWAV_IO(SDL_IOStream *src, bool closeio, SDL_AudioSpec *spec, Uint8 **audio_buf, Uint32 *audio_len);                                                 // Load the audio data of a WAVE file into memory.
  SDL_LoadWAV_IO: {
    args: [FFIType.ptr, FFIType.bool, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_LoadWAV(const char *path, SDL_AudioSpec *spec, Uint8 **audio_buf, Uint32 *audio_len);                                                                   // Loads a WAV from a file path.
  SDL_LoadWAV: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_MixAudio(Uint8 *dst, const Uint8 *src, SDL_AudioFormat format, Uint32 len, float volume);                                                               // Mix audio data in a specified format.
  SDL_MixAudio: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool SDL_ConvertAudioSamples(const SDL_AudioSpec *src_spec, const Uint8 *src_data, int src_len, const SDL_AudioSpec *dst_spec, Uint8 **dst_data, int *dst_len);  // Convert some audio data of one format to another format.
  SDL_ConvertAudioSamples: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.i32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.bool,
  },
  // const char * SDL_GetAudioFormatName(SDL_AudioFormat format);                                                                                                     // Get the human readable name of an audio format.
  SDL_GetAudioFormatName: {
    args: [FFIType.u32],
    returns: FFIType.cstring,
  },
  // int SDL_GetSilenceValueForFormat(SDL_AudioFormat format);                                                                                                        // Get the appropriate memset value for silencing an audio format.
  SDL_GetSilenceValueForFormat: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
} satisfies Record<string, FFIFunction>;
