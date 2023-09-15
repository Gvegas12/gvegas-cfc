import { FileModel } from "@/entities";

export class CreateFileDto implements FileModel {
  constructor(
    readonly name: string,
    readonly extension: string,
    readonly content: string,
    readonly path_to_build: string,
    readonly path_to_template: string,
  ) {}
}
