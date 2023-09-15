import { FileRepository, ConfigFileRepository } from "../../repositories";
export declare class DataMediatorService {
    private readonly fileRepository;
    private readonly configFileRepository;
    constructor(fileRepository: FileRepository, configFileRepository: ConfigFileRepository);
    getData(): void;
}
