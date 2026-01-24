import { FFIType, type FFIFunction } from 'bun:ffi';

export const AutomationDefinition = {
  // AutomationEventList LoadAutomationEventList(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadAutomationEventList: {
  //   args: [FFIType.cstring],
  //   returns: FFIType.ptr,
  // },
  // void UnloadAutomationEventList(AutomationEventList list);
  UnloadAutomationEventList: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool ExportAutomationEventList(AutomationEventList list, const char *fileName);
  ExportAutomationEventList: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // void SetAutomationEventList(AutomationEventList *list);
  SetAutomationEventList: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetAutomationEventBaseFrame(int frame);
  SetAutomationEventBaseFrame: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },
  // void StartAutomationEventRecording(void);
  StartAutomationEventRecording: {
    args: [],
    returns: FFIType.void,
  },
  // void StopAutomationEventRecording(void);
  StopAutomationEventRecording: {
    args: [],
    returns: FFIType.void,
  },
  // void PlayAutomationEvent(AutomationEvent event);
  PlayAutomationEvent: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
