import yaml from "js-yaml";
import path, { resolve } from "path";
import { readdirSync } from "fs";

import {
  CONFIG_FILENAME_REGEXP,
  ConfigFileAvailableExtensionsEnum,
  IConfigFileOptions,
} from "@/entities";
import { ConfigFileRepository } from "@/repositories";
import { FileService } from "../fileService/file.service";

export class ConfigFileService implements ConfigFileRepository {
  constructor(private readonly fileService: FileService) {}

  async getOptions() {
    const { extension, configFilenameOfAnyExtension } =
      this.getConfigFileNameData();

    switch (extension) {
      case ConfigFileAvailableExtensionsEnum.YAML ||
        ConfigFileAvailableExtensionsEnum.YML: {
        return this.getYAMLConfig(configFilenameOfAnyExtension);
      }

      case ConfigFileAvailableExtensionsEnum.JSON: {
        // return await this.getJSConfig(configFilenameOfAnyExtension);
        throw new Error("JSON формат не поддерживается");
      }

      default: {
        return await this.getJSConfig(configFilenameOfAnyExtension);
      }
    }
  }

  private getConfigFileNameData() {
    const filesFromRootPath = readdirSync(resolve(__dirname));
    const configFilenameOfAnyExtension = filesFromRootPath.filter(
      CONFIG_FILENAME_REGEXP.exec
    )[0];

    const filenameData = this.fileService.getFilenameData(
      configFilenameOfAnyExtension
    );

    if (
      !Object.values(ConfigFileAvailableExtensionsEnum).find((ex) =>
        ex.includes(filenameData.extension)
      )
    ) {
      throw new Error(`Обнаружено неподдерживаемое расширение конфигурационного файла.
      Поддерживаемые форматы: ${Object.values(
        ConfigFileAvailableExtensionsEnum
      ).join(", ")}
      `);
    }

    return { ...filenameData, configFilenameOfAnyExtension };
  }

  private getYAMLConfig(configFilename: string) {
    return yaml.load(
      this.fileService.getByName(configFilename).content.toString()
    ) as IConfigFileOptions;
  }

  private async getJSConfig(configFileName: string) {
    const config = await import(path.join(__dirname, configFileName));
    return config.default as IConfigFileOptions;
  }
}
