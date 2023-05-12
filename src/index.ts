import fs from "fs";
import Logger from "./lib/logger";
import { InputType } from "./types/input.types";
import switchConfigFileExtension from "./helpers/switchConfigFileExtension";
import { ModeEnum } from "./types/config.types";
import singleMode from "./mods/single";
import multipleMode from "./mods/multiple";
import path from "path";

const rootPath = process.env.pwd;

const config = ({
  inputFileNameForBuild,
  inputPathToBuild,
  inputTemplateName,
}: InputType) => {
  const filesFromRootPath = fs.readdirSync(rootPath);
  const configFileOfAnyExtension = filesFromRootPath.filter((file) =>
    /^crc\.config\.?.+/m.exec(file)
  );

  if (configFileOfAnyExtension.length > 1) {
    Logger({
      name: "CRC CONFIG FILE",
      message: "Найдено более одного конфигурационного файла. Ожидалось 1.",
    });
    return;
  }
  if (!configFileOfAnyExtension.length) {
    Logger({
      name: "CRC CONFIG FILE",
      message: "Конфигурационный файл не найден. Ожидалось 1.",
    });
    return;
  }

  const configObject = switchConfigFileExtension(configFileOfAnyExtension[0]);

  const currentMode = configObject[inputTemplateName].mode;
  const pathToTemplate = path.join(
    rootPath,
    configObject[inputTemplateName].path
  );
  const replaceOption = configObject[inputTemplateName].replace;

  if (currentMode === ModeEnum.SINGLE) {
    singleMode({
      pathToTemplate,
      replaceOption,
      inputFileNameForBuild,
      inputPathToBuild,
    });
  }
  if (currentMode === ModeEnum.MULTIPLE) {
    multipleMode({
      pathToTemplate,
      replaceOption,
      inputFileNameForBuild,
      inputPathToBuild,
    });
  }
};

export default config;
