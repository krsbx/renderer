import { JSCallback, type Pointer, ptr } from 'bun:ffi';
import type { SDL } from '..';
import type { PropertyType } from '../ffi/properties/constant';

export function getGlobalProperties(this: SDL) {
  return this.symbols.SDL_GetGlobalProperties();
}

export function createProerties(this: SDL) {
  return this.symbols.SDL_CreateProperties();
}

export function copyProperties(
  this: SDL,
  options: {
    src: number;
    dest: number;
  }
) {
  return this.symbols.SDL_CopyProperties(options.src, options.dest);
}

export function lockProperties(this: SDL, props: number) {
  return this.symbols.SDL_LockProperties(props);
}

export function unlockProperties(this: SDL, props: number) {
  return this.symbols.SDL_UnlockProperties(props);
}

export function setPointerPropertyWithCleanup(
  this: SDL,
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
    ptr(Buffer.from(options.name, 'utf-8')),
    options.value ?? null,
    options.cleanup.ptr,
    options.userData ?? null
  );
}

export function setPointerProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
    value?: Pointer | null;
  }
) {
  return this.symbols.SDL_SetPointerProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8')),
    options.value ?? null
  );
}

export function setStringProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
    value: string;
  }
) {
  return this.symbols.SDL_SetStringProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8')),
    ptr(Buffer.from(options.value, 'utf-8'))
  );
}

export function setNumberProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
    value: number;
  }
) {
  return this.symbols.SDL_SetNumberProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8')),
    options.value
  );
}

export function setFloatProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
    value: number;
  }
) {
  return this.symbols.SDL_SetFloatProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8')),
    options.value
  );
}

export function setBooleanProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
    value: boolean;
  }
) {
  return this.symbols.SDL_SetBooleanProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8')),
    options.value
  );
}

export function hasProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
  }
) {
  return this.symbols.SDL_HasProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8'))
  );
}

export function getPropertyType(
  this: SDL,
  options: {
    props: number;
    name: string;
  }
) {
  return this.symbols.SDL_GetPropertyType(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8'))
  ) as PropertyType;
}

export function getPointerProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
  }
) {
  return this.symbols.SDL_GetPointerProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8'))
  );
}

export function getStringProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
    defaultValue: string;
  }
) {
  return this.symbols.SDL_GetStringProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8')),
    ptr(Buffer.from(options.defaultValue, 'utf-8'))
  );
}

export function getNumberProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
    defaultValue: number;
  }
) {
  return this.symbols.SDL_GetNumberProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8')),
    options.defaultValue
  );
}

export function getFloatProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
    defaultValue: number;
  }
) {
  return this.symbols.SDL_GetFloatProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8')),
    options.defaultValue
  );
}

export function getBooleanProperty(
  this: SDL,
  options: {
    props: number;
    name: string;
    defaultValue: boolean;
  }
) {
  return this.symbols.SDL_GetBooleanProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8')),
    options.defaultValue
  );
}

export function clearProperties(
  this: SDL,
  options: {
    props: number;
    name: string;
  }
) {
  return this.symbols.SDL_ClearProperty(
    options.props,
    ptr(Buffer.from(options.name, 'utf-8'))
  );
}

export function enumerateProperties(
  this: SDL,
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
  this: SDL,
  options: {
    props: number;
  }
) {
  return this.symbols.SDL_DestroyProperties(options.props);
}
