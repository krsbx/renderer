import type { Brand } from '../../types/shared';

const RawDateFormat = {
  YYYYMMDD: 0 /**< Year/Month/Day */,
  DDMMYYYY: 1 /**< Day/Month/Year */,
  MMDDYYYY: 2 /**< Month/Day/Year */,
} as const;

export const DateFormat = RawDateFormat as Readonly<
  Record<keyof typeof RawDateFormat, Brand<number, 'DateFormat'>>
>;

export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat];

const RawTimeFormat = {
  '24HR': 0 /**< 24 hour time */,
  '12HR': 1 /**< 12 hour time */,
} as const;

export const TimeFormat = RawTimeFormat as Readonly<
  Record<keyof typeof RawTimeFormat, Brand<number, 'TimeFormat'>>
>;

export type TimeFormat = (typeof TimeFormat)[keyof typeof TimeFormat];
