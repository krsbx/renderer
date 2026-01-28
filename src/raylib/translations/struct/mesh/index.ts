import { BaseStruct } from '@/utility/base-struct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Matrix } from '../matrix';
import { ByteOffset } from './constant';

// raylib defines MAX_MESH_VERTEX_BUFFERS = 7
const MAX_MESH_VERTEX_BUFFERS = 7;

export class Mesh extends BaseStruct {
  public static override readonly BYTE_SIZE = 120;

  // Cached array proxies
  private $vertices: number[] | null = null;
  private $verticesView: DataView | null = null;
  private $texcoords: number[] | null = null;
  private $texcoordsView: DataView | null = null;
  private $texcoords2: number[] | null = null;
  private $texcoords2View: DataView | null = null;
  private $normals: number[] | null = null;
  private $normalsView: DataView | null = null;
  private $tangents: number[] | null = null;
  private $tangentsView: DataView | null = null;
  private $colors: number[] | null = null;
  private $colorsMemory: Uint8Array | null = null;
  private $indices: number[] | null = null;
  private $indicesView: DataView | null = null;
  private $animVertices: number[] | null = null;
  private $animVerticesView: DataView | null = null;
  private $animNormals: number[] | null = null;
  private $animNormalsView: DataView | null = null;
  private $boneIds: number[] | null = null;
  private $boneIdsMemory: Uint8Array | null = null;
  private $boneWeights: number[] | null = null;
  private $boneWeightsView: DataView | null = null;
  private $boneMatrices: Matrix[] | null = null;
  private $boneMatricesMemory: Uint8Array | null = null;
  private $vboId: number[] | null = null;
  private $vboIdView: DataView | null = null;

  public get vertexCount() {
    return this.$view.getInt32(ByteOffset.vertexCount, true);
  }

  public set vertexCount(value: number) {
    this.$view.setInt32(ByteOffset.vertexCount, value, true);
  }

  public get triangleCount() {
    return this.$view.getInt32(ByteOffset.triangleCount, true);
  }

  public set triangleCount(value: number) {
    this.$view.setInt32(ByteOffset.triangleCount, value, true);
  }

