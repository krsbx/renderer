import { JSCallback, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '..';
import type { PropertyType } from '../ffi/properties/constant';
import { convertStringToFfi } from '../utility/common';

export function getGlobalProperties(this: BaseSDL) {
  return this.symbols.SDL_GetGlobalProperties();
}

export function createProerties(this: BaseSDL) {
  return this.symbols.SDL_CreateProperties();
}

export function copyProperties(
  this: BaseSDL,
  options: {
    src: number;
    dest: number;
  }
) {
  return this.symbols.SDL_CopyProperties(options.src, options.dest);
}

export function lockProperties(this: BaseSDL, props: number) {
  return this.symbols.SDL_LockProperties(props);
}

export function unlockProperties(this: BaseSDL, props: number) {
  return this.symbols.SDL_UnlockProperties(props);
}

export function setPointerPropertyWithCleanup(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    value?: Pointer | null;
    cleanup: JSCallback;
    userData?: Pointer | null;
  }
) {
  return this.symbols.SDL_SetPointerPropertyWithCleanup(
    options.props,
    convertStringToFfi(options.name).reference,
    options.value ?? null,
    options.cleanup.ptr,
    options.userData ?? null
  );
}

export function setPointerProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    value?: Pointer | null;
  }
) {
  return this.symbols.SDL_SetPointerProperty(
    options.props,
    convertStringToFfi(options.name).reference,
    options.value ?? null
  );
}

export function setStringProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    value: string;
  }
) {
  return this.symbols.SDL_SetStringProperty(
    options.props,
    convertStringToFfi(options.name).reference,
    convertStringToFfi(options.value).reference
  );
}

export function setNumberProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    value: number;
  }
) {
  return this.symbols.SDL_SetNumberProperty(
    options.props,
    convertStringToFfi(options.name).reference,
    options.value
  );
}

export function setFloatProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    value: number;
  }
) {
  return this.symbols.SDL_SetFloatProperty(
    options.props,
    convertStringToFfi(options.name).reference,
    options.value
  );
}

export function setBooleanProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    value: boolean;
  }
) {
  return this.symbols.SDL_SetBooleanProperty(
    options.props,
    convertStringToFfi(options.name).reference,
    options.value
  );
}

export function hasProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
  }
) {
  return this.symbols.SDL_HasProperty(
    options.props,
    convertStringToFfi(options.name).reference
  );
}

export function getPropertyType(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
  }
) {
  return this.symbols.SDL_GetPropertyType(
    options.props,
    convertStringToFfi(options.name).reference
  ) as PropertyType;
}

export function getPointerProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
  }
) {
  return this.symbols.SDL_GetPointerProperty(
    options.props,
    convertStringToFfi(options.name).reference
  );
}

export function getStringProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    defaultValue: string;
  }
) {
  return this.symbols.SDL_GetStringProperty(
    options.props,
    convertStringToFfi(options.name).reference,
    convertStringToFfi(options.defaultValue).reference
  );
}

export function getNumberProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    defaultValue: number;
  }
) {
  return this.symbols.SDL_GetNumberProperty(
    options.props,
    convertStringToFfi(options.name).reference,
    options.defaultValue
  );
}

export function getFloatProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    defaultValue: number;
  }
) {
  return this.symbols.SDL_GetFloatProperty(
    options.props,
    convertStringToFfi(options.name).reference,
    options.defaultValue
  );
}

export function getBooleanProperty(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
    defaultValue: boolean;
  }
) {
  return this.symbols.SDL_GetBooleanProperty(
    options.props,
    convertStringToFfi(options.name).reference,
    options.defaultValue
  );
}

export function clearProperties(
  this: BaseSDL,
  options: {
    props: number;
    name: string;
  }
) {
  return this.symbols.SDL_ClearProperty(
    options.props,
    convertStringToFfi(options.name).reference
  );
}

export function enumerateProperties(
  this: BaseSDL,
  options: {
    props: number;
    callback: JSCallback;
    userData?: Pointer | null;
  }
) {
  return this.symbols.SDL_EnumerateProperties(
    options.props,
    options.callback.ptr,
    options.userData ?? null
  );
}

export function destroyProperties(
  this: BaseSDL,
  options: {
    props: number;
  }
) {
  return this.symbols.SDL_DestroyProperties(options.props);
}
