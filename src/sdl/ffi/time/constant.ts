export const DateFormat = {
  YYYYMMDD: 0 /**< Year/Month/Day */,
  DDMMYYYY: 1 /**< Day/Month/Year */,
  MMDDYYYY: 2 /**< Month/Day/Year */,
} as const;

export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat];

export const TimeFormat = {
  '24HR': 0 /**< 24 hour time */,
  '12HR': 1 /**< 12 hour time */,
} as const;

export type TimeFormat = (typeof TimeFormat)[keyof typeof TimeFormat];
