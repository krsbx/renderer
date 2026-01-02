import { ptr } from 'bun:ffi';

export const IS_BIG_ENDIAN =
  new Uint8Array(new Uint16Array([0x1234]).buffer)[0] === 0x12;

export function convertStringToFfi(str: string) {
  const finalStr = str.endsWith('\0') ? str : str + '\0';
  const strBuf = Buffer.from(finalStr, 'utf-8');
  const strPtr = ptr(strBuf);

  return {
    buffer: strBuf,
    reference: strPtr,
  };
}
