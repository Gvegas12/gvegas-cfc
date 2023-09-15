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
    // private getConfigFile() {
    //   const filesFromRootPath = readdirSync(resolve(__dirname));
    //   const configFileOfAnyExtension = filesFromRootPath.filter(
    //     ConfigFileNameRegExp.exec
    //   );
    //   return configFileOfAnyExtension;
    // }
    getData() {
    }
}
exports.DataMediatorService = DataMediatorService;
