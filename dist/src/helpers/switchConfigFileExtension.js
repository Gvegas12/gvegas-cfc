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
exports.switchConfigFileExtension = void 0;
const fs_1 = __importDefault(require("fs"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const path_1 = __importDefault(require("path"));
const config_types_1 = require("@/types/config.types");
const rootPath = process.env.pwd;
const getYAMLConfig = (configFileName) => {
    return js_yaml_1.default.load(fs_1.default.readFileSync(configFileName, "utf8"));
};
const getJSConfig = async (configFileName) => {
    const config = await Promise.resolve(`${path_1.default.join(rootPath, configFileName)}`).then(s => __importStar(require(s)));
    return config.default;
};
const switchConfigFileExtension = async (configFileName) => {
    const extension = configFileName.slice(11);
    switch (extension) {
        case config_types_1.AvailableConfigExtensionsEnum.YAML: {
            return getYAMLConfig(configFileName);
        }
        case config_types_1.AvailableConfigExtensionsEnum.YML: {
            return getYAMLConfig(configFileName);
        }
        case config_types_1.AvailableConfigExtensionsEnum.JS: {
            return getJSConfig(configFileName);
        }
        case config_types_1.AvailableConfigExtensionsEnum.JSON: {
            return getJSConfig(configFileName);
        }
    }
};
exports.switchConfigFileExtension = switchConfigFileExtension;
