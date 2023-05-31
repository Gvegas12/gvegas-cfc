"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.single = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const logger_1 = __importDefault(require("../../lib/logger"));
const helpers_1 = require("../../helpers");
const constants_1 = require("../../constants");
const config_types_1 = require("../../types/config.types");
const single = ({ inputPathToBuild, inputFilenameForBuild, absolutePathToTemplate, mode = config_types_1.ModeEnum.SINGLE, }) => {
    const { filename, fileExtension } = (0, helpers_1.getFilenameData)(absolutePathToTemplate);
    const templateFile = fs_1.default.readFileSync(absolutePathToTemplate, "utf-8");
    const buildFilename = filename === "index"
        ? `index.${fileExtension}`
        : `${filename}.${fileExtension}`.replace(constants_1.defaultBuilderFilename, inputFilenameForBuild);
    fs_1.default.writeFileSync(path_1.default.resolve(inputPathToBuild, buildFilename), templateFile.replaceAll(constants_1.defaultBuilderFilename, inputFilenameForBuild));
    (0, logger_1.default)({
        name: `${mode.toUpperCase()} MODE`,
        message: `The ${buildFilename} file has been created successfully`,
        type: "success",
    });
};
exports.single = single;
