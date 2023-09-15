"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const replaceTemplate = (filename, replace) => {
    return filename.replace(/Template/gim, replace);
};
class FileService {
    create(pathToTemplate, pathToOutput, outputFilename) {
        (0, fs_1.mkdirSync)(pathToOutput, { recursive: true });
        (0, fs_1.readdirSync)(pathToTemplate).forEach((name) => {
            const rootFilenameData = this.getFilenameData(name);
            const currentPathToOutput = (0, path_1.join)(pathToOutput, replaceTemplate(name, outputFilename));
            const currentPathToTemplate = (0, path_1.join)(pathToTemplate, name);
            if (rootFilenameData.extension) {
                const content = (0, fs_1.readFileSync)(currentPathToTemplate, "utf-8");
                (0, fs_1.writeFileSync)(currentPathToOutput, replaceTemplate(content, outputFilename));
            }
            else {
                (0, fs_1.mkdirSync)(currentPathToOutput, { recursive: true });
                this.create(currentPathToTemplate, currentPathToOutput, outputFilename);
            }
        });
    }
    getByName(filenameWithExtension) {
        const content = (0, fs_1.readFileSync)(filenameWithExtension, "utf8");
        const filenameData = this.getFilenameData(filenameWithExtension);
        return {
            content,
            ...filenameData,
        };
    }
    getFilenameData(path) {
        const execResult = /\.[^.]+$/.exec(path);
        let name, extension;
        if (execResult) {
            extension = execResult[0];
            name = execResult.input.split(extension)[0];
        }
        else {
            name = path;
        }
        return {
            name,
            extension,
        };
    }
}
exports.FileService = FileService;
