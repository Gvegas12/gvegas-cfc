export declare enum ModeEnum {
    SINGLE = "single",
    MULTIPLE = "multiple"
}
export declare enum AvailableConfigExtensionsEnum {
    JS = "js",
    YML = "yml",
    YAML = "yaml",
    JSON = "json"
}
export interface IConfig {
    [template: string]: {
        path: string;
        mode: ModeEnum;
    };
}
