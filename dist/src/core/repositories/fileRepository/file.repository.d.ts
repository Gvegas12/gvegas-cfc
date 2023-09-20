import { FileModel } from "../../../core/entities";
type TGetFilenameDataResult = Pick<FileModel, "extension" | "name"> | undefined;
export interface FileRepository {
    create(pathToTemplate: string, pathToOutput: string, outputFilename: string): void;
    getByName(filenameWithExtension: FileModel["name"]): FileModel | undefined;
    getFilenameData(filenameWithExtension: FileModel["name"]): TGetFilenameDataResult;
}
export {};
