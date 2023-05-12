"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getFilenameData_1 = __importDefault(require("../../helpers/getFilenameData"));
const logger_1 = __importDefault(require("../../lib/logger"));
const singleMode = ({ pathToTemplate, replaceOption, inputPathToBuild, inputFileNameForBuild, }) => {
    const { filename, fileExtension } = (0, getFilenameData_1.default)(pathToTemplate);
    const templateFile = fs_1.default.readFileSync(pathToTemplate, "utf-8");
    let outputFilename;
    if (typeof replaceOption === "object" && replaceOption.filename === false) {
        outputFilename = filename;
    }
    else {
        outputFilename = inputFileNameForBuild;
    }
    fs_1.default.writeFileSync(path_1.default.resolve(inputPathToBuild, `${outputFilename}.${fileExtension}`), templateFile.replaceAll(filename, inputFileNameForBuild), { encoding: "utf-8" });
    (0, logger_1.default)({
        name: "SIMPLE MODE",
        message: `The ${outputFilename}.${fileExtension} file has been created successfully`,
        type: "success",
    });
};
exports.default = singleMode;
