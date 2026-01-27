#undef GetRayCollisionSphere
#undef GetRayCollisionBox
#undef GetRayCollisionMesh
#undef GetRayCollisionTriangle
#undef GetRayCollisionQuad

SHIM_3(RayCollision, GetRayCollisionSphere, Ray, ray, Vector3, center, float, radius)
SHIM_2(RayCollision, GetRayCollisionBox, Ray, ray, BoundingBox, box)
SHIM_3(RayCollision, GetRayCollisionMesh, Ray, ray, Mesh, mesh, Matrix, transform)
SHIM_4(RayCollision, GetRayCollisionTriangle, Ray, ray, Vector3, p1, Vector3, p2, Vector3, p3)
SHIM_5(RayCollision, GetRayCollisionQuad, Ray, ray, Vector3, p1, Vector3, p2, Vector3, p3, Vector3, p4)
