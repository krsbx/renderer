import type { Brand } from '../../types/shared';
import { IS_BIG_ENDIAN } from '../../utility/common';

const RawAudioFormat = {
  UNKNOWN: 0x0000 /**< Unspecified audio format */,
  U8: 0x0008 /**< Unsigned 8-bit samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(0, 0, 0, 8), */
  S8: 0x8008 /**< Signed 8-bit samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 0, 0, 8), */
  S16LE: 0x8010 /**< Signed 16-bit samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 0, 0, 16), */
  S16BE: 0x9010 /**< As above, but big-endian byte order */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 1, 0, 16), */
  S32LE: 0x8020 /**< 32-bit integer samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 0, 0, 32), */
  S32BE: 0x9020 /**< As above, but big-endian byte order */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 1, 0, 32), */
  F32LE: 0x8120 /**< 32-bit floating point samples */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 0, 1, 32), */
  F32BE: 0x9120 /**< As above, but big-endian byte order */,
  /* SDL_DEFINE_AUDIO_FORMAT(1, 1, 1, 32), */

  /* These represent the current system's byteorder. */
  get S16() {
    return IS_BIG_ENDIAN ? this.S16BE : this.S16LE;
  },
  get S32() {
    return IS_BIG_ENDIAN ? this.S32BE : this.S32LE;
  },
  get F32() {
    return IS_BIG_ENDIAN ? this.F32BE : this.F32LE;
  },
} as const;

export const AudioFormat = RawAudioFormat as Readonly<
  Record<keyof typeof RawAudioFormat, Brand<number, 'AudioFormat'>>
>;

export type AudioFormat = (typeof AudioFormat)[keyof typeof AudioFormat];
