import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';

export function createProcess(
  this: SDL,
  options: {
    args: Pointer;
    pipeStdio: boolean;
  }
) {
  return this.symbols.SDL_CreateProcess(options.args, options.pipeStdio);
}

export function createProcessWithProperties(this: SDL, props: number) {
  return this.symbols.SDL_CreateProcessWithProperties(props);
}

export function getProcessProperties(this: SDL, process: Pointer) {
  return this.symbols.SDL_GetProcessProperties(process);
}

export function readProcess(this: SDL, process: Pointer) {
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

  return {
    data: dataPtr,
    datasize,
    exitcode,
  };
}

export function getProcessInput(this: SDL, process: Pointer) {
  return this.symbols.SDL_GetProcessInput(process);
}

export function getProcessOutput(this: SDL, process: Pointer) {
  return this.symbols.SDL_GetProcessOutput(process);
}

export function killProcess(
  this: SDL,
  options: {
    process: Pointer;
    force: boolean;
  }
) {
  return this.symbols.SDL_KillProcess(options.process, options.force);
}

export function waitProcess(
  this: SDL,
  options: {
    process: Pointer;
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

export function destroyProcess(this: SDL, process: Pointer) {
  this.symbols.SDL_DestroyProcess(process);
}
