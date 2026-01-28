import { BaseStruct } from '@/utility/base-struct';
import { CStruct } from '@/utility/cstruct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Matrix } from '../matrix';
import { ByteOffset } from './constant';

// raylib defines MAX_MESH_VERTEX_BUFFERS = 7
const MAX_MESH_VERTEX_BUFFERS = 7;

export class Mesh extends BaseStruct {
  public static override readonly BYTE_SIZE = 120;

  private $vertices: Float32Array | null = null;
  private $texcoords: Float32Array | null = null;
  private $texcoords2: Float32Array | null = null;
  private $normals: Float32Array | null = null;
  private $tangents: Float32Array | null = null;
  private $colors: Uint8Array | null = null;
  private $indices: Uint16Array | null = null;
  private $animVertices: Float32Array | null = null;
  private $animNormals: Float32Array | null = null;
  private $boneIds: Uint8Array | null = null;
  private $boneWeights: Float32Array | null = null;
  private $boneMatrices: Matrix[] | null = null;
  private $vboId: Uint32Array | null = null;

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

  // vertices: float* (vertexCount * 3)
  public get vertices_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.vertices, true)
    ) as Pointer;
  }

  public set vertices_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.vertices, BigInt(value), true);
    this.$vertices = null;
  }

  public get vertices() {
    if (this.$vertices) return this.$vertices;

    const ptr = this.vertices_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$vertices = new Float32Array(buffer);

    return this.$vertices;
  }

  // texcoords: float* (vertexCount * 2)
  public get texcoords_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.texcoords, true)
    ) as Pointer;
  }

  public set texcoords_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.texcoords, BigInt(value), true);
    this.$texcoords = null;
  }

  public get texcoords() {
    if (this.$texcoords) return this.$texcoords;

    const ptr = this.texcoords_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 2;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$texcoords = new Float32Array(buffer);

    return this.$texcoords;
  }

  // texcoords2: float* (vertexCount * 2)
  public get texcoords2_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.texcoords2, true)
    ) as Pointer;
  }

  public set texcoords2_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.texcoords2, BigInt(value), true);
    this.$texcoords2 = null;
  }

  public get texcoords2() {
    if (this.$texcoords2) return this.$texcoords2;

    const ptr = this.texcoords2_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 2;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$texcoords2 = new Float32Array(buffer);

    return this.$texcoords2;
  }

  // normals: float* (vertexCount * 3)
  public get normals_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.normals, true)) as Pointer;
  }

  public set normals_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.normals, BigInt(value), true);
    this.$normals = null;
  }

  public get normals() {
    if (this.$normals) return this.$normals;

    const ptr = this.normals_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$normals = new Float32Array(buffer);

    return this.$normals;
  }

  // tangents: float* (vertexCount * 4)
  public get tangents_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.tangents, true)
    ) as Pointer;
  }

  public set tangents_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.tangents, BigInt(value), true);
    this.$tangents = null;
  }

  public get tangents() {
    if (this.$tangents) return this.$tangents;

    const ptr = this.tangents_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 4;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$tangents = new Float32Array(buffer);

    return this.$tangents;
  }

  // colors: unsigned char* (vertexCount * 4)
  public get colors_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.colors, true)) as Pointer;
  }

  public set colors_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.colors, BigInt(value), true);
    this.$colors = null;
  }

  public get colors() {
    if (this.$colors) return this.$colors;

    const ptr = this.colors_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 4;
    const buffer = toArrayBuffer(ptr, 0, length);
    this.$colors = new Uint8Array(buffer);

    return this.$colors;
  }

  // indices: unsigned short* (triangleCount * 3)
  public get indices_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.indices, true)) as Pointer;
  }

  public set indices_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.indices, BigInt(value), true);
    this.$indices = null;
  }

  public get indices() {
    if (this.$indices) return this.$indices;

    const ptr = this.indices_ptr;

    if (!ptr) return null;

    const length = this.triangleCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 2);
    this.$indices = new Uint16Array(buffer);

    return this.$indices;
  }

  // animVertices: float* (vertexCount * 3)
  public get animVertices_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.animVertices, true)
    ) as Pointer;
  }

  public set animVertices_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.animVertices, BigInt(value), true);
    this.$animVertices = null;
  }

  public get animVertices() {
    if (this.$animVertices) return this.$animVertices;

    const ptr = this.animVertices_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$animVertices = new Float32Array(buffer);

    return this.$animVertices;
  }

  // animNormals: float* (vertexCount * 3)
  public get animNormals_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.animNormals, true)
    ) as Pointer;
  }

  public set animNormals_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.animNormals, BigInt(value), true);
    this.$animNormals = null;
  }

  public get animNormals() {
    if (this.$animNormals) return this.$animNormals;

    const ptr = this.animNormals_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 3;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$animNormals = new Float32Array(buffer);

    return this.$animNormals;
  }

  // boneIds: unsigned char* (vertexCount * 4)
  public get boneIds_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.boneIds, true)) as Pointer;
  }

  public set boneIds_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.boneIds, BigInt(value), true);
    this.$boneIds = null;
  }

  public get boneIds() {
    if (this.$boneIds) return this.$boneIds;

    const ptr = this.boneIds_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 4;
    const buffer = toArrayBuffer(ptr, 0, length);
    this.$boneIds = new Uint8Array(buffer);

    return this.$boneIds;
  }

  // boneWeights: float* (vertexCount * 4)
  public get boneWeights_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.boneWeights, true)
    ) as Pointer;
  }

  public set boneWeights_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.boneWeights, BigInt(value), true);
    this.$boneWeights = null;
  }

  public get boneWeights() {
    if (this.$boneWeights) return this.$boneWeights;

    const ptr = this.boneWeights_ptr;

    if (!ptr) return null;

    const length = this.vertexCount * 4;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$boneWeights = new Float32Array(buffer);

    return this.$boneWeights;
  }

  // boneMatrices: Matrix* (boneCount)
  public get boneMatrices_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.boneMatrices, true)
    ) as Pointer;
  }

  public set boneMatrices_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.boneMatrices, BigInt(value), true);
    this.$boneMatrices = null;
  }

  public get boneMatrices() {
    if (this.$boneMatrices) return this.$boneMatrices;

    const ptr = this.boneMatrices_ptr;

    if (!ptr) return null;

    this.$boneMatrices = CStruct.readArray(Matrix, ptr, this.boneCount);

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
    this.$view.setBigUint64(ByteOffset.vboId, BigInt(value), true);
    this.$vboId = null;
  }

  public get vboId() {
    if (this.$vboId) return this.$vboId;

    const ptr = this.vboId_ptr;

    if (!ptr) return null;

    const buffer = toArrayBuffer(ptr, 0, MAX_MESH_VERTEX_BUFFERS * 4);

    this.$vboId = new Uint32Array(buffer);

    return this.$vboId;
  }
}
