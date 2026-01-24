#undef GetSplinePointLinear
#undef GetSplinePointBasis
#undef GetSplinePointCatmullRom
#undef GetSplinePointBezierQuad
#undef GetSplinePointBezierCubic

SHIM_3(Vector2, GetSplinePointLinear, Vector2, startPos, Vector2, endPos, float, t)
SHIM_5(Vector2, GetSplinePointBasis, Vector2, p1, Vector2, p2, Vector2, p3, Vector2, p4, float, t)
SHIM_5(Vector2, GetSplinePointCatmullRom, Vector2, p1, Vector2, p2, Vector2, p3, Vector2, p4, float, t)
SHIM_4(Vector2, GetSplinePointBezierQuad, Vector2, p1, Vector2, c2, Vector2, p3, float, t)
SHIM_5(Vector2, GetSplinePointBezierCubic, Vector2, p1, Vector2, c2, Vector2, c3, Vector2, p4, float, t)
