"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFilenameData = void 0;
const getFilenameData = (pathToTemplate) => {
    const dotIndex = pathToTemplate.lastIndexOf(".");
    const fileExtension = pathToTemplate.slice(dotIndex + 1);
    const filename = "Template";
    return {
        filename,
        fileExtension,
    };
};
exports.getFilenameData = getFilenameData;
