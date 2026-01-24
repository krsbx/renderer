#undef LoadShader
#undef LoadShaderFromMemory

SHIM_2(Shader, LoadShader, const char*, vsFileName, const char*, fsFileName)
SHIM_2(Shader, LoadShaderFromMemory, const char*, vsCode, const char*, fsCode)
