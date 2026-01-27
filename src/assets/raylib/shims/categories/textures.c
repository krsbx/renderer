#undef LoadTexture
#undef LoadTextureFromImage
#undef LoadTextureCubemap
#undef LoadRenderTexture

SHIM_1(Texture2D, LoadTexture, const char*, fileName)
SHIM_1(Texture2D, LoadTextureFromImage, Image, image)
SHIM_2(TextureCubemap, LoadTextureCubemap, Image, image, int, layout)
SHIM_2(RenderTexture2D, LoadRenderTexture, int, width, int, height)
