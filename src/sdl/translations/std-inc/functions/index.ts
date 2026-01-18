const useJsError = (sdlFn: string, jsAlternative: string): never => {
  throw new Error(
    `${sdlFn} is not implemented. Use JavaScript ${jsAlternative} instead.`
  );
};

// Memory allocation - Use JavaScript typed arrays
export function malloc(): never {
  return useJsError(
    'SDL_malloc',
    'new Uint8Array(size) or new ArrayBuffer(size)'
  );
}

export function calloc(): never {
  return useJsError(
    'SDL_calloc',
    'new Uint8Array(size) (already zero-initialized)'
  );
}

export function realloc(): never {
  return useJsError('SDL_realloc', 'new Uint8Array() and copy data');
}

export function free(): never {
  return useJsError('SDL_free', 'garbage collection (automatic)');
}

export function alignedAlloc(): never {
  return useJsError('SDL_aligned_alloc', 'new Uint8Array(size)');
}

export function alignedFree(): never {
  return useJsError('SDL_aligned_free', 'garbage collection (automatic)');
}

export function getNumAllocations(): never {
  return useJsError('SDL_GetNumAllocations', 'memory profiling tools');
}

// Memory functions
export function getOriginalMemoryFunctions(): never {
  return useJsError('SDL_GetOriginalMemoryFunctions', 'N/A - not needed in JS');
}

export function getMemoryFunctions(): never {
  return useJsError('SDL_GetMemoryFunctions', 'N/A - not needed in JS');
}

export function setMemoryFunctions(): never {
  return useJsError('SDL_SetMemoryFunctions', 'N/A - not needed in JS');
}

// Environment
export function getEnvironment(): never {
  return useJsError('SDL_GetEnvironment', 'Bun.env or process.env');
}

export function createEnvironment(): never {
  return useJsError('SDL_CreateEnvironment', 'plain JavaScript object {}');
}

export function getEnvironmentVariable(): never {
  return useJsError(
    'SDL_GetEnvironmentVariable',
    'Bun.env[name] or process.env[name]'
  );
}

export function getEnvironmentVariables(): never {
  return useJsError('SDL_GetEnvironmentVariables', 'Object.entries(Bun.env)');
}

export function setEnvironmentVariable(): never {
  return useJsError('SDL_SetEnvironmentVariable', 'Bun.env[name] = value');
}

export function unsetEnvironmentVariable(): never {
  return useJsError('SDL_UnsetEnvironmentVariable', 'delete Bun.env[name]');
}

export function destroyEnvironment(): never {
  return useJsError('SDL_DestroyEnvironment', 'garbage collection (automatic)');
}

export function getenv(): never {
  return useJsError('SDL_getenv', 'Bun.env[name] or process.env[name]');
}

export function getenvUnsafe(): never {
  return useJsError('SDL_getenv_unsafe', 'Bun.env[name] or process.env[name]');
}

export function setenvUnsafe(): never {
  return useJsError('SDL_setenv_unsafe', 'Bun.env[name] = value');
}

export function unsetenvUnsafe(): never {
  return useJsError('SDL_unsetenv_unsafe', 'delete Bun.env[name]');
}

// Sorting and searching
export function qsort(): never {
  return useJsError('SDL_qsort', 'Array.prototype.sort()');
}

export function bsearch(): never {
  return useJsError(
    'SDL_bsearch',
    'Array.prototype.find() or binary search implementation'
  );
}

export function qsortR(): never {
  return useJsError('SDL_qsort_r', 'Array.prototype.sort()');
}

export function bsearchR(): never {
  return useJsError(
    'SDL_bsearch_r',
    'Array.prototype.find() or binary search implementation'
  );
}

// Math functions
export function abs(): never {
  return useJsError('SDL_abs', 'Math.abs()');
}

// Character classification
export function isalpha(): never {
  return useJsError('SDL_isalpha', '/[a-zA-Z]/.test(char)');
}

export function isalnum(): never {
  return useJsError('SDL_isalnum', '/[a-zA-Z0-9]/.test(char)');
}

