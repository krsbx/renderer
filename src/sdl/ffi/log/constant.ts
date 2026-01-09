export enum LogCategory {
  APPLICATION = 0,
  ERROR = 1,
  ASSERT = 2,
  SYSTEM = 3,
  AUDIO = 4,
  VIDEO = 5,
  RENDER = 6,
  INPUT = 7,
  TEST = 8,
  GPU = 9,

  /* Reserved for future SDL library use */
  RESERVED2 = 10,
  RESERVED3 = 11,
  RESERVED4 = 12,
  RESERVED5 = 13,
  RESERVED6 = 14,
  RESERVED7 = 15,
  RESERVED8 = 16,
  RESERVED9 = 17,
  RESERVED10 = 18,

  /* Beyond this point is reserved for application use, e.g.
       enum {
           MYAPP_CATEGORY_AWESOME1 = CUSTOM,
           MYAPP_CATEGORY_AWESOME2,
           MYAPP_CATEGORY_AWESOME3,
           ...
       };
     */
  CUSTOM = 19,
}

export enum LogPriority {
  INVALID = 0,
  TRACE = 1,
  VERBOSE = 2,
  DEBUG = 3,
  INFO = 4,
  WARN = 5,
  ERROR = 6,
  CRITICAL = 7,
  COUNT = 8,
}
