"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiple = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("@/lib/logger"));
const single_1 = require("../single");
const config_types_1 = require("@/types/config.types");
const checkFolder = (pathToFolder) => {
    try {
        const files = fs_1.default.readdirSync(pathToFolder);
        const lastSlahIndex = pathToFolder.lastIndexOf("/");
        const folderName = pathToFolder.slice(lastSlahIndex - 1);
        return { files, folderName: folderName, boolean: true };
    }
    catch {
        return { boolean: false };
    }
};
const multiple = ({ rootPath, inputPathToBuild, inputFilenameForBuild, absolutePathToTemplate, }) => {
    const rootFiles = fs_1.default.readdirSync(absolutePathToTemplate);
    const stack = { data: [] };
    if (!checkFolder(absolutePathToTemplate).boolean) {
        (0, logger_1.default)({
            name: "MULTIPLE MODE",
            message: `Указанный файл в поле path не является папкой: ${absolutePathToTemplate}`,
            type: "error",
        });
        return;
    }
    const folders = [];
    const files = [];
    let iterationCount = 0;
    const inputToStack = (filesProp, parent) => {
        iterationCount++;
        for (let file of filesProp) {
            const folder = checkFolder(path_1.default.join(absolutePathToTemplate, file));
            if (folder.boolean) {
                folders.push(file);
                stack.data.push({
                    file,
                    parent,
                    type: "folder",
                    iterationCount,
                });
            }
            else {
                files.push(file);
                stack.data.push({
                    file,
                    parent,
                    type: "file",
                    iterationCount,
                });
            }
            if (folder.files && folder.files.length) {
                inputToStack(folder.files, folder.folderName);
            }
        }
        stack.maxIterationCount = iterationCount;
    };
    inputToStack(rootFiles);
    try {
        const arrayFromMaxIterationCount = new Array(stack.maxIterationCount);
        for (let i = 0; i < arrayFromMaxIterationCount.length; i++) {
            stack.data.forEach(({ file, iterationCount, type, parent }) => {
                const rootOutputDirPath = path_1.default.join(rootPath, inputPathToBuild, inputFilenameForBuild);
                fs_1.default.mkdir(rootOutputDirPath, { recursive: true }, () => {
                    if (type === "file" && iterationCount === i + 1) {
                        const outputFilePath = parent
                            ? path_1.default.join(rootOutputDirPath, parent)
                            : rootOutputDirPath;
                        const inputTemplateFilePath = parent
                            ? path_1.default.join(absolutePathToTemplate, parent, file)
                            : path_1.default.join(absolutePathToTemplate, file);
                        (0, single_1.single)({
                            mode: config_types_1.ModeEnum.MULTIPLE,
                            inputFilenameForBuild,
                            inputPathToBuild: outputFilePath,
                            absolutePathToTemplate: inputTemplateFilePath,
                        });
                    }
                    if (type === "folder") {
                        fs_1.default.mkdir(path_1.default.join(rootOutputDirPath, file), () => { });
                    }
                });
            });
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.multiple = multiple;
