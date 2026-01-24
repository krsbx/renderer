#undef LoadModel
#undef LoadModelFromMesh
#undef GetModelBoundingBox
#undef GetMeshBoundingBox
#undef GenMeshPoly
#undef GenMeshPlane
#undef GenMeshCube
#undef GenMeshSphere
#undef GenMeshHemiSphere
#undef GenMeshCylinder
#undef GenMeshCone
#undef GenMeshTorus
#undef GenMeshKnot
#undef GenMeshHeightmap
#undef GenMeshCubicmap
#undef LoadMaterialDefault

SHIM_1(Model, LoadModel, const char*, fileName)
SHIM_1(Model, LoadModelFromMesh, Mesh, mesh)
SHIM_1(BoundingBox, GetModelBoundingBox, Model, model)
SHIM_1(BoundingBox, GetMeshBoundingBox, Mesh, mesh)
SHIM_2(Mesh, GenMeshPoly, int, sides, float, radius)
SHIM_4(Mesh, GenMeshPlane, float, width, float, length, int, resX, int, resZ)
SHIM_3(Mesh, GenMeshCube, float, width, float, height, float, length)
SHIM_3(Mesh, GenMeshSphere, float, radius, int, rings, int, slices)
SHIM_3(Mesh, GenMeshHemiSphere, float, radius, int, rings, int, slices)
SHIM_3(Mesh, GenMeshCylinder, float, radius, float, height, int, slices)
SHIM_3(Mesh, GenMeshCone, float, radius, float, height, int, slices)
SHIM_4(Mesh, GenMeshTorus, float, radius, float, size, int, radSeg, int, sides)
SHIM_4(Mesh, GenMeshKnot, float, radius, float, size, int, radSeg, int, sides)
SHIM_2(Mesh, GenMeshHeightmap, Image, heightmap, Vector3, size)
SHIM_2(Mesh, GenMeshCubicmap, Image, cubicmap, Vector3, cubeSize)
SHIM_0(Material, LoadMaterialDefault)
