#undef GetShapesTexture
#undef GetShapesTextureRectangle
#undef GetCollisionRec

SHIM_0(Texture2D, GetShapesTexture)
SHIM_0(Rectangle, GetShapesTextureRectangle)
SHIM_2(Rectangle, GetCollisionRec, Rectangle, rec1, Rectangle, rec2)
