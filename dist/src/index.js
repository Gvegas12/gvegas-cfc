"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("./lib/logger"));
const switchConfigFileExtension_1 = __importDefault(require("./helpers/switchConfigFileExtension"));
const config_types_1 = require("./types/config.types");
const single_1 = __importDefault(require("./mods/single"));
const multiple_1 = __importDefault(require("./mods/multiple"));
const path_1 = __importDefault(require("path"));
const rootPath = process.env.pwd;
const config = ({ inputFileNameForBuild, inputPathToBuild, inputTemplateName, }) => {
    const filesFromRootPath = fs_1.default.readdirSync(rootPath);
    const configFileOfAnyExtension = filesFromRootPath.filter((file) => /^crc\.config\.?.+/m.exec(file));
    if (configFileOfAnyExtension.length > 1) {
        (0, logger_1.default)({
            name: "CRC CONFIG FILE",
            message: "Найдено более одного конфигурационного файла. Ожидалось 1.",
        });
        return;
    }
    if (!configFileOfAnyExtension.length) {
        (0, logger_1.default)({
            name: "CRC CONFIG FILE",
            message: "Конфигурационный файл не найден. Ожидалось 1.",
        });
        return;
    }
    const configObject = (0, switchConfigFileExtension_1.default)(configFileOfAnyExtension[0]);
    const currentMode = configObject[inputTemplateName].mode;
    const pathToTemplate = path_1.default.join(rootPath, configObject[inputTemplateName].path);
    const replaceOption = configObject[inputTemplateName].replace;
    if (currentMode === config_types_1.ModeEnum.SINGLE) {
        (0, single_1.default)({
            pathToTemplate,
            replaceOption,
            inputFileNameForBuild,
            inputPathToBuild,
        });
    }
    if (currentMode === config_types_1.ModeEnum.MULTIPLE) {
        (0, multiple_1.default)({
            pathToTemplate,
            replaceOption,
            inputFileNameForBuild,
            inputPathToBuild,
        });
    }
};
exports.default = config;
