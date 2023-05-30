import fs from "fs";
import path from "path";

import { single } from "./modes/single";
import { multiple } from "./modes/multiple";

import Logger from "./lib/logger";
import { ModeEnum } from "./types/config.types";
import type { InputType } from "./types/input.types";
import { getConfigKeys, switchConfigFileExtension } from "./helpers";

const rootPath = process.env.pwd;
const configFilenameRegExp = /^cfc\.config\.?.+/m;

const config = async ({
  inputFilenameForBuild,
  inputPathToBuild,
  inputTemplateName,
}: InputType) => {
  const filesFromRootPath = fs.readdirSync(rootPath);
  const configFileOfAnyExtension = filesFromRootPath.filter((file) =>
    configFilenameRegExp.exec(file)
  );

  if (configFileOfAnyExtension.length > 1) {
    Logger({
      name: "CONFIG FILE",
      message: `Найдено более одного конфигурационного файла ${configFileOfAnyExtension[0]}`,
    });
    return;
  }
  if (!configFileOfAnyExtension.length) {
    Logger({
      name: "CONFIG FILE",
      message: `Конфигурационный файл не найден.`,
    });
    return;
  }

  const configObject = await switchConfigFileExtension(
    configFileOfAnyExtension[0]
  );

  const { path: pathToTemplate, mode } = getConfigKeys(
    configObject,
    inputTemplateName
  );

  const absolutePathToTemplate = path.join(rootPath, pathToTemplate);

  if (mode === ModeEnum.MULTIPLE) {
    multiple({
      rootPath,
      inputPathToBuild,
      inputFilenameForBuild,
      absolutePathToTemplate,
    });
  }
  if (mode === ModeEnum.SINGLE) {
    single({
      inputPathToBuild,
      inputFilenameForBuild,
      absolutePathToTemplate,
    });
  }
};

export default config;
