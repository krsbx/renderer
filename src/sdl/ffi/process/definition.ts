import { type FFIFunction, FFIType } from 'bun:ffi';

export const ProcessDefinition = {
  // SDL_Process * SDL_CreateProcess(const char * const *args, bool pipe_stdio);     // Create a new process.
  SDL_CreateProcess: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.ptr,
  },
  // SDL_Process * SDL_CreateProcessWithProperties(SDL_PropertiesID props);          // Create a new process with the specified properties.
  SDL_CreateProcessWithProperties: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // SDL_PropertiesID SDL_GetProcessProperties(SDL_Process *process);                // Get the properties associated with a process.
  SDL_GetProcessProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // void * SDL_ReadProcess(SDL_Process *process, size_t *datasize, int *exitcode);  // Read all the output from a process.
  SDL_ReadProcess: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_IOStream * SDL_GetProcessInput(SDL_Process *process);                       // Get the SDL_IOStream associated with process standard input.
  SDL_GetProcessInput: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_IOStream * SDL_GetProcessOutput(SDL_Process *process);                      // Get the SDL_IOStream associated with process standard output.
  SDL_GetProcessOutput: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_KillProcess(SDL_Process *process, bool force);                         // Stop a process.
  SDL_KillProcess: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_WaitProcess(SDL_Process *process, bool block, int *exitcode);          // Wait for a process to finish.
  SDL_WaitProcess: {
    args: [FFIType.ptr, FFIType.bool, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_DestroyProcess(SDL_Process *process);                                  // Destroy a previously created process object.
  SDL_DestroyProcess: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
