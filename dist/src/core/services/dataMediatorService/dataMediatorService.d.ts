import { FileRepository, ConfigFileRepository } from "../../../core/repositories";
export declare class DataMediatorService {
    private readonly fileRepository;
    private readonly configFileRepository;
    constructor(fileRepository: FileRepository, configFileRepository: ConfigFileRepository);
    start(): void;
}
