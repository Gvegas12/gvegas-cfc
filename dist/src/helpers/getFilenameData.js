"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilenameData = void 0;
const getFilenameData = (pathToTemplate) => {
    const dotIndex = pathToTemplate.lastIndexOf(".");
    const fileExtension = pathToTemplate.slice(dotIndex + 1);
    const lastSlashIndex = pathToTemplate.lastIndexOf("\\");
    let filename = pathToTemplate.slice(lastSlashIndex + 1);
    filename = filename.substring(0, filename.lastIndexOf("."));
    return {
        filename,
        fileExtension,
    };
};
exports.getFilenameData = getFilenameData;