export function isblank(): never {
  return useJsError('SDL_isblank', '/[ \\t]/.test(char)');
}

export function iscntrl(): never {
  return useJsError('SDL_iscntrl', 'char.charCodeAt(0) < 32');
}

export function isdigit(): never {
  return useJsError('SDL_isdigit', '/[0-9]/.test(char)');
}

export function isxdigit(): never {
  return useJsError('SDL_isxdigit', '/[0-9a-fA-F]/.test(char)');
}

export function ispunct(): never {
  return useJsError('SDL_ispunct', '/[!-/:-@[-`{-~]/.test(char)');
}

export function isspace(): never {
  return useJsError('SDL_isspace', '/\\s/.test(char)');
}

export function isupper(): never {
  return useJsError('SDL_isupper', '/[A-Z]/.test(char)');
}

export function islower(): never {
  return useJsError('SDL_islower', '/[a-z]/.test(char)');
}

export function isprint(): never {
  return useJsError(
    'SDL_isprint',
    'char.charCodeAt(0) >= 32 && char.charCodeAt(0) < 127'
  );
}

export function isgraph(): never {
  return useJsError(
    'SDL_isgraph',
    'char.charCodeAt(0) > 32 && char.charCodeAt(0) < 127'
  );
}

export function toupper(): never {
  return useJsError('SDL_toupper', 'String.prototype.toUpperCase()');
}

export function tolower(): never {
  return useJsError('SDL_tolower', 'String.prototype.toLowerCase()');
}

// CRC and hashing
export function crc16(): never {
  return useJsError('SDL_crc16', 'a CRC16 library or implementation');
}

export function crc32(): never {
  return useJsError('SDL_crc32', 'Bun.CryptoHasher or a CRC32 library');
}

export function murmur3_32(): never {
  return useJsError('SDL_murmur3_32', 'a MurmurHash library');
}

// Memory operations
export function memcpy(): never {
  return useJsError(
    'SDL_memcpy',
    'TypedArray.prototype.set() or structuredClone()'
  );
}

export function memmove(): never {
  return useJsError(
    'SDL_memmove',
    'TypedArray.prototype.set() with intermediate copy'
  );
}

export function memset(): never {
  return useJsError('SDL_memset', 'TypedArray.prototype.fill()');
}

export function memset4(): never {
  return useJsError('SDL_memset4', 'Uint32Array.prototype.fill()');
}

export function memcmp(): never {
  return useJsError('SDL_memcmp', 'Buffer.compare() or manual comparison');
}

// Wide string functions
export function wcslen(): never {
  return useJsError('SDL_wcslen', 'String.prototype.length');
}

export function wcsnlen(): never {
  return useJsError('SDL_wcsnlen', 'Math.min(str.length, maxlen)');
}

export function wcslcpy(): never {
  return useJsError('SDL_wcslcpy', 'String.prototype.slice()');
}

export function wcslcat(): never {
  return useJsError('SDL_wcslcat', 'String concatenation (+)');
}

export function wcsdup(): never {
  return useJsError('SDL_wcsdup', 'String (strings are immutable in JS)');
}

export function wcsstr(): never {
  return useJsError('SDL_wcsstr', 'String.prototype.indexOf() or includes()');
}

export function wcsnstr(): never {
  return useJsError('SDL_wcsnstr', 'String.prototype.slice(0, n).indexOf()');
}

export function wcscmp(): never {
  return useJsError(
    'SDL_wcscmp',
    'String.prototype.localeCompare() or === operator'
  );
}

export function wcsncmp(): never {
  return useJsError('SDL_wcsncmp', 'str1.slice(0, n) === str2.slice(0, n)');
}

export function wcscasecmp(): never {
  return useJsError(
    'SDL_wcscasecmp',
    'str1.toLowerCase() === str2.toLowerCase()'
  );
}

export function wcsncasecmp(): never {
  return useJsError(
    'SDL_wcsncasecmp',
    'str1.slice(0,n).toLowerCase() === str2.slice(0,n).toLowerCase()'
  );
}

