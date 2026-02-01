import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { AutomationEvent, AutomationEventList } from '../struct';

export function loadAutomationEventList(this: RayLib, fileName: string) {
  const list = AutomationEventList.create();

  this.symbols.LoadAutomationEventList(
    stringToCString(fileName).ptr,
    list.$memory
  );

  return list;
}

export function unloadAutomationEventList(
  this: RayLib,
  list: AutomationEventList
) {
  this.symbols.UnloadAutomationEventList(list.$memory);
}

export function exportAutomationEventList(
  this: RayLib,
  options: {
    list: AutomationEventList;
    fileName: string;
  }
) {
  return this.symbols.ExportAutomationEventList(
    options.list.$memory,
    stringToCString(options.fileName).ptr
  );
}

export function setAutomationEventList(
  this: RayLib,
  list: AutomationEventList
) {
  this.symbols.SetAutomationEventList(list.$memory);
}

export function setAutomationEventBaseFrame(this: RayLib, frame: number) {
  this.symbols.SetAutomationEventBaseFrame(frame);
}

export function startAutomationEventRecording(this: RayLib) {
  this.symbols.StartAutomationEventRecording();
}

export function stopAutomationEventRecording(this: RayLib) {
  this.symbols.StopAutomationEventRecording();
}

export function playAutomationEvent(this: RayLib, event: AutomationEvent) {
  this.symbols.PlayAutomationEvent(event.$memory);
}
