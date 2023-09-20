export class FileModel {
  constructor(
    readonly name: string,
    readonly extension: string,
    readonly content: string
  ) {}
}

export const DEFAULT_TEMPLATE_NAME = "Template";
