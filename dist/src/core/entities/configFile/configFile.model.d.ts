export interface IConfigFileOptions {
    template_name: string;
    path_to_template: string;
    path_to_package?: string;
}
export declare enum ConfigFileAvailableExtensionsEnum {
    JavaScript = "js",
    TypeScript = "ts",
    YML = "yml",
    YAML = "yaml",
    JSON = "json"
}
export declare const CONFIG_FILENAME = "gvegas-cfc.config";
export declare const CONFIG_FILENAME_REGEXP: RegExp;
export declare class ConfigFileModel {
    readonly name: typeof CONFIG_FILENAME;
    readonly extension: ConfigFileAvailableExtensionsEnum;
    readonly options: IConfigFileOptions;
    constructor(name: typeof CONFIG_FILENAME, extension: ConfigFileAvailableExtensionsEnum, options: IConfigFileOptions);
}
