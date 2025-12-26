import { FFIType, type FFIFunction } from 'bun:ffi';

export const StdIncDefinition = {
  // #define SDL_COMPILE_TIME_ASSERT(name, x)                                                                                                                    // A compile-time assertion.
  SDL_COMPILE_TIME_ASSERT: {
    args: [FFIType.cstring, FFIType.bool],
    returns: FFIType.void,
  },
  // #define SDL_arraysize(array)                                                                                                                                // The number of elements in a static array.
  SDL_arraysize: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // #define SDL_reinterpret_cast(type, expression)                                                                                                              // Handle a Reinterpret Cast properly whether using C or C++.
  SDL_reinterpret_cast: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // #define SDL_static_cast(type, expression)                                                                                                                   // Handle a Static Cast properly whether using C or C++.
  SDL_static_cast: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // #define SDL_const_cast(type, expression)                                                                                                                    // Handle a Const Cast properly whether using C or C++.
  SDL_const_cast: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void * SDL_malloc(size_t size);                                                                                                                             // Allocate uninitialized memory.
  SDL_malloc: {
    args: [FFIType.u64],
    returns: FFIType.ptr,
  },
  // void * SDL_calloc(size_t nmemb, size_t size);                                                                                                               // Allocate a zero-initialized array.
  SDL_calloc: {
    args: [FFIType.u64, FFIType.u64],
    returns: FFIType.ptr,
  },
  // void * SDL_realloc(void *mem, size_t size);                                                                                                                 // Change the size of allocated memory.
  SDL_realloc: {
    args: [FFIType.ptr, FFIType.u64],
    returns: FFIType.ptr,
  },
  // void SDL_free(void *mem);                                                                                                                                   // Free allocated memory.
  SDL_free: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_GetOriginalMemoryFunctions(SDL_malloc_func *malloc_func, SDL_calloc_func *calloc_func, SDL_realloc_func *realloc_func, SDL_free_func *free_func);  // Get the original set of SDL memory functions.
  SDL_GetOriginalMemoryFunctions: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_GetMemoryFunctions(SDL_malloc_func *malloc_func, SDL_calloc_func *calloc_func, SDL_realloc_func *realloc_func, SDL_free_func *free_func);          // Get the current set of SDL memory functions.
  SDL_GetMemoryFunctions: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_SetMemoryFunctions(SDL_malloc_func malloc_func, SDL_calloc_func calloc_func, SDL_realloc_func realloc_func, SDL_free_func free_func);              // Replace SDL's memory allocation functions with a custom set.
  SDL_SetMemoryFunctions: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void * SDL_aligned_alloc(size_t alignment, size_t size);                                                                                                    // Allocate memory aligned to a specific alignment.
  SDL_aligned_alloc: {
    args: [FFIType.u64, FFIType.u64],
    returns: FFIType.ptr,
  },
  // void SDL_aligned_free(void *mem);                                                                                                                           // Free memory allocated by SDL_aligned_alloc().
  SDL_aligned_free: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // int SDL_GetNumAllocations(void);                                                                                                                            // Get the number of outstanding (unfreed) allocations.
  SDL_GetNumAllocations: {
    args: [],
    returns: FFIType.i32,
  },
  // SDL_Environment * SDL_GetEnvironment(void);                                                                                                                 // Get the process environment.
  SDL_GetEnvironment: {
    args: [],
    returns: FFIType.ptr,
  },
  // SDL_Environment * SDL_CreateEnvironment(bool populated);                                                                                                    // Create a set of environment variables
  SDL_CreateEnvironment: {
    args: [FFIType.bool],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetEnvironmentVariable(SDL_Environment *env, const char *name);                                                                            // Get the value of a variable in the environment.
  SDL_GetEnvironmentVariable: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.cstring,
  },
  // char ** SDL_GetEnvironmentVariables(SDL_Environment *env);                                                                                                  // Get all variables in the environment.
  SDL_GetEnvironmentVariables: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_SetEnvironmentVariable(SDL_Environment *env, const char *name, const char *value, bool overwrite);                                                 // Set the value of a variable in the environment.
  SDL_SetEnvironmentVariable: {
    args: [FFIType.ptr, FFIType.cstring, FFIType.cstring, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_UnsetEnvironmentVariable(SDL_Environment *env, const char *name);                                                                                  // Clear a variable from the environment.
  SDL_UnsetEnvironmentVariable: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // void SDL_DestroyEnvironment(SDL_Environment *env);                                                                                                          // Destroy a set of environment variables.
  SDL_DestroyEnvironment: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // const char * SDL_getenv(const char *name);                                                                                                                  // Get the value of a variable in the environment.
  SDL_getenv: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // const char * SDL_getenv_unsafe(const char *name);                                                                                                           // Get the value of a variable in the environment.
  SDL_getenv_unsafe: {
    args: [FFIType.cstring],
    returns: FFIType.cstring,
  },
  // int SDL_setenv_unsafe(const char *name, const char *value, int overwrite);                                                                                  // Set the value of a variable in the environment.
  SDL_setenv_unsafe: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_unsetenv_unsafe(const char *name);                                                                                                                  // Clear a variable from the environment.
  SDL_unsetenv_unsafe: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // void SDL_qsort(void *base, size_t nmemb, size_t size, SDL_CompareCallback compare);                                                                         // Sort an array.
  SDL_qsort: {
    args: [FFIType.ptr, FFIType.u64, FFIType.u64, FFIType.ptr],
    returns: FFIType.void,
  },
  // void * SDL_bsearch(const void *key, const void *base, size_t nmemb, size_t size, SDL_CompareCallback compare);                                              // Perform a binary search on a previously sorted array.
  SDL_bsearch: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64, FFIType.u64, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_qsort_r(void *base, size_t nmemb, size_t size, SDL_CompareCallback_r compare, void *userdata);                                                     // Sort an array, passing a userdata pointer to the compare function.
  SDL_qsort_r: {
    args: [FFIType.ptr, FFIType.u64, FFIType.u64, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void * SDL_bsearch_r(const void *key, const void *base, size_t nmemb, size_t size, SDL_CompareCallback_r compare, void *userdata);                          // Perform a binary search on a previously sorted array, passing a userdata pointer to the compare function.
  SDL_bsearch_r: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.u64,
      FFIType.u64,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.ptr,
  },
  // int SDL_abs(int x);                                                                                                                                         // Compute the absolute value of `x`.
  SDL_abs: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_isalpha(int x);                                                                                                                                     // Query if a character is alphabetic (a letter).
  SDL_isalpha: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_isalnum(int x);                                                                                                                                     // Query if a character is alphabetic (a letter) or a number.
  SDL_isalnum: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_isblank(int x);                                                                                                                                     // Report if a character is blank (a space or tab).
  SDL_isblank: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_iscntrl(int x);                                                                                                                                     // Report if a character is a control character.
  SDL_iscntrl: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_isdigit(int x);                                                                                                                                     // Report if a character is a numeric digit.
  SDL_isdigit: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_isxdigit(int x);                                                                                                                                    // Report if a character is a hexadecimal digit.
  SDL_isxdigit: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_ispunct(int x);                                                                                                                                     // Report if a character is a punctuation mark.
  SDL_ispunct: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_isspace(int x);                                                                                                                                     // Report if a character is whitespace.
  SDL_isspace: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_isupper(int x);                                                                                                                                     // Report if a character is upper case.
  SDL_isupper: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_islower(int x);                                                                                                                                     // Report if a character is lower case.
  SDL_islower: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_isprint(int x);                                                                                                                                     // Report if a character is "printable".
  SDL_isprint: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_isgraph(int x);                                                                                                                                     // Report if a character is any "printable" except space.
  SDL_isgraph: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_toupper(int x);                                                                                                                                     // Convert low-ASCII English letters to uppercase.
  SDL_toupper: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_tolower(int x);                                                                                                                                     // Convert low-ASCII English letters to lowercase.
  SDL_tolower: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // Uint16 SDL_crc16(Uint16 crc, const void *data, size_t len);                                                                                                 // Calculate a CRC-16 value.
  SDL_crc16: {
    args: [FFIType.u16, FFIType.ptr, FFIType.u64],
    returns: FFIType.u16,
  },
  // Uint32 SDL_crc32(Uint32 crc, const void *data, size_t len);                                                                                                 // Calculate a CRC-32 value.
  SDL_crc32: {
    args: [FFIType.u32, FFIType.ptr, FFIType.u64],
    returns: FFIType.u32,
  },
  // Uint32 SDL_murmur3_32(const void *data, size_t len, Uint32 seed);                                                                                           // Calculate a 32-bit MurmurHash3 value for a block of data.
  SDL_murmur3_32: {
    args: [FFIType.ptr, FFIType.u64, FFIType.u32],
    returns: FFIType.u32,
  },
  // void * SDL_memcpy(void *dst, const void *src, size_t len);                                                                                                  // Copy non-overlapping memory.
  SDL_memcpy: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.ptr,
  },
  // void * SDL_memmove(void *dst, const void *src, size_t len);                                                                                                 // Copy memory ranges that might overlap.
  SDL_memmove: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.ptr,
  },
  // void * SDL_memset(void *dst, int c, size_t len);                                                                                                            // Initialize all bytes of buffer of memory to a specific value.
  SDL_memset: {
    args: [FFIType.ptr, FFIType.i32, FFIType.u64],
    returns: FFIType.ptr,
  },
  // void * SDL_memset4(void *dst, Uint32 val, size_t dwords);                                                                                                   // Initialize all 32-bit words of buffer of memory to a specific value.
  SDL_memset4: {
    args: [FFIType.ptr, FFIType.u32, FFIType.u64],
    returns: FFIType.ptr,
  },
  // int SDL_memcmp(const void *s1, const void *s2, size_t len);                                                                                                 // Compare two buffers of memory.
  SDL_memcmp: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.i32,
  },
  // size_t SDL_wcslen(const wchar_t *wstr);                                                                                                                     // This works exactly like wcslen() but doesn't require access to a C runtime.
  SDL_wcslen: {
    args: [FFIType.ptr],
    returns: FFIType.u64,
  },
  // size_t SDL_wcsnlen(const wchar_t *wstr, size_t maxlen);                                                                                                     // This works exactly like wcsnlen() but doesn't require access to a C runtime.
  SDL_wcsnlen: {
    args: [FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // size_t SDL_wcslcpy(wchar_t *dst, const wchar_t *src, size_t maxlen);                                                                                        // Copy a wide string.
  SDL_wcslcpy: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // size_t SDL_wcslcat(wchar_t *dst, const wchar_t *src, size_t maxlen);                                                                                        // Concatenate wide strings.
  SDL_wcslcat: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // wchar_t * SDL_wcsdup(const wchar_t *wstr);                                                                                                                  // Allocate a copy of a wide string.
  SDL_wcsdup: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // wchar_t * SDL_wcsstr(const wchar_t *haystack, const wchar_t *needle);                                                                                       // Search a wide string for the first instance of a specific substring.
  SDL_wcsstr: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // wchar_t * SDL_wcsnstr(const wchar_t *haystack, const wchar_t *needle, size_t maxlen);                                                                       // Search a wide string, up to n wide chars, for the first instance of a specific substring.
  SDL_wcsnstr: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.ptr,
  },
  // int SDL_wcscmp(const wchar_t *str1, const wchar_t *str2);                                                                                                   // Compare two null-terminated wide strings.
  SDL_wcscmp: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_wcsncmp(const wchar_t *str1, const wchar_t *str2, size_t maxlen);                                                                                   // Compare two wide strings up to a number of wchar_t values.
  SDL_wcsncmp: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.i32,
  },
  // int SDL_wcscasecmp(const wchar_t *str1, const wchar_t *str2);                                                                                               // Compare two null-terminated wide strings, case-insensitively.
  SDL_wcscasecmp: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_wcsncasecmp(const wchar_t *str1, const wchar_t *str2, size_t maxlen);                                                                               // Compare two wide strings, case-insensitively, up to a number of wchar_t.
  SDL_wcsncasecmp: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.i32,
  },
  // long SDL_wcstol(const wchar_t *str, wchar_t **endp, int base);                                                                                              // Parse a `long` from a wide string.
  SDL_wcstol: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.i64,
  },
  // size_t SDL_strlen(const char *str);                                                                                                                         // This works exactly like strlen() but doesn't require access to a C runtime.
  SDL_strlen: {
    args: [FFIType.ptr],
    returns: FFIType.u64,
  },
  // size_t SDL_strnlen(const char *str, size_t maxlen);                                                                                                         // This works exactly like strnlen() but doesn't require access to a C runtime.
  SDL_strnlen: {
    args: [FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // size_t SDL_strlcpy(char *dst, const char *src, size_t maxlen);                                                                                              // Copy a string.
  SDL_strlcpy: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // size_t SDL_utf8strlcpy(char *dst, const char *src, size_t dst_bytes);                                                                                       // Copy an UTF-8 string.
  SDL_utf8strlcpy: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // size_t SDL_strlcat(char *dst, const char *src, size_t maxlen);                                                                                              // Concatenate strings.
  SDL_strlcat: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // char * SDL_strdup(const char *str);                                                                                                                         // Allocate a copy of a string.
  SDL_strdup: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char * SDL_strndup(const char *str, size_t maxlen);                                                                                                         // Allocate a copy of a string, up to n characters.
  SDL_strndup: {
    args: [FFIType.ptr, FFIType.u64],
    returns: FFIType.ptr,
  },
  // char * SDL_strrev(char *str);                                                                                                                               // Reverse a string's contents.
  SDL_strrev: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char * SDL_strupr(char *str);                                                                                                                               // Convert a string to uppercase.
  SDL_strupr: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char * SDL_strlwr(char *str);                                                                                                                               // Convert a string to lowercase.
  SDL_strlwr: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char * SDL_strchr(const char *str, int c);                                                                                                                  // Search a string for the first instance of a specific byte.
  SDL_strchr: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // char * SDL_strrchr(const char *str, int c);                                                                                                                 // Search a string for the last instance of a specific byte.
  SDL_strrchr: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // char * SDL_strstr(const char *haystack, const char *needle);                                                                                                // Search a string for the first instance of a specific substring.
  SDL_strstr: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char * SDL_strnstr(const char *haystack, const char *needle, size_t maxlen);                                                                                // Search a string, up to n bytes, for the first instance of a specific substring.
  SDL_strnstr: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.ptr,
  },
  // char * SDL_strcasestr(const char *haystack, const char *needle);                                                                                            // Search a UTF-8 string for the first instance of a specific substring, case-insensitively.
  SDL_strcasestr: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // char * SDL_strtok_r(char *str, const char *delim, char **saveptr);                                                                                          // This works exactly like strtok_r() but doesn't require access to a C runtime.
  SDL_strtok_r: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // size_t SDL_utf8strlen(const char *str);                                                                                                                     // Count the number of codepoints in a UTF-8 string.
  SDL_utf8strlen: {
    args: [FFIType.ptr],
    returns: FFIType.u64,
  },
  // size_t SDL_utf8strnlen(const char *str, size_t bytes);                                                                                                      // Count the number of codepoints in a UTF-8 string, up to n bytes.
  SDL_utf8strnlen: {
    args: [FFIType.ptr, FFIType.u64],
    returns: FFIType.u64,
  },
  // char * SDL_itoa(int value, char *str, int radix);                                                                                                           // Convert an integer into a string.
  SDL_itoa: {
    args: [FFIType.i32, FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // char * SDL_uitoa(unsigned int value, char *str, int radix);                                                                                                 // Convert an unsigned integer into a string.
  SDL_uitoa: {
    args: [FFIType.u32, FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // char * SDL_ltoa(long value, char *str, int radix);                                                                                                          // Convert a long integer into a string.
  SDL_ltoa: {
    args: [FFIType.i64, FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // char * SDL_ultoa(unsigned long value, char *str, int radix);                                                                                                // Convert an unsigned long integer into a string.
  SDL_ultoa: {
    args: [FFIType.u64, FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // char * SDL_lltoa(long long value, char *str, int radix);                                                                                                    // Convert a long long integer into a string.
  SDL_lltoa: {
    args: [FFIType.i64, FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // char * SDL_ulltoa(unsigned long long value, char *str, int radix);                                                                                          // Convert an unsigned long long integer into a string.
  SDL_ulltoa: {
    args: [FFIType.u64, FFIType.ptr, FFIType.i32],
    returns: FFIType.ptr,
  },
  // int SDL_atoi(const char *str);                                                                                                                              // Parse an `int` from a string.
  SDL_atoi: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // double SDL_atof(const char *str);                                                                                                                           // Parse a `double` from a string.
  SDL_atof: {
    args: [FFIType.ptr],
    returns: FFIType.f64,
  },
  // long SDL_strtol(const char *str, char **endp, int base);                                                                                                    // Parse a `long` from a string.
  SDL_strtol: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.i64,
  },
  // unsigned long SDL_strtoul(const char *str, char **endp, int base);                                                                                          // Parse an `unsigned long` from a string.
  SDL_strtoul: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.u64,
  },
  // long long SDL_strtoll(const char *str, char **endp, int base);                                                                                              // Parse a `long long` from a string.
  SDL_strtoll: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.i64,
  },
  // unsigned long long SDL_strtoull(const char *str, char **endp, int base);                                                                                    // Parse an `unsigned long long` from a string.
  SDL_strtoull: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.u64,
  },
  // double SDL_strtod(const char *str, char **endp);                                                                                                            // Parse a `double` from a string.
  SDL_strtod: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.f64,
  },
  // int SDL_strcmp(const char *str1, const char *str2);                                                                                                         // Compare two null-terminated UTF-8 strings.
  SDL_strcmp: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_strncmp(const char *str1, const char *str2, size_t maxlen);                                                                                         // Compare two UTF-8 strings up to a number of bytes.
  SDL_strncmp: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.i32,
  },
  // int SDL_strcasecmp(const char *str1, const char *str2);                                                                                                     // Compare two null-terminated UTF-8 strings, case-insensitively.
  SDL_strcasecmp: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_strncasecmp(const char *str1, const char *str2, size_t maxlen);                                                                                     // Compare two UTF-8 strings, case-insensitively, up to a number of bytes.
  SDL_strncasecmp: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.i32,
  },
  // char * SDL_strpbrk(const char *str, const char *breakset);                                                                                                  // Searches a string for the first occurrence of any character contained in a breakset, and returns a pointer from the string to that character.
  SDL_strpbrk: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // Uint32 SDL_StepUTF8(const char **pstr, size_t *pslen);                                                                                                      // Decode a UTF-8 string, one Unicode codepoint at a time.
  SDL_StepUTF8: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.u32,
  },
  // Uint32 SDL_StepBackUTF8(const char *start, const char **pstr);                                                                                              // Decode a UTF-8 string in reverse, one Unicode codepoint at a time.
  SDL_StepBackUTF8: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.u32,
  },
  // char * SDL_UCS4ToUTF8(Uint32 codepoint, char *dst);                                                                                                         // Convert a single Unicode codepoint to UTF-8.
  SDL_UCS4ToUTF8: {
    args: [FFIType.u32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // int SDL_sscanf(const char *text, const char *fmt, ... ...);                                                                                                 // This works exactly like sscanf() but doesn't require access to a C runtime.
  SDL_sscanf: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_vsscanf(const char *text, const char *fmt, va_list ap);                                                                                             // This works exactly like vsscanf() but doesn't require access to a C runtime.
  SDL_vsscanf: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_snprintf(char *text, size_t maxlen, const char *fmt, ... ...);                                                                                      // This works exactly like snprintf() but doesn't require access to a C runtime.
  SDL_snprintf: {
    args: [FFIType.ptr, FFIType.u64, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_swprintf(wchar_t *text, size_t maxlen, const wchar_t *fmt, ... ...);                                                                                // This works exactly like swprintf() but doesn't require access to a C runtime.
  SDL_swprintf: {
    args: [FFIType.ptr, FFIType.u64, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_vsnprintf(char *text, size_t maxlen, const char *fmt, va_list ap);                                                                                  // This works exactly like vsnprintf() but doesn't require access to a C runtime.
  SDL_vsnprintf: {
    args: [FFIType.ptr, FFIType.u64, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_vswprintf(wchar_t *text, size_t maxlen, const wchar_t *fmt, va_list ap);                                                                            // This works exactly like vswprintf() but doesn't require access to a C runtime.
  SDL_vswprintf: {
    args: [FFIType.ptr, FFIType.u64, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_asprintf(char **strp, const char *fmt, ... ...);                                                                                                    // This works exactly like asprintf() but doesn't require access to a C runtime.
  SDL_asprintf: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // int SDL_vasprintf(char **strp, const char *fmt, va_list ap);                                                                                                // This works exactly like vasprintf() but doesn't require access to a C runtime.
  SDL_vasprintf: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // void SDL_srand(Uint64 seed);                                                                                                                                // Seeds the pseudo-random number generator.
  SDL_srand: {
    args: [FFIType.u64],
    returns: FFIType.void,
  },
  // Sint32 SDL_rand(Sint32 n);                                                                                                                                  // Generate a pseudo-random number less than n for positive n
  SDL_rand: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // float SDL_randf(void);                                                                                                                                      // Generate a uniform pseudo-random floating point number less than 1.0
  SDL_randf: {
    args: [],
    returns: FFIType.f32,
  },
  // Uint32 SDL_rand_bits(void);                                                                                                                                 // Generate 32 pseudo-random bits.
  SDL_rand_bits: {
    args: [],
    returns: FFIType.u32,
  },
  // Sint32 SDL_rand_r(Uint64 *state, Sint32 n);                                                                                                                 // Generate a pseudo-random number less than n for positive n
  SDL_rand_r: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.i32,
  },
  // float SDL_randf_r(Uint64 *state);                                                                                                                           // Generate a uniform pseudo-random floating point number less than 1.0
  SDL_randf_r: {
    args: [FFIType.ptr],
    returns: FFIType.f32,
  },
  // Uint32 SDL_rand_bits_r(Uint64 *state);                                                                                                                      // Generate 32 pseudo-random bits.
  SDL_rand_bits_r: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // double SDL_acos(double x);                                                                                                                                  // Compute the arc cosine of `x`.
  SDL_acos: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_acosf(float x);                                                                                                                                   // Compute the arc cosine of `x`.
  SDL_acosf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_asin(double x);                                                                                                                                  // Compute the arc sine of `x`.
  SDL_asin: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_asinf(float x);                                                                                                                                   // Compute the arc sine of `x`.
  SDL_asinf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_atan(double x);                                                                                                                                  // Compute the arc tangent of `x`.
  SDL_atan: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_atanf(float x);                                                                                                                                   // Compute the arc tangent of `x`.
  SDL_atanf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_atan2(double y, double x);                                                                                                                       // Compute the arc tangent of `y / x`, using the signs of x and y to adjust the result's quadrant.
  SDL_atan2: {
    args: [FFIType.f64, FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_atan2f(float y, float x);                                                                                                                         // Compute the arc tangent of `y / x`, using the signs of x and y to adjust the result's quadrant.
  SDL_atan2f: {
    args: [FFIType.f32, FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_ceil(double x);                                                                                                                                  // Compute the ceiling of `x`.
  SDL_ceil: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_ceilf(float x);                                                                                                                                   // Compute the ceiling of `x`.
  SDL_ceilf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_copysign(double x, double y);                                                                                                                    // Copy the sign of one floating-point value to another.
  SDL_copysign: {
    args: [FFIType.f64, FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_copysignf(float x, float y);                                                                                                                      // Copy the sign of one floating-point value to another.
  SDL_copysignf: {
    args: [FFIType.f32, FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_cos(double x);                                                                                                                                   // Compute the cosine of `x`.
  SDL_cos: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_cosf(float x);                                                                                                                                    // Compute the cosine of `x`.
  SDL_cosf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_exp(double x);                                                                                                                                   // Compute the exponential of `x`.
  SDL_exp: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_expf(float x);                                                                                                                                    // Compute the exponential of `x`.
  SDL_expf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_fabs(double x);                                                                                                                                  // Compute the absolute value of `x`
  SDL_fabs: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_fabsf(float x);                                                                                                                                   // Compute the absolute value of `x`
  SDL_fabsf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_floor(double x);                                                                                                                                 // Compute the floor of `x`.
  SDL_floor: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_floorf(float x);                                                                                                                                  // Compute the floor of `x`.
  SDL_floorf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_trunc(double x);                                                                                                                                 // Truncate `x` to an integer.
  SDL_trunc: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_truncf(float x);                                                                                                                                  // Truncate `x` to an integer.
  SDL_truncf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_fmod(double x, double y);                                                                                                                        // Return the floating-point remainder of `x / y`
  SDL_fmod: {
    args: [FFIType.f64, FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_fmodf(float x, float y);                                                                                                                          // Return the floating-point remainder of `x / y`
  SDL_fmodf: {
    args: [FFIType.f32, FFIType.f32],
    returns: FFIType.f32,
  },
  // int SDL_isinf(double x);                                                                                                                                    // Return whether the value is infinity.
  SDL_isinf: {
    args: [FFIType.f64],
    returns: FFIType.i32,
  },
  // int SDL_isinff(float x);                                                                                                                                    // Return whether the value is infinity.
  SDL_isinff: {
    args: [FFIType.f32],
    returns: FFIType.i32,
  },
  // int SDL_isnan(double x);                                                                                                                                    // Return whether the value is NaN.
  SDL_isnan: {
    args: [FFIType.f64],
    returns: FFIType.i32,
  },
  // int SDL_isnanf(float x);                                                                                                                                    // Return whether the value is NaN.
  SDL_isnanf: {
    args: [FFIType.f32],
    returns: FFIType.i32,
  },
  // double SDL_log(double x);                                                                                                                                   // Compute the natural logarithm of `x`.
  SDL_log: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_logf(float x);                                                                                                                                    // Compute the natural logarithm of `x`.
  SDL_logf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_log10(double x);                                                                                                                                 // Compute the base-10 logarithm of `x`.
  SDL_log10: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_log10f(float x);                                                                                                                                  // Compute the base-10 logarithm of `x`.
  SDL_log10f: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_modf(double x, double *y);                                                                                                                       // Split `x` into integer and fractional parts
  SDL_modf: {
    args: [FFIType.f64, FFIType.ptr],
    returns: FFIType.f64,
  },
  // float SDL_modff(float x, float *y);                                                                                                                         // Split `x` into integer and fractional parts
  SDL_modff: {
    args: [FFIType.f32, FFIType.ptr],
    returns: FFIType.f32,
  },
  // double SDL_pow(double x, double y);                                                                                                                         // Raise `x` to the power `y`
  SDL_pow: {
    args: [FFIType.f64, FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_powf(float x, float y);                                                                                                                           // Raise `x` to the power `y`
  SDL_powf: {
    args: [FFIType.f32, FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_round(double x);                                                                                                                                 // Round `x` to the nearest integer.
  SDL_round: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_roundf(float x);                                                                                                                                  // Round `x` to the nearest integer.
  SDL_roundf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // long SDL_lround(double x);                                                                                                                                  // Round `x` to the nearest integer representable as a long
  SDL_lround: {
    args: [FFIType.f64],
    returns: FFIType.i64,
  },
  // long SDL_lroundf(float x);                                                                                                                                  // Round `x` to the nearest integer representable as a long
  SDL_lroundf: {
    args: [FFIType.f32],
    returns: FFIType.i64,
  },
  // double SDL_scalbn(double x, int n);                                                                                                                         // Scale `x` by an integer power of two.
  SDL_scalbn: {
    args: [FFIType.f64, FFIType.i32],
    returns: FFIType.f64,
  },
  // float SDL_scalbnf(float x, int n);                                                                                                                          // Scale `x` by an integer power of two.
  SDL_scalbnf: {
    args: [FFIType.f32, FFIType.i32],
    returns: FFIType.f32,
  },
  // double SDL_sin(double x);                                                                                                                                   // Compute the sine of `x`.
  SDL_sin: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_sinf(float x);                                                                                                                                    // Compute the sine of `x`.
  SDL_sinf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_sqrt(double x);                                                                                                                                  // Compute the square root of `x`.
  SDL_sqrt: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_sqrtf(float x);                                                                                                                                   // Compute the square root of `x`.
  SDL_sqrtf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // double SDL_tan(double x);                                                                                                                                   // Compute the tangent of `x`.
  SDL_tan: {
    args: [FFIType.f64],
    returns: FFIType.f64,
  },
  // float SDL_tanf(float x);                                                                                                                                    // Compute the tangent of `x`.
  SDL_tanf: {
    args: [FFIType.f32],
    returns: FFIType.f32,
  },
  // SDL_iconv_t SDL_iconv_open(const char *tocode, const char *fromcode);                                                                                       // This function allocates a context for the specified character set conversion.
  SDL_iconv_open: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // int SDL_iconv_close(SDL_iconv_t cd);                                                                                                                        // This function frees a context used for character set conversion.
  SDL_iconv_close: {
    args: [FFIType.ptr],
    returns: FFIType.i32,
  },
  // size_t SDL_iconv(SDL_iconv_t cd, const char **inbuf, size_t *inbytesleft, char **outbuf, size_t *outbytesleft);                                             // This function converts text between encodings, reading from and writing to a buffer.
  SDL_iconv: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.u64,
  },
  // char * SDL_iconv_string(const char *tocode, const char *fromcode, const char *inbuf, size_t inbytesleft);                                                   // Helper function to convert a string's encoding in one call.
  SDL_iconv_string: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u64],
    returns: FFIType.ptr,
  },
  // bool SDL_size_mul_check_overflow(size_t a, size_t b, size_t *ret);                                                                                          // Multiply two integers, checking for overflow.
  SDL_size_mul_check_overflow: {
    args: [FFIType.u64, FFIType.u64, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_size_add_check_overflow(size_t a, size_t b, size_t *ret);                                                                                          // Add two integers, checking for overflow.
  SDL_size_add_check_overflow: {
    args: [FFIType.u64, FFIType.u64, FFIType.ptr],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
