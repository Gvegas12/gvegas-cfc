"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TEMPLATE_NAME = exports.FileModel = void 0;
class FileModel {
    name;
    extension;
    content;
    constructor(name, extension, content) {
        this.name = name;
        this.extension = extension;
        this.content = content;
    }
}
exports.FileModel = FileModel;
exports.DEFAULT_TEMPLATE_NAME = "Template";
