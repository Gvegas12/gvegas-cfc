import yaml from "js-yaml";
import { join, resolve } from "path";
import { readdirSync } from "fs";

import {
  CONFIG_FILENAME_REGEXP,
  ConfigFileAvailableExtensionsEnum,
  IConfigFileOptions,
} from "@/core/entities";
import { ConfigFileRepository } from "@/core/repositories";

import { FileService } from "../fileService/file.service";

export class ConfigFileService implements ConfigFileRepository {
  constructor(private readonly fileService: FileService) {}

  async getOptions() {
    const { extension, configFilename } = this.getConfigFileNameData();

    switch (extension.replace(".", "")) {
      case ConfigFileAvailableExtensionsEnum.YAML ||
        ConfigFileAvailableExtensionsEnum.YML: {
        return this.getYAMLConfig(configFilename);
      }

      case ConfigFileAvailableExtensionsEnum.JSON: {
        // return await this.getJSConfig(configFilenameOfAnyExtension);
        throw new Error("JSON формат не поддерживается");
      }

      default: {
        return await this.getJSConfig(configFilename);
      }
    }
  }

  private getConfigFileNameData() {
    const filesFromRootPath = readdirSync(resolve());

    const configFilenameOfAnyExtension = filesFromRootPath.filter((filename) =>
      CONFIG_FILENAME_REGEXP.exec(filename)
    )[0];

    const filenameData = this.fileService.getFilenameData(
      configFilenameOfAnyExtension
    );

    if (
      !Object.values(ConfigFileAvailableExtensionsEnum).find((ex) =>
        ex.includes(filenameData.extension.replace(".", ""))
      )
    ) {
      throw new Error(`Обнаружено неподдерживаемое расширение конфигурационного файла.
      Поддерживаемые форматы: ${Object.values(
        ConfigFileAvailableExtensionsEnum
      ).join(", ")}
      `);
    }

    return { ...filenameData, configFilename: configFilenameOfAnyExtension };
  }

  private getYAMLConfig(configFilename: string) {
    return yaml.load(
      this.fileService.getByName(configFilename).content.toString()
    ) as IConfigFileOptions;
  }

  private async getJSConfig(configFileName: string) {
    const config = await import(join(configFileName));
    return config.default as IConfigFileOptions;
  }
}
