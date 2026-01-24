#undef LoadImage
#undef LoadImageRaw
#undef LoadImageAnim
#undef LoadImageAnimFromMemory
#undef LoadImageFromMemory
#undef LoadImageFromTexture
#undef LoadImageFromScreen
#undef GenImageColor
#undef GenImageGradientLinear
#undef GenImageGradientRadial
#undef GenImageGradientSquare
#undef GenImageChecked
#undef GenImageWhiteNoise
#undef GenImagePerlinNoise
#undef GenImageCellular
#undef ImageCopy
#undef ImageFromImage
#undef ImageFromChannel
#undef ImageText
#undef ImageTextEx
#undef GetImageColor
#undef GetImageAlphaBorder

SHIM_1(Image, LoadImage, const char*, fileName)
SHIM_5(Image, LoadImageRaw, const char*, fileName, int, width, int, height, int, format, int, headerSize)
SHIM_2(Image, LoadImageAnim, const char*, fileName, int*, frames)
SHIM_4(Image, LoadImageAnimFromMemory, const char*, fileType, const unsigned char*, fileData, int, dataSize, int*, frames)
SHIM_3(Image, LoadImageFromMemory, const char*, fileType, const unsigned char*, fileData, int, dataSize)
SHIM_1(Image, LoadImageFromTexture, Texture2D, texture)
SHIM_0(Image, LoadImageFromScreen)
SHIM_3(Image, GenImageColor, int, width, int, height, Color, color)
SHIM_5(Image, GenImageGradientLinear, int, width, int, height, int, direction, Color, start, Color, end)
SHIM_5(Image, GenImageGradientRadial, int, width, int, height, float, density, Color, inner, Color, outer)
SHIM_5(Image, GenImageGradientSquare, int, width, int, height, float, density, Color, inner, Color, outer)
SHIM_6(Image, GenImageChecked, int, width, int, height, int, checksX, int, checksY, Color, col1, Color, col2)
SHIM_3(Image, GenImageWhiteNoise, int, width, int, height, float, factor)
SHIM_5(Image, GenImagePerlinNoise, int, width, int, height, int, offsetX, int, offsetY, float, scale)
SHIM_3(Image, GenImageCellular, int, width, int, height, int, tileSize)
SHIM_1(Image, ImageCopy, Image, image)
SHIM_2(Image, ImageFromImage, Image, image, Rectangle, rec)
SHIM_2(Image, ImageFromChannel, Image, image, int, selectedChannel)
SHIM_3(Image, ImageText, const char*, text, int, fontSize, Color, color)
SHIM_5(Image, ImageTextEx, Font, font, const char*, text, float, fontSize, float, spacing, Color, tint)
SHIM_3(Color, GetImageColor, Image, image, int, x, int, y)
SHIM_2(Rectangle, GetImageAlphaBorder, Image, image, float, threshold)
