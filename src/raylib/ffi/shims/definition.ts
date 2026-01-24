import { type FFIFunction, FFIType } from 'bun:ffi';

export const ShimDefinition = {
  // #region Window
  GetMonitorPosition: {
    args: [FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GetWindowPosition: { args: [FFIType.ptr], returns: FFIType.void },
  GetWindowScaleDPI: { args: [FFIType.ptr], returns: FFIType.void },
  GetClipboardImage: { args: [FFIType.ptr], returns: FFIType.void },
  // #endregion Window

  // #region Input
  GetMousePosition: { args: [FFIType.ptr], returns: FFIType.void },
  GetMouseDelta: { args: [FFIType.ptr], returns: FFIType.void },
  GetMouseWheelMoveV: { args: [FFIType.ptr], returns: FFIType.void },
  GetTouchPosition: { args: [FFIType.i32, FFIType.ptr], returns: FFIType.void },
  GetGestureDragVector: { args: [FFIType.ptr], returns: FFIType.void },
  GetGesturePinchVector: { args: [FFIType.ptr], returns: FFIType.void },
  // #endregion Input

  // #region ScreenSpace
  GetWorldToScreen: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GetWorldToScreenEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GetWorldToScreen2D: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GetScreenToWorld2D: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GetScreenToWorldRay: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GetScreenToWorldRayEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion ScreenSpace

  // #region Camera
  GetCameraMatrix: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.void },
  GetCameraMatrix2D: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion Camera

  // #region Splines
  GetSplinePointLinear: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  GetSplinePointBasis: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  GetSplinePointCatmullRom: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  GetSplinePointBezierQuad: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  GetSplinePointBezierCubic: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // #endregion Splines

  // #region Shapes
  GetShapesTexture: { args: [FFIType.ptr], returns: FFIType.void },
  GetShapesTextureRectangle: { args: [FFIType.ptr], returns: FFIType.void },
  GetCollisionRec: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion Shapes

  // #region Colors
  Fade: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  ColorNormalize: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.void },
  ColorToHSV: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.void },
  ColorFromNormalized: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  ColorFromHSV: {
    args: [FFIType.f32, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  ColorTint: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  ColorBrightness: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  ColorContrast: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  ColorAlpha: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  ColorAlphaBlend: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  ColorLerp: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  GetColor: { args: [FFIType.u32, FFIType.ptr], returns: FFIType.void },
  GetPixelColor: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion Colors

  // #region Images
  LoadImage: { args: [FFIType.cstring, FFIType.ptr], returns: FFIType.void },
  LoadImageRaw: {
    args: [
      FFIType.cstring,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  LoadImageAnim: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadImageAnimFromMemory: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadImageFromMemory: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadImageFromTexture: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadImageFromScreen: { args: [FFIType.ptr], returns: FFIType.void },
  GenImageColor: {
    args: [FFIType.i32, FFIType.i32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GenImageGradientLinear: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  GenImageGradientRadial: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.f32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  GenImageGradientSquare: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.f32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  GenImageChecked: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  GenImageWhiteNoise: {
    args: [FFIType.i32, FFIType.i32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenImagePerlinNoise: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  GenImageCellular: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  ImageCopy: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.void },
  ImageFromImage: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  ImageFromChannel: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  ImageText: {
    args: [FFIType.cstring, FFIType.i32, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  ImageTextEx: {
    args: [
      FFIType.ptr,
      FFIType.cstring,
      FFIType.f32,
      FFIType.f32,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  GetImageColor: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GetImageAlphaBorder: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion Images

  // #region Textures
  LoadTexture: { args: [FFIType.cstring, FFIType.ptr], returns: FFIType.void },
  LoadTextureFromImage: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadTextureCubemap: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadRenderTexture: {
    args: [FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion Textures

  // #region Fonts
  GetFontDefault: { args: [FFIType.ptr], returns: FFIType.void },
  LoadFont: { args: [FFIType.cstring, FFIType.ptr], returns: FFIType.void },
  LoadFontEx: {
    args: [FFIType.cstring, FFIType.i32, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadFontFromImage: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadFontFromMemory: {
    args: [
      FFIType.cstring,
      FFIType.ptr,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  GetGlyphInfo: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GetGlyphAtlasRec: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion Fonts

  // #region Shaders
  LoadShader: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadShaderFromMemory: {
    args: [FFIType.cstring, FFIType.cstring, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion Shaders

  // #region Models
  LoadModel: { args: [FFIType.cstring, FFIType.ptr], returns: FFIType.void },
  LoadModelFromMesh: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GetModelBoundingBox: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GetMeshBoundingBox: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshPoly: {
    args: [FFIType.i32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshPlane: {
    args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshCube: {
    args: [FFIType.f32, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshSphere: {
    args: [FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshHemiSphere: {
    args: [FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshCylinder: {
    args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshCone: {
    args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshTorus: {
    args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshKnot: {
    args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshHeightmap: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GenMeshCubicmap: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadMaterialDefault: { args: [FFIType.ptr], returns: FFIType.void },
  // #endregion Models

  // #region Collision
  GetRayCollisionSphere: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  GetRayCollisionBox: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GetRayCollisionMesh: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GetRayCollisionTriangle: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  GetRayCollisionQuad: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // #endregion Collision

  // #region Audio
  LoadWave: { args: [FFIType.cstring, FFIType.ptr], returns: FFIType.void },
  LoadWaveFromMemory: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  WaveCopy: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.void },
  LoadSound: { args: [FFIType.cstring, FFIType.ptr], returns: FFIType.void },
  LoadSoundFromWave: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadSoundAlias: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.void },
  LoadMusicStream: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadMusicStreamFromMemory: {
    args: [FFIType.cstring, FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  LoadAudioStream: {
    args: [FFIType.u32, FFIType.u32, FFIType.u32, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion Audio

  // #region VR
  LoadVrStereoConfig: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion VR

  // #region Files
  LoadDroppedFiles: { args: [FFIType.ptr], returns: FFIType.void },
  // #endregion Files

  // #region Automation
  LoadAutomationEventList: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.void,
  },
  // #endregion Automation
} satisfies Record<string, FFIFunction>;

export type ShimDefinition = typeof ShimDefinition;
