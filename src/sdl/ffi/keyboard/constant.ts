export enum TextInputType {
  TEX = 0 /**< The input is text */,
  TEXT_NAM = 1 /**< The input is a person's name */,
  TEXT_EMAI = 2 /**< The input is an e-mail address */,
  TEXT_USERNAM = 3 /**< The input is a username */,
  TEXT_PASSWORD_HIDDE = 4 /**< The input is a secure password that is hidden */,
  TEXT_PASSWORD_VISIBL = 5 /**< The input is a secure password that is visible */,
  NUMBE = 6 /**< The input is a number */,
  NUMBER_PASSWORD_HIDDE = 7 /**< The input is a secure PIN that is hidden */,
  NUMBER_PASSWORD_VISIBL = 8 /**< The input is a secure PIN that is visible */,
}

export enum Capitalization {
  NONE = 0 /**< No auto-capitalization will be done */,
  SENTENCES = 1 /**< The first letter of sentences will be capitalized */,
  WORDS = 2 /**< The first letter of words will be capitalized */,
  LETTERS = 3 /**< All letters will be capitalized */,
}
