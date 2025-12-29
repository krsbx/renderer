import { ptr } from 'bun:ffi';

export function convertStringToFfi(str: string) {
  const finalStr = str.endsWith('\0') ? str : str + '\0';
  const strBuf = Buffer.from(finalStr, 'utf-8');
  const strPtr = ptr(strBuf);

  return {
    buffer: strBuf,
    reference: strPtr,
  };
}