export function wcstol(): never {
  return useJsError('SDL_wcstol', 'parseInt()');
}

// String functions
export function strlen(): never {
  return useJsError('SDL_strlen', 'String.prototype.length');
}

export function strnlen(): never {
  return useJsError('SDL_strnlen', 'Math.min(str.length, maxlen)');
}

export function strlcpy(): never {
  return useJsError('SDL_strlcpy', 'String.prototype.slice()');
}

export function utf8strlcpy(): never {
  return useJsError('SDL_utf8strlcpy', 'String.prototype.slice()');
}

export function strlcat(): never {
  return useJsError('SDL_strlcat', 'String concatenation (+)');
}

export function strdup(): never {
  return useJsError('SDL_strdup', 'String (strings are immutable in JS)');
}

export function strndup(): never {
  return useJsError('SDL_strndup', 'String.prototype.slice(0, n)');
}

export function strrev(): never {
  return useJsError('SDL_strrev', 'str.split("").reverse().join("")');
}

export function strupr(): never {
  return useJsError('SDL_strupr', 'String.prototype.toUpperCase()');
}

export function strlwr(): never {
  return useJsError('SDL_strlwr', 'String.prototype.toLowerCase()');
}

export function strchr(): never {
  return useJsError('SDL_strchr', 'String.prototype.indexOf()');
}

export function strrchr(): never {
  return useJsError('SDL_strrchr', 'String.prototype.lastIndexOf()');
}

export function strstr(): never {
  return useJsError('SDL_strstr', 'String.prototype.indexOf() or includes()');
}

export function strnstr(): never {
  return useJsError('SDL_strnstr', 'String.prototype.slice(0, n).indexOf()');
}

export function strcasestr(): never {
  return useJsError(
    'SDL_strcasestr',
    'str.toLowerCase().indexOf(needle.toLowerCase())'
  );
}

export function strtokR(): never {
  return useJsError('SDL_strtok_r', 'String.prototype.split()');
}

export function utf8strlen(): never {
  return useJsError(
    'SDL_utf8strlen',
    'String.prototype.length or [...str].length for codepoints'
  );
}

export function utf8strnlen(): never {
  return useJsError('SDL_utf8strnlen', '[...str].slice(0, n).length');
}

// Number to string conversion
export function itoa(): never {
  return useJsError('SDL_itoa', 'Number.prototype.toString(radix)');
}

export function uitoa(): never {
  return useJsError('SDL_uitoa', 'Number.prototype.toString(radix)');
}

export function ltoa(): never {
  return useJsError('SDL_ltoa', 'BigInt.prototype.toString(radix)');
}

export function ultoa(): never {
  return useJsError('SDL_ultoa', 'BigInt.prototype.toString(radix)');
}

export function lltoa(): never {
  return useJsError('SDL_lltoa', 'BigInt.prototype.toString(radix)');
}

export function ulltoa(): never {
  return useJsError('SDL_ulltoa', 'BigInt.prototype.toString(radix)');
}

// String to number conversion
export function atoi(): never {
  return useJsError('SDL_atoi', 'parseInt()');
}

export function atof(): never {
  return useJsError('SDL_atof', 'parseFloat()');
}

export function strtol(): never {
  return useJsError('SDL_strtol', 'parseInt()');
}

export function strtoul(): never {
  return useJsError('SDL_strtoul', 'parseInt() with >>> 0 for unsigned');
}

export function strtoll(): never {
  return useJsError('SDL_strtoll', 'BigInt()');
}

export function strtoull(): never {
  return useJsError('SDL_strtoull', 'BigInt()');
}

export function strtod(): never {
  return useJsError('SDL_strtod', 'parseFloat()');
}

// String comparison
export function strcmp(): never {
  return useJsError(
    'SDL_strcmp',
    'String.prototype.localeCompare() or === operator'
  );
}

export function strncmp(): never {
  return useJsError('SDL_strncmp', 'str1.slice(0, n) === str2.slice(0, n)');
}

