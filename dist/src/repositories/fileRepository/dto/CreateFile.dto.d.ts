import { FileModel } from "../../../entities";
export declare class CreateFileDto implements FileModel {
    readonly name: string;
    readonly extension: string;
    readonly content: string;
    readonly path_to_build: string;
    readonly path_to_template: string;
    constructor(name: string, extension: string, content: string, path_to_build: string, path_to_template: string);
}
