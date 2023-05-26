"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("./lib/logger"));
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
    const { path: pathToTemplate } = (0, helpers_1.getConfigKeys)(configObject, inputTemplateName);
    const absolutePathToTemplate = path_1.default.join(rootPath, pathToTemplate);
    const { filename, fileExtension } = (0, helpers_1.getFilenameData)(absolutePathToTemplate);
    const templateFile = fs_1.default.readFileSync(absolutePathToTemplate, "utf-8");
    const buildFilename = `${inputFilenameForBuild}.${fileExtension}`;
    fs_1.default.writeFileSync(path_1.default.resolve(inputPathToBuild, buildFilename), templateFile.replaceAll(filename, inputFilenameForBuild));
    (0, logger_1.default)({
        name: "SIMPLE MODE",
        message: `The ${buildFilename} file has been created successfully`,
        type: "success",
    });
};
exports.default = config;
