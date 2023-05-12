"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getFilenameData = (pathToTemplate) => {
    const dotIndex = pathToTemplate.lastIndexOf(".");
    const fileExtension = pathToTemplate.slice(dotIndex + 1);
    const lastSlashIndex = pathToTemplate.lastIndexOf("/");
    const filename = pathToTemplate.slice(lastSlashIndex + 1, dotIndex);
    return {
        filename,
        fileExtension,
    };
};
exports.default = getFilenameData;