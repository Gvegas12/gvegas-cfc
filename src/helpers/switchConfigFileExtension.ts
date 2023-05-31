import fs from "fs";
import yaml from "js-yaml";
import path from "path";

import { AvailableConfigExtensionsEnum, IConfig } from "@/types/config.types";

const rootPath = process.env.pwd;

const getYAMLConfig = (configFileName: string): IConfig => {
  return yaml.load(fs.readFileSync(configFileName, "utf8")) as IConfig;
};
const getJSConfig = async (configFileName: string): Promise<IConfig> => {
  const config = await import(path.join(rootPath, configFileName));
  return config.default as IConfig;
};

export const switchConfigFileExtension = async (
  configFileName: string
): Promise<IConfig> => {
  const extension = configFileName.slice(11);

  switch (extension) {
    case AvailableConfigExtensionsEnum.YAML: {
      return getYAMLConfig(configFileName);
    }
    case AvailableConfigExtensionsEnum.YML: {
      return getYAMLConfig(configFileName);
    }
    case AvailableConfigExtensionsEnum.JS: {
      return getJSConfig(configFileName);
    }
    case AvailableConfigExtensionsEnum.JSON: {
      return getJSConfig(configFileName);
    }
  }
};