export function strcasecmp(): never {
  return useJsError(
    'SDL_strcasecmp',
    'str1.toLowerCase() === str2.toLowerCase()'
  );
}

export function strncasecmp(): never {
  return useJsError(
    'SDL_strncasecmp',
    'str1.slice(0,n).toLowerCase() === str2.slice(0,n).toLowerCase()'
  );
}

export function strpbrk(): never {
  return useJsError('SDL_strpbrk', 'regex with character class');
}

// UTF-8 functions
export function stepUTF8(): never {
  return useJsError(
    'SDL_StepUTF8',
    'String.prototype.codePointAt() and iteration'
  );
}

export function stepBackUTF8(): never {
  return useJsError('SDL_StepBackUTF8', 'String iteration with [...str]');
}

export function ucs4ToUTF8(): never {
  return useJsError('SDL_UCS4ToUTF8', 'String.fromCodePoint()');
}

// Printf/scanf functions
export function sscanf(): never {
  return useJsError('SDL_sscanf', 'regex or manual parsing');
}

export function vsscanf(): never {
  return useJsError('SDL_vsscanf', 'regex or manual parsing');
}

export function snprintf(): never {
  return useJsError(
    'SDL_snprintf',
    'template literals or string formatting library'
  );
}

export function swprintf(): never {
  return useJsError(
    'SDL_swprintf',
    'template literals or string formatting library'
  );
}

export function vsnprintf(): never {
  return useJsError(
    'SDL_vsnprintf',
    'template literals or string formatting library'
  );
}

export function vswprintf(): never {
  return useJsError(
    'SDL_vswprintf',
    'template literals or string formatting library'
  );
}

export function asprintf(): never {
  return useJsError(
    'SDL_asprintf',
    'template literals or string formatting library'
  );
}

export function vasprintf(): never {
  return useJsError(
    'SDL_vasprintf',
    'template literals or string formatting library'
  );
}

// Random number functions
export function srand(): never {
  return useJsError('SDL_srand', 'N/A - Math.random() has no seed');
}

export function rand(): never {
  return useJsError('SDL_rand', 'Math.floor(Math.random() * n)');
}

export function randf(): never {
  return useJsError('SDL_randf', 'Math.random()');
}

export function randBits(): never {
  return useJsError(
    'SDL_rand_bits',
    'crypto.getRandomValues(new Uint32Array(1))[0]'
  );
}

export function randR(): never {
  return useJsError('SDL_rand_r', 'a seeded PRNG library');
}

export function randfR(): never {
  return useJsError('SDL_randf_r', 'a seeded PRNG library');
}

export function randBitsR(): never {
  return useJsError('SDL_rand_bits_r', 'a seeded PRNG library');
}

// Math functions
export function acos(): never {
  return useJsError('SDL_acos', 'Math.acos()');
}

export function acosf(): never {
  return useJsError('SDL_acosf', 'Math.acos()');
}

export function asin(): never {
  return useJsError('SDL_asin', 'Math.asin()');
}

export function asinf(): never {
  return useJsError('SDL_asinf', 'Math.asin()');
}

export function atan(): never {
  return useJsError('SDL_atan', 'Math.atan()');
}

export function atanf(): never {
  return useJsError('SDL_atanf', 'Math.atan()');
}

export function atan2(): never {
  return useJsError('SDL_atan2', 'Math.atan2()');
}

export function atan2f(): never {
  return useJsError('SDL_atan2f', 'Math.atan2()');
}

export function ceil(): never {
  return useJsError('SDL_ceil', 'Math.ceil()');
}

export function ceilf(): never {
  return useJsError('SDL_ceilf', 'Math.ceil()');
}

export function copysign(): never {
  return useJsError('SDL_copysign', 'Math.sign(y) * Math.abs(x)');
}

export function copysignf(): never {
  return useJsError('SDL_copysignf', 'Math.sign(y) * Math.abs(x)');
}

