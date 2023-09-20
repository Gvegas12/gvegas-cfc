"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigFileService = void 0;
const js_yaml_1 = __importDefault(require("js-yaml"));
const path_1 = require("path");
const fs_1 = require("fs");
const entities_1 = require("../../../core/entities");
class ConfigFileService {
    fileService;
    constructor(fileService) {
        this.fileService = fileService;
    }
    async getOptions() {
        const { extension, configFilename } = this.getConfigFileNameData();
        switch (extension.replace(".", "")) {
            case entities_1.ConfigFileAvailableExtensionsEnum.YAML ||
                entities_1.ConfigFileAvailableExtensionsEnum.YML:
                {
                    return this.getYAMLConfig(configFilename);
                }
            case entities_1.ConfigFileAvailableExtensionsEnum.JSON: {
                // return await this.getJSConfig(configFilenameOfAnyExtension);
                throw new Error("JSON формат не поддерживается");
            }
            default: {
                return await this.getJSConfig(configFilename);
            }
        }
    }
    getConfigFileNameData() {
        const filesFromRootPath = (0, fs_1.readdirSync)((0, path_1.resolve)());
        const configFilenameOfAnyExtension = filesFromRootPath.filter((filename) => entities_1.CONFIG_FILENAME_REGEXP.exec(filename))[0];
        const filenameData = this.fileService.getFilenameData(configFilenameOfAnyExtension);
        if (!Object.values(entities_1.ConfigFileAvailableExtensionsEnum).find((ex) => ex.includes(filenameData.extension.replace(".", "")))) {
            throw new Error(`Обнаружено неподдерживаемое расширение конфигурационного файла.
      Поддерживаемые форматы: ${Object.values(entities_1.ConfigFileAvailableExtensionsEnum).join(", ")}
      `);
        }
        return { ...filenameData, configFilename: configFilenameOfAnyExtension };
    }
    getYAMLConfig(configFilename) {
        return js_yaml_1.default.load(this.fileService.getByName(configFilename).content.toString());
    }
    async getJSConfig(configFileName) {
        const config = await import((0, path_1.join)(configFileName));
        return config.default;
    }
}
exports.ConfigFileService = ConfigFileService;
