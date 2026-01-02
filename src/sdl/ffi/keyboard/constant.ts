export const TextInputType = {
  TEXT: 0 /**< The input is text */,
  TEXT_NAME: 1 /**< The input is a person's name */,
  TEXT_EMAIL: 2 /**< The input is an e-mail address */,
  TEXT_USERNAME: 3 /**< The input is a username */,
  TEXT_PASSWORD_HIDDEN: 4 /**< The input is a secure password that is hidden */,
  TEXT_PASSWORD_VISIBLE: 5 /**< The input is a secure password that is visible */,
  NUMBER: 6 /**< The input is a number */,
  NUMBER_PASSWORD_HIDDEN: 7 /**< The input is a secure PIN that is hidden */,
  NUMBER_PASSWORD_VISIBLE: 8 /**< The input is a secure PIN that is visible */,
} as const;

export type TextInputType = (typeof TextInputType)[keyof typeof TextInputType];

export const Capitalization = {
  NONE: 0 /**< No auto-capitalization will be done */,
  SENTENCES: 1 /**< The first letter of sentences will be capitalized */,
  WORDS: 2 /**< The first letter of words will be capitalized */,
  LETTERS: 3 /**< All letters will be capitalized */,
} as const;
