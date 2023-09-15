export interface IConfigFileOptions {
  template_name: string;
  path_to_template: string;
  path_to_package?: string;
}

export enum ConfigFileAvailableExtensionsEnum {
  JavaScript = "js",
  TypeScript = "ts",
  YML = "yml",
  YAML = "yaml",
  JSON = "json",
}

export const CONFIG_FILENAME = "gvegas-cfc.config";
export const CONFIG_FILENAME_REGEXP = new RegExp(`/^${CONFIG_FILENAME}\.?.+/m`);

export class ConfigFileModel {
  constructor(
    readonly name: typeof CONFIG_FILENAME,
    readonly extension: ConfigFileAvailableExtensionsEnum,
    readonly options: IConfigFileOptions
  ) {}
}
