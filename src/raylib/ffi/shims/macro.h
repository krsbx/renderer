#ifndef RAYLIB_SHIM_MACRO_H
#define RAYLIB_SHIM_MACRO_H

#include <stddef.h>
#include <dlfcn.h>

// Shim macros for functions returning structs by value.
// These create wrapper functions that take an output pointer as the last parameter.
// The original function is resolved at runtime via dlsym from the already-loaded raylib.

#define SHIM_0(RetType, Name) \
    void Name(RetType* out) { \
        static RetType (*fn)(void) = NULL; \
        if (!fn) fn = (RetType (*)(void))dlsym(RTLD_DEFAULT, #Name); \
        *out = fn(); \
    }

#define SHIM_1(RetType, Name, T1, a1) \
    void Name(T1 a1, RetType* out) { \
        static RetType (*fn)(T1) = NULL; \
        if (!fn) fn = (RetType (*)(T1))dlsym(RTLD_DEFAULT, #Name); \
        *out = fn(a1); \
    }

#define SHIM_2(RetType, Name, T1, a1, T2, a2) \
    void Name(T1 a1, T2 a2, RetType* out) { \
        static RetType (*fn)(T1, T2) = NULL; \
        if (!fn) fn = (RetType (*)(T1, T2))dlsym(RTLD_DEFAULT, #Name); \
        *out = fn(a1, a2); \
    }

#define SHIM_3(RetType, Name, T1, a1, T2, a2, T3, a3) \
    void Name(T1 a1, T2 a2, T3 a3, RetType* out) { \
        static RetType (*fn)(T1, T2, T3) = NULL; \
        if (!fn) fn = (RetType (*)(T1, T2, T3))dlsym(RTLD_DEFAULT, #Name); \
        *out = fn(a1, a2, a3); \
    }

#define SHIM_4(RetType, Name, T1, a1, T2, a2, T3, a3, T4, a4) \
    void Name(T1 a1, T2 a2, T3 a3, T4 a4, RetType* out) { \
        static RetType (*fn)(T1, T2, T3, T4) = NULL; \
        if (!fn) fn = (RetType (*)(T1, T2, T3, T4))dlsym(RTLD_DEFAULT, #Name); \
        *out = fn(a1, a2, a3, a4); \
    }

#define SHIM_5(RetType, Name, T1, a1, T2, a2, T3, a3, T4, a4, T5, a5) \
    void Name(T1 a1, T2 a2, T3 a3, T4 a4, T5 a5, RetType* out) { \
        static RetType (*fn)(T1, T2, T3, T4, T5) = NULL; \
        if (!fn) fn = (RetType (*)(T1, T2, T3, T4, T5))dlsym(RTLD_DEFAULT, #Name); \
        *out = fn(a1, a2, a3, a4, a5); \
    }

#define SHIM_6(RetType, Name, T1, a1, T2, a2, T3, a3, T4, a4, T5, a5, T6, a6) \
    void Name(T1 a1, T2 a2, T3 a3, T4 a4, T5 a5, T6 a6, RetType* out) { \
        static RetType (*fn)(T1, T2, T3, T4, T5, T6) = NULL; \
        if (!fn) fn = (RetType (*)(T1, T2, T3, T4, T5, T6))dlsym(RTLD_DEFAULT, #Name); \
        *out = fn(a1, a2, a3, a4, a5, a6); \
    }

#define SHIM_7(RetType, Name, T1, a1, T2, a2, T3, a3, T4, a4, T5, a5, T6, a6, T7, a7) \
    void Name(T1 a1, T2 a2, T3 a3, T4 a4, T5 a5, T6 a6, T7 a7, RetType* out) { \
        static RetType (*fn)(T1, T2, T3, T4, T5, T6, T7) = NULL; \
        if (!fn) fn = (RetType (*)(T1, T2, T3, T4, T5, T6, T7))dlsym(RTLD_DEFAULT, #Name); \
        *out = fn(a1, a2, a3, a4, a5, a6, a7); \
    }

#define SHIM_8(RetType, Name, T1, a1, T2, a2, T3, a3, T4, a4, T5, a5, T6, a6, T7, a7, T8, a8) \
    void Name(T1 a1, T2 a2, T3 a3, T4 a4, T5 a5, T6 a6, T7 a7, T8 a8, RetType* out) { \
        static RetType (*fn)(T1, T2, T3, T4, T5, T6, T7, T8) = NULL; \
        if (!fn) fn = (RetType (*)(T1, T2, T3, T4, T5, T6, T7, T8))dlsym(RTLD_DEFAULT, #Name); \
        *out = fn(a1, a2, a3, a4, a5, a6, a7, a8); \
    }

#endif
