import type { IConfig } from "../types/config.types";

export const getConfigKeys = <T extends string>(
  configFile: IConfig,
  inputTemplateName: T
): IConfig[T] => {
  return configFile[inputTemplateName];
};