  // Helper to create float32 array proxy
  private createFloat32Proxy(view: DataView, length: number): number[] {
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
        return view.getFloat32(index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);
        if (Number.isNaN(index) || index < 0 || index >= length) return false;
        view.setFloat32(index * 4, value, true);
        return true;
      },
    }) as never;
  }

  // Helper to create uint16 array proxy
  private createUint16Proxy(view: DataView, length: number): number[] {
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
        return view.getUint16(index * 2, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);
        if (Number.isNaN(index) || index < 0 || index >= length) return false;
        view.setUint16(index * 2, value, true);
        return true;
      },
    }) as never;
  }

  // Helper to create uint32 array proxy
  private createUint32Proxy(view: DataView, length: number): number[] {
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
        return view.getUint32(index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);
        if (Number.isNaN(index) || index < 0 || index >= length) return false;
        view.setUint32(index * 4, value, true);
        return true;
      },
    }) as never;
  }

  // Helper to create uint8 array proxy
  private createUint8Proxy(memory: Uint8Array, length: number): number[] {
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
        return memory[index];
      },
      set: (_, prop, value) => {
        const index = Number(prop);
        if (Number.isNaN(index) || index < 0 || index >= length) return false;
        memory[index] = value;
        return true;
      },
    }) as never;
  }

  // vertices: float* (vertexCount * 3)
  public get vertices_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.vertices, true)
    ) as Pointer;
  }

  public set vertices_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.vertices, BigInt(value as number), true);
    this.$vertices = null;
    this.$verticesView = null;
  }

  public get vertices() {
    const ptr = this.vertices_ptr;
    if (!ptr) return null;
    if (this.$vertices) return this.$vertices;

    const length = this.vertexCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$verticesView = new DataView(buffer);
    this.$vertices = this.createFloat32Proxy(this.$verticesView, length);
    return this.$vertices;
  }

  // texcoords: float* (vertexCount * 2)
  public get texcoords_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.texcoords, true)
    ) as Pointer;
  }

  public set texcoords_ptr(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.texcoords,
      BigInt(value as number),
      true
    );
    this.$texcoords = null;
    this.$texcoordsView = null;
  }

  public get texcoords() {
    const ptr = this.texcoords_ptr;
    if (!ptr) return null;
    if (this.$texcoords) return this.$texcoords;

    const length = this.vertexCount * 2;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$texcoordsView = new DataView(buffer);
    this.$texcoords = this.createFloat32Proxy(this.$texcoordsView, length);
    return this.$texcoords;
  }

  // texcoords2: float* (vertexCount * 2)
  public get texcoords2_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.texcoords2, true)
    ) as Pointer;
  }

  public set texcoords2_ptr(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.texcoords2,
      BigInt(value as number),
      true
    );
    this.$texcoords2 = null;
    this.$texcoords2View = null;
  }

  public get texcoords2() {
    const ptr = this.texcoords2_ptr;
    if (!ptr) return null;
    if (this.$texcoords2) return this.$texcoords2;

    const length = this.vertexCount * 2;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$texcoords2View = new DataView(buffer);
    this.$texcoords2 = this.createFloat32Proxy(this.$texcoords2View, length);
    return this.$texcoords2;
  }

  // normals: float* (vertexCount * 3)
  public get normals_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.normals, true)) as Pointer;
  }

  public set normals_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.normals, BigInt(value as number), true);
    this.$normals = null;
    this.$normalsView = null;
  }

  public get normals() {
    const ptr = this.normals_ptr;
    if (!ptr) return null;
    if (this.$normals) return this.$normals;

    const length = this.vertexCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$normalsView = new DataView(buffer);
    this.$normals = this.createFloat32Proxy(this.$normalsView, length);
    return this.$normals;
  }

  // tangents: float* (vertexCount * 4)
  public get tangents_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.tangents, true)
    ) as Pointer;
  }

  public set tangents_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.tangents, BigInt(value as number), true);
    this.$tangents = null;
    this.$tangentsView = null;
  }

  public get tangents() {
    const ptr = this.tangents_ptr;
    if (!ptr) return null;
    if (this.$tangents) return this.$tangents;

    const length = this.vertexCount * 4;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$tangentsView = new DataView(buffer);
    this.$tangents = this.createFloat32Proxy(this.$tangentsView, length);
    return this.$tangents;
  }

  // colors: unsigned char* (vertexCount * 4)
  public get colors_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.colors, true)) as Pointer;
  }

  public set colors_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.colors, BigInt(value as number), true);
    this.$colors = null;
    this.$colorsMemory = null;
  }

  public get colors() {
    const ptr = this.colors_ptr;
    if (!ptr) return null;
    if (this.$colors) return this.$colors;

    const length = this.vertexCount * 4;
    const buffer = toArrayBuffer(ptr, 0, length);
    this.$colorsMemory = new Uint8Array(buffer);
    this.$colors = this.createUint8Proxy(this.$colorsMemory, length);
    return this.$colors;
  }

  // indices: unsigned short* (triangleCount * 3)
  public get indices_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.indices, true)) as Pointer;
  }

  public set indices_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.indices, BigInt(value as number), true);
    this.$indices = null;
    this.$indicesView = null;
  }

  public get indices() {
    const ptr = this.indices_ptr;
    if (!ptr) return null;
    if (this.$indices) return this.$indices;

    const length = this.triangleCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 2);
    this.$indicesView = new DataView(buffer);
    this.$indices = this.createUint16Proxy(this.$indicesView, length);
    return this.$indices;
  }

  // animVertices: float* (vertexCount * 3)
  public get animVertices_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.animVertices, true)
    ) as Pointer;
  }

  public set animVertices_ptr(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.animVertices,
      BigInt(value as number),
      true
    );
    this.$animVertices = null;
    this.$animVerticesView = null;
  }

  public get animVertices() {
    const ptr = this.animVertices_ptr;
    if (!ptr) return null;
    if (this.$animVertices) return this.$animVertices;

    const length = this.vertexCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$animVerticesView = new DataView(buffer);
    this.$animVertices = this.createFloat32Proxy(
      this.$animVerticesView,
      length
    );
    return this.$animVertices;
  }

  // animNormals: float* (vertexCount * 3)
  public get animNormals_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.animNormals, true)
    ) as Pointer;
  }

  public set animNormals_ptr(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.animNormals,
      BigInt(value as number),
      true
    );
    this.$animNormals = null;
    this.$animNormalsView = null;
  }

  public get animNormals() {
    const ptr = this.animNormals_ptr;
    if (!ptr) return null;
    if (this.$animNormals) return this.$animNormals;

    const length = this.vertexCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$animNormalsView = new DataView(buffer);
    this.$animNormals = this.createFloat32Proxy(this.$animNormalsView, length);
    return this.$animNormals;
  }

  // boneIds: unsigned char* (vertexCount * 4)
  public get boneIds_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.boneIds, true)) as Pointer;
  }

  public set boneIds_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.boneIds, BigInt(value as number), true);
    this.$boneIds = null;
    this.$boneIdsMemory = null;
  }

  public get boneIds() {
    const ptr = this.boneIds_ptr;
    if (!ptr) return null;
    if (this.$boneIds) return this.$boneIds;

    const length = this.vertexCount * 4;
    const buffer = toArrayBuffer(ptr, 0, length);
    this.$boneIdsMemory = new Uint8Array(buffer);
    this.$boneIds = this.createUint8Proxy(this.$boneIdsMemory, length);
    return this.$boneIds;
  }

  // boneWeights: float* (vertexCount * 4)
  public get boneWeights_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.boneWeights, true)
    ) as Pointer;
  }

  public set boneWeights_ptr(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.boneWeights,
      BigInt(value as number),
      true
    );
    this.$boneWeights = null;
    this.$boneWeightsView = null;
  }

  public get boneWeights() {
    const ptr = this.boneWeights_ptr;
    if (!ptr) return null;
    if (this.$boneWeights) return this.$boneWeights;

    const length = this.vertexCount * 4;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$boneWeightsView = new DataView(buffer);
    this.$boneWeights = this.createFloat32Proxy(this.$boneWeightsView, length);
    return this.$boneWeights;
  }

  // boneMatrices: Matrix* (boneCount)
  public get boneMatrices_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.boneMatrices, true)
    ) as Pointer;
  }

  public set boneMatrices_ptr(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.boneMatrices,
      BigInt(value as number),
      true
    );
    this.$boneMatrices = null;
    this.$boneMatricesMemory = null;
  }

  public get boneMatrices() {
    const ptr = this.boneMatrices_ptr;
    if (!ptr) return null;
    if (this.$boneMatrices) return this.$boneMatrices;

    const count = this.boneCount;
    const totalSize = count * Matrix.BYTE_SIZE;
    const buffer = toArrayBuffer(ptr, 0, totalSize);
    this.$boneMatricesMemory = new Uint8Array(buffer);

    this.$boneMatrices = new Proxy(new Array(count), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= count) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = index * Matrix.BYTE_SIZE;
        return new Matrix(
          this.$boneMatricesMemory!.subarray(offset, offset + Matrix.BYTE_SIZE)
        );
      },
      set: () => false,
    }) as never;

    return this.$boneMatrices;
  }

  public get boneCount() {
    return this.$view.getInt32(ByteOffset.boneCount, true);
  }

  public set boneCount(value: number) {
    this.$view.setInt32(ByteOffset.boneCount, value, true);
  }

  public get vaoId() {
    return this.$view.getUint32(ByteOffset.vaoId, true);
  }

  public set vaoId(value: number) {
    this.$view.setUint32(ByteOffset.vaoId, value, true);
  }

  // vboId: unsigned int* (MAX_MESH_VERTEX_BUFFERS = 7)
  public get vboId_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.vboId, true)) as Pointer;
  }

  public set vboId_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.vboId, BigInt(value as number), true);
    this.$vboId = null;
    this.$vboIdView = null;
  }

  public get vboId() {
    const ptr = this.vboId_ptr;
    if (!ptr) return null;
    if (this.$vboId) return this.$vboId;

    const buffer = toArrayBuffer(ptr, 0, MAX_MESH_VERTEX_BUFFERS * 4);
    this.$vboIdView = new DataView(buffer);
    this.$vboId = this.createUint32Proxy(
      this.$vboIdView,
      MAX_MESH_VERTEX_BUFFERS
    );
    return this.$vboId;
  }
}
