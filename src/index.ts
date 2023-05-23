import fs from "fs";
import path from "path";

import Logger from "./lib/logger";
import {
  getConfigKeys,
  getFilenameData,
  switchConfigFileExtension,
} from "./helpers";

import type { InputType } from "./types/input.types";

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
  const { path: pathToTemplate } = getConfigKeys(
    configObject,
    inputTemplateName
  );

  const absolutePathToTemplate = path.join(rootPath, pathToTemplate);
  const { filename, fileExtension } = getFilenameData(absolutePathToTemplate);

  const templateFile = fs.readFileSync(absolutePathToTemplate, "utf-8");

  const buildFilename = `${inputFilenameForBuild}.${fileExtension}`;
  fs.writeFileSync(
    path.resolve(inputPathToBuild, buildFilename),
    templateFile.replaceAll(filename, inputFilenameForBuild)
  );

  Logger({
    name: "SIMPLE MODE",
    message: `The ${buildFilename} file has been created successfully`,
    type: "success",
  });
};

export default config;
