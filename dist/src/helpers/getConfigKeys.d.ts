import type { IConfig } from "../types/config.types";
export declare const getConfigKeys: <T extends string>(configFile: IConfig, inputTemplateName: T) => {
    path: string;
    mode: import("../types/config.types").ModeEnum;
};
