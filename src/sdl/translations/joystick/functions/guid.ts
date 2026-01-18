import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';
import { GUID } from '../../guid/utility';

export function getJoystickGUIDInfo(this: SDL, guid: GUID | Pointer) {
  const guidPtr = guid instanceof GUID ? guid.$address : guid;

  const vendorStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const productStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const versionStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const crc16Struct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });

  this.symbols.SDL_GetJoystickGUIDInfo(
    guidPtr,
    vendorStruct.$address,
    productStruct.$address,
    versionStruct.$address,
    crc16Struct.$address
  );

  return {
    vendor: vendorStruct.getValue(0, 'u16'),
    product: productStruct.getValue(0, 'u16'),
    version: versionStruct.getValue(0, 'u16'),
    crc16: crc16Struct.getValue(0, 'u16'),
  };
}
