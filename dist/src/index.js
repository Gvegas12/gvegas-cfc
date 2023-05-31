"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const single_1 = require("./modes/single");
const multiple_1 = require("./modes/multiple");
const logger_1 = __importDefault(require("./lib/logger"));
const config_types_1 = require("./types/config.types");
const helpers_1 = require("./helpers");
const rootPath = process.env.pwd;
const configFilenameRegExp = /^cfc\.config\.?.+/m;
const config = async ({ inputFilenameForBuild, inputPathToBuild, inputTemplateName, }) => {
    const filesFromRootPath = fs_1.default.readdirSync(rootPath);
    const configFileOfAnyExtension = filesFromRootPath.filter((file) => configFilenameRegExp.exec(file));
    if (configFileOfAnyExtension.length > 1) {
        (0, logger_1.default)({
            name: "CONFIG FILE",
            message: `Найдено более одного конфигурационного файла ${configFileOfAnyExtension[0]}`,
        });
        return;
    }
    if (!configFileOfAnyExtension.length) {
        (0, logger_1.default)({
            name: "CONFIG FILE",
            message: `Конфигурационный файл не найден.`,
        });
        return;
    }
    const configObject = await (0, helpers_1.switchConfigFileExtension)(configFileOfAnyExtension[0]);
    const { path: pathToTemplate, mode } = (0, helpers_1.getConfigKeys)(configObject, inputTemplateName);
    const absolutePathToTemplate = path_1.default.join(rootPath, pathToTemplate);
    if (mode === config_types_1.ModeEnum.MULTIPLE) {
        (0, multiple_1.multiple)({
            rootPath,
            inputPathToBuild,
            inputFilenameForBuild,
            absolutePathToTemplate,
        });
    }
    if (mode === config_types_1.ModeEnum.SINGLE) {
        (0, single_1.single)({
            inputPathToBuild,
            inputFilenameForBuild,
            absolutePathToTemplate,
        });
    }
};
exports.config = config;
