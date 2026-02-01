import type { SDL } from '@/sdl';
import type { IOStream, Process } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';

export function createProcess(
  this: SDL,
  options: {
    args: string[];
    pipeStdio: boolean;
  }
) {
  const { buffer: args } = CStruct.writeArrayString(options.args);

  return this.symbols.SDL_CreateProcess(
    args,
    options.pipeStdio
  ) as Process | null;
}

export function createProcessWithProperties(this: SDL, props: number) {
  return this.symbols.SDL_CreateProcessWithProperties(props) as Process | null;
}

export function getProcessProperties(this: SDL, process: Process) {
  return this.symbols.SDL_GetProcessProperties(process);
}

export function readProcess(this: SDL, process: Process) {
  const datasizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });
  const exitcodeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const dataPtr = this.symbols.SDL_ReadProcess(
    process,
    datasizeStruct.$address,
    exitcodeStruct.$address
  );

  if (!dataPtr) return null;

  const datasize = datasizeStruct.getValue(0, 'u64');
  const exitcode = exitcodeStruct.getValue(0, 'i32');
  const data = new CStruct({
    length: datasize,
    address: dataPtr,
  }).clone().$memory;

  this.symbols.SDL_free(dataPtr);

  return {
    data,
    exitcode,
  };
}

export function getProcessInput(this: SDL, process: Process) {
  return this.symbols.SDL_GetProcessInput(process) as IOStream | null;
}

export function getProcessOutput(this: SDL, process: Process) {
  return this.symbols.SDL_GetProcessOutput(process) as IOStream | null;
}

export function killProcess(
  this: SDL,
  options: {
    process: Process;
    force: boolean;
  }
) {
  return this.symbols.SDL_KillProcess(options.process, options.force);
}

export function waitProcess(
  this: SDL,
  options: {
    process: Process;
    block: boolean;
  }
) {
  const exitcodeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_WaitProcess(
    options.process,
    options.block,
    exitcodeStruct.$address
  );

  if (!success) return null;

  return exitcodeStruct.getValue(0, 'i32');
}

export function destroyProcess(this: SDL, process: Process) {
  this.symbols.SDL_DestroyProcess(process);
}
