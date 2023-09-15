"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFileDto = void 0;
class CreateFileDto {
    name;
    extension;
    content;
    path_to_build;
    path_to_template;
    constructor(name, extension, content, path_to_build, path_to_template) {
        this.name = name;
        this.extension = extension;
        this.content = content;
        this.path_to_build = path_to_build;
        this.path_to_template = path_to_template;
    }
}
exports.CreateFileDto = CreateFileDto;