export function cos(): never {
  return useJsError('SDL_cos', 'Math.cos()');
}

export function cosf(): never {
  return useJsError('SDL_cosf', 'Math.cos()');
}

export function exp(): never {
  return useJsError('SDL_exp', 'Math.exp()');
}

export function expf(): never {
  return useJsError('SDL_expf', 'Math.exp()');
}

export function fabs(): never {
  return useJsError('SDL_fabs', 'Math.abs()');
}

export function fabsf(): never {
  return useJsError('SDL_fabsf', 'Math.abs()');
}

export function floor(): never {
  return useJsError('SDL_floor', 'Math.floor()');
}

export function floorf(): never {
  return useJsError('SDL_floorf', 'Math.floor()');
}

export function trunc(): never {
  return useJsError('SDL_trunc', 'Math.trunc()');
}

export function truncf(): never {
  return useJsError('SDL_truncf', 'Math.trunc()');
}

export function fmod(): never {
  return useJsError('SDL_fmod', 'x % y');
}

export function fmodf(): never {
  return useJsError('SDL_fmodf', 'x % y');
}

export function isinf(): never {
  return useJsError('SDL_isinf', '!isFinite(x) && !isNaN(x)');
}

export function isinff(): never {
  return useJsError('SDL_isinff', '!isFinite(x) && !isNaN(x)');
}

export function isnan(): never {
  return useJsError('SDL_isnan', 'Number.isNaN() or isNaN()');
}

export function isnanf(): never {
  return useJsError('SDL_isnanf', 'Number.isNaN() or isNaN()');
}

export function log(): never {
  return useJsError('SDL_log', 'Math.log()');
}

export function logf(): never {
  return useJsError('SDL_logf', 'Math.log()');
}

export function log10(): never {
  return useJsError('SDL_log10', 'Math.log10()');
}

export function log10f(): never {
  return useJsError('SDL_log10f', 'Math.log10()');
}

export function modf(): never {
  return useJsError('SDL_modf', 'Math.trunc() for integer, x % 1 for fraction');
}

export function modff(): never {
  return useJsError(
    'SDL_modff',
    'Math.trunc() for integer, x % 1 for fraction'
  );
}

export function pow(): never {
  return useJsError('SDL_pow', 'Math.pow() or ** operator');
}

export function powf(): never {
  return useJsError('SDL_powf', 'Math.pow() or ** operator');
}

export function round(): never {
  return useJsError('SDL_round', 'Math.round()');
}

export function roundf(): never {
  return useJsError('SDL_roundf', 'Math.round()');
}

export function lround(): never {
  return useJsError('SDL_lround', 'Math.round()');
}

export function lroundf(): never {
  return useJsError('SDL_lroundf', 'Math.round()');
}

export function scalbn(): never {
  return useJsError('SDL_scalbn', 'x * Math.pow(2, n)');
}

export function scalbnf(): never {
  return useJsError('SDL_scalbnf', 'x * Math.pow(2, n)');
}

export function sin(): never {
  return useJsError('SDL_sin', 'Math.sin()');
}

export function sinf(): never {
  return useJsError('SDL_sinf', 'Math.sin()');
}

export function sqrt(): never {
  return useJsError('SDL_sqrt', 'Math.sqrt()');
}

export function sqrtf(): never {
  return useJsError('SDL_sqrtf', 'Math.sqrt()');
}

export function tan(): never {
  return useJsError('SDL_tan', 'Math.tan()');
}

export function tanf(): never {
  return useJsError('SDL_tanf', 'Math.tan()');
}

// iconv functions
export function iconvOpen(): never {
  return useJsError('SDL_iconv_open', 'TextEncoder/TextDecoder');
}

export function iconvClose(): never {
  return useJsError('SDL_iconv_close', 'garbage collection (automatic)');
}

export function iconv(): never {
  return useJsError('SDL_iconv', 'TextEncoder/TextDecoder');
}

export function iconvString(): never {
  return useJsError('SDL_iconv_string', 'TextEncoder/TextDecoder');
}
