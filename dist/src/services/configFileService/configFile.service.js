"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigFileService = void 0;
const js_yaml_1 = __importDefault(require("js-yaml"));
const path_1 = __importStar(require("path"));
const fs_1 = require("fs");
const entities_1 = require("../../entities");
class ConfigFileService {
    fileService;
    constructor(fileService) {
        this.fileService = fileService;
    }
    async getOptions() {
        const { extension, configFilenameOfAnyExtension } = this.getConfigFileNameData();
        switch (extension) {
            case entities_1.ConfigFileAvailableExtensionsEnum.YAML ||
                entities_1.ConfigFileAvailableExtensionsEnum.YML:
                {
                    return this.getYAMLConfig(configFilenameOfAnyExtension);
                }
            case entities_1.ConfigFileAvailableExtensionsEnum.JSON: {
                // return await this.getJSConfig(configFilenameOfAnyExtension);
                throw new Error("JSON формат не поддерживается");
            }
            default: {
                return await this.getJSConfig(configFilenameOfAnyExtension);
            }
        }
    }
    getConfigFileNameData() {
        const filesFromRootPath = (0, fs_1.readdirSync)((0, path_1.resolve)(__dirname));
        const configFilenameOfAnyExtension = filesFromRootPath.filter(entities_1.CONFIG_FILENAME_REGEXP.exec)[0];
        const filenameData = this.fileService.getFilenameData(configFilenameOfAnyExtension);
        if (!Object.values(entities_1.ConfigFileAvailableExtensionsEnum).find((ex) => ex.includes(filenameData.extension))) {
            throw new Error(`Обнаружено неподдерживаемое расширение конфигурационного файла.
      Поддерживаемые форматы: ${Object.values(entities_1.ConfigFileAvailableExtensionsEnum).join(", ")}
      `);
        }
        return { ...filenameData, configFilenameOfAnyExtension };
    }
    getYAMLConfig(configFilename) {
        return js_yaml_1.default.load(this.fileService.getByName(configFilename).content.toString());
    }
    async getJSConfig(configFileName) {
        const config = await import(path_1.default.join(__dirname, configFileName));
        return config.default;
    }
}
exports.ConfigFileService = ConfigFileService;
