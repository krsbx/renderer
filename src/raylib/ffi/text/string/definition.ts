import { FFIType, type FFIFunction } from 'bun:ffi';

export const TextStringDefinition = {
  // int TextCopy(char *dst, const char *src);
  TextCopy: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.i32,
  },
  // bool TextIsEqual(const char *text1, const char *text2);
  TextIsEqual: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.bool,
  },
  // unsigned int TextLength(const char *text);
  TextLength: {
    args: [FFIType.cstring],
    returns: FFIType.u32,
  },
  // const char *TextFormat(const char *text, ...);
  // NOTE: Variadic function - not supported in FFI directly

  // const char *TextSubtext(const char *text, int position, int length);
  TextSubtext: {
    args: [FFIType.cstring, FFIType.i32, FFIType.i32],
    returns: FFIType.cstring,
  },
  // char *TextReplace(const char *text, const char *replace, const char *by);
  TextReplace: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.cstring],
    returns: FFIType.ptr,
  },
  // char *TextInsert(const char *text, const char *insert, int position);
  TextInsert: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.i32],
    returns: FFIType.ptr,
  },
  // const char *TextJoin(const char **textList, int count, const char *delimiter);
  TextJoin: {
    args: [FFIType.ptr, FFIType.i32, FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char **TextSplit(const char *text, char delimiter, int *count);
  TextSplit: {
    args: [FFIType.cstring, FFIType.i8, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void TextAppend(char *text, const char *append, int *position);
  TextAppend: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.ptr],
    returns: FFIType.void,
  },
  // int TextFindIndex(const char *text, const char *find);
  TextFindIndex: {
    args: [FFIType.cstring, FFIType.cstring],
    returns: FFIType.i32,
  },
  // const char *TextToUpper(const char *text);
  TextToUpper: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *TextToLower(const char *text);
  TextToLower: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *TextToPascal(const char *text);
  TextToPascal: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *TextToSnake(const char *text);
  TextToSnake: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char *TextToCamel(const char *text);
  TextToCamel: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // int TextToInteger(const char *text);
  TextToInteger: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // float TextToFloat(const char *text);
  TextToFloat: {
    args: [FFIType.cstring],
    returns: FFIType.f32,
  },
} satisfies Record<string, FFIFunction>;
