import { IS_BIG_ENDIAN } from '../../utility/common';

export enum AudioFormat {
  UNKNOWN = 0x0000 /**< Unspecified audio format */,
  U8 = 0x0008 /**< Unsigned 8-bit samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(0, 0, 0, 8), */
  S8 = 0x8008 /**< Signed 8-bit samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 0, 0, 8), */
  S16LE = 0x8010 /**< Signed 16-bit samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 0, 0, 16), */
  S16BE = 0x9010 /**< As above, but big-endian byte order */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 1, 0, 16), */
  S32LE = 0x8020 /**< 32-bit integer samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 0, 0, 32), */
  S32BE = 0x9020 /**< As above, but big-endian byte order */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 1, 0, 32), */
  F32LE = 0x8120 /**< 32-bit floating point samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 0, 1, 32), */
  F32BE = 0x9120 /**< As above, but big-endian byte order */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 1, 1, 32), */

  /* These represent the current system's byteorder. */
  S16 = IS_BIG_ENDIAN ? AudioFormat.S16BE : AudioFormat.S16LE,
  S32 = IS_BIG_ENDIAN ? AudioFormat.S32BE : AudioFormat.S32LE,
  F32 = IS_BIG_ENDIAN ? AudioFormat.F32BE : AudioFormat.F32LE,
}
