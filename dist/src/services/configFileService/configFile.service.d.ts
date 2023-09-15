import { IConfigFileOptions } from "../../entities";
import { ConfigFileRepository } from "../../repositories";
import { FileService } from "../fileService/file.service";
export declare class ConfigFileService implements ConfigFileRepository {
    private readonly fileService;
    constructor(fileService: FileService);
    getOptions(): Promise<IConfigFileOptions>;
    private getConfigFileNameData;
    private getYAMLConfig;
    private getJSConfig;
}
