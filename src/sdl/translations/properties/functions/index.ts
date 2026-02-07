import type { SDL } from '@/sdl';
import type { PropertiesID } from '@/sdl/types/definition';
import type { Float } from '@/types/primitive';
import { CallbackManager } from '@/sdl/utility';
import { stringToCString } from '@utility/common';
import type { PropertyType } from '../../../ffi/properties/constant';
import type {
  CleanupPropertyCallbackFn,
  EnumeratePropertiesCallbackFn,
} from '../types/callback';
import {
  createCleanupPropertyCallback,
  createEnumeratePropertiesCallback,
  getCleanupPropertyCallbackKey,
} from '../utility/callback';

export function getGlobalProperties(this: SDL) {
  return this.symbols.SDL_GetGlobalProperties() as PropertiesID;
}

export function createProperties(this: SDL) {
  return this.symbols.SDL_CreateProperties() as PropertiesID;
}

export function copyProperties(
  this: SDL,
  options: {
    src: PropertiesID;
    dest: PropertiesID;
  }
) {
  return this.symbols.SDL_CopyProperties(options.src, options.dest);
}

export function lockProperties(this: SDL, props: PropertiesID) {
  return this.symbols.SDL_LockProperties(props);
}

export function unlockProperties(this: SDL, props: PropertiesID) {
  return this.symbols.SDL_UnlockProperties(props);
}

export function setPointerPropertyWithCleanup(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    value?: Uint8Array | null;
    cleanup: CleanupPropertyCallbackFn;
  }
) {
  const key = getCleanupPropertyCallbackKey();
  const value = options.value ?? null;
  const cb = createCleanupPropertyCallback(options.cleanup, key);

  const success = this.symbols.SDL_SetPointerPropertyWithCleanup(
    options.props,
    stringToCString(options.name).ptr,
    value,
    cb.ptr,
    null
  );

  if (!success) {
    cb.close();
  } else {
    CallbackManager.register(key, cb);
  }

  return success;
}

export function setPointerProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    value?: Uint8Array | null;
  }
) {
  return this.symbols.SDL_SetPointerProperty(
    options.props,
    stringToCString(options.name).ptr,
    options.value ?? null
  );
}

export function setStringProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    value: string;
  }
) {
  return this.symbols.SDL_SetStringProperty(
    options.props,
    stringToCString(options.name).ptr,
    stringToCString(options.value).ptr
  );
}

export function setNumberProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    value: bigint;
  }
) {
  return this.symbols.SDL_SetNumberProperty(
    options.props,
    stringToCString(options.name).ptr,
    options.value
  );
}

export function setFloatProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    value: Float;
  }
) {
  return this.symbols.SDL_SetFloatProperty(
    options.props,
    stringToCString(options.name).ptr,
    options.value
  );
}

export function setBooleanProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    value: boolean;
  }
) {
  return this.symbols.SDL_SetBooleanProperty(
    options.props,
    stringToCString(options.name).ptr,
    options.value
  );
}

export function hasProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
  }
) {
  return this.symbols.SDL_HasProperty(
    options.props,
    stringToCString(options.name).ptr
  );
}

export function getPropertyType(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
  }
) {
  return this.symbols.SDL_GetPropertyType(
    options.props,
    stringToCString(options.name).ptr
  ) as PropertyType;
}

export function getPointerProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    defaultValue?: Uint8Array | null;
  }
) {
  return this.symbols.SDL_GetPointerProperty(
    options.props,
    stringToCString(options.name).ptr,
    options.defaultValue ?? null
  );
}

export function getStringProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    defaultValue: string;
  }
) {
  return this.symbols
    .SDL_GetStringProperty(
      options.props,
      stringToCString(options.name).ptr,
      stringToCString(options.defaultValue).ptr
    )
    .toString();
}

export function getNumberProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    defaultValue: bigint;
  }
) {
  return this.symbols.SDL_GetNumberProperty(
    options.props,
    stringToCString(options.name).ptr,
    options.defaultValue
  );
}

export function getFloatProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    defaultValue: Float;
  }
) {
  return this.symbols.SDL_GetFloatProperty(
    options.props,
    stringToCString(options.name).ptr,
    options.defaultValue
  );
}

export function getBooleanProperty(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
    defaultValue: boolean;
  }
) {
  return this.symbols.SDL_GetBooleanProperty(
    options.props,
    stringToCString(options.name).ptr,
    options.defaultValue
  );
}

export function clearProperties(
  this: SDL,
  options: {
    props: PropertiesID;
    name: string;
  }
) {
  return this.symbols.SDL_ClearProperty(
    options.props,
    stringToCString(options.name).ptr
  );
}

export function enumerateProperties(
  this: SDL,
  options: {
    props: PropertiesID;
    callback: EnumeratePropertiesCallbackFn;
  }
) {
  const cb = createEnumeratePropertiesCallback(options.callback);

  const result = this.symbols.SDL_EnumerateProperties(
    options.props,
    cb.ptr,
    null
  );

  // Synchronous call - safe to close after
  cb.close();

  return result;
}

export function destroyProperties(this: SDL, props: PropertiesID) {
  return this.symbols.SDL_DestroyProperties(props);
}
