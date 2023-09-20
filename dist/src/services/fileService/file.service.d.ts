import { FileModel } from "../../entities";
import { FileRepository } from "../../repositories";
export declare class FileService implements FileRepository {
    create(pathToTemplate: string, pathToOutput: string, outputFilename: string): void;
    getByName(filenameWithExtension: FileModel["name"]): FileModel;
    getFilenameData(path: string): {
        name: string;
        extension: string;
    };
    private createNestedFiles;
}
