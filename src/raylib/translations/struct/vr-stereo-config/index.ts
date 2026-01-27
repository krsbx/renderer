import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Matrix } from '../matrix';
import { ByteOffset } from './constant';

export class VrStereoConfig {
  public static readonly BYTE_SIZE = 304;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  private $projection: [Matrix, Matrix] | null = null;
  private $viewOffset: [Matrix, Matrix] | null = null;
  private $leftLensCenter: [number, number] | null = null;
  private $rightLensCenter: [number, number] | null = null;
  private $leftScreenCenter: [number, number] | null = null;
  private $rightScreenCenter: [number, number] | null = null;
  private $scale: [number, number] | null = null;
  private $scaleIn: [number, number] | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, VrStereoConfig.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static create(data?: StructInit<VrStereoConfig>) {
    const instance = new VrStereoConfig(VrStereoConfig.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get projection() {
    if (this.$projection) return this.$projection;

    const length = 2;

    this.$projection = new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = ByteOffset.projection + index * Matrix.BYTE_SIZE;
        return new Matrix(
          this.$memory.subarray(offset, offset + Matrix.BYTE_SIZE)
        );
      },
      set: () => false, // Matrices are not directly assignable
    }) as never;

    return this.$projection;
  }

  public get viewOffset() {
    if (this.$viewOffset) return this.$viewOffset;

    const length = 2;

    this.$viewOffset = new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = ByteOffset.viewOffset + index * Matrix.BYTE_SIZE;
        return new Matrix(
          this.$memory.subarray(offset, offset + Matrix.BYTE_SIZE)
        );
      },
      set: () => false, // Matrices are not directly assignable
    }) as never;

    return this.$viewOffset;
  }

  private createFloat2Proxy(offset: number): [number, number] {
    const length = 2;

    return new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        return this.$view.getFloat32(offset + index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= length) {
          return false;
        }

        this.$view.setFloat32(offset + index * 4, value, true);
        return true;
      },
    }) as never;
  }

  public get leftLensCenter() {
    if (this.$leftLensCenter) return this.$leftLensCenter;
    this.$leftLensCenter = this.createFloat2Proxy(ByteOffset.leftLensCenter);
    return this.$leftLensCenter;
  }

  public get rightLensCenter() {
    if (this.$rightLensCenter) return this.$rightLensCenter;
    this.$rightLensCenter = this.createFloat2Proxy(ByteOffset.rightLensCenter);
    return this.$rightLensCenter;
  }

  public get leftScreenCenter() {
    if (this.$leftScreenCenter) return this.$leftScreenCenter;
    this.$leftScreenCenter = this.createFloat2Proxy(
      ByteOffset.leftScreenCenter
    );
    return this.$leftScreenCenter;
  }

  public get rightScreenCenter() {
    if (this.$rightScreenCenter) return this.$rightScreenCenter;
    this.$rightScreenCenter = this.createFloat2Proxy(
      ByteOffset.rightScreenCenter
    );
    return this.$rightScreenCenter;
  }

  public get scale() {
    if (this.$scale) return this.$scale;
    this.$scale = this.createFloat2Proxy(ByteOffset.scale);
    return this.$scale;
  }

  public get scaleIn() {
    if (this.$scaleIn) return this.$scaleIn;
    this.$scaleIn = this.createFloat2Proxy(ByteOffset.scaleIn);
    return this.$scaleIn;
  }
}
