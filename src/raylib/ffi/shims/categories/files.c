#undef LoadDirectoryFiles
#undef LoadDirectoryFilesEx
#undef LoadDroppedFiles

SHIM_1(FilePathList, LoadDirectoryFiles, const char*, dirPath)
SHIM_3(FilePathList, LoadDirectoryFilesEx, const char*, basePath, const char*, filter, bool, scanSubdirs)
SHIM_0(FilePathList, LoadDroppedFiles)
