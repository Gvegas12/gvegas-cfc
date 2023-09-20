"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMediatorService = void 0;
class DataMediatorService {
    fileRepository;
    configFileRepository;
    constructor(fileRepository, configFileRepository) {
        this.fileRepository = fileRepository;
        this.configFileRepository = configFileRepository;
    }
    start() {
        //
    }
}
exports.DataMediatorService = DataMediatorService;
