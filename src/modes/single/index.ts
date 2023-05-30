import path from "path";
import fs from "fs";

import Logger from "../../lib/logger";
import { getFilenameData } from "../../helpers";
import { defaultBuilderFilename } from "../../constants";
import { ModeEnum } from "../../types/config.types";
import type { InputType } from "../../types/input.types";

interface ISingleProps
  extends Pick<InputType, "inputFilenameForBuild" | "inputPathToBuild"> {
  absolutePathToTemplate: string;
  mode?: ModeEnum;
}

export const single = ({
  inputPathToBuild,
  inputFilenameForBuild,
  absolutePathToTemplate,
  mode = ModeEnum.SINGLE,
}: ISingleProps) => {
  const { filename, fileExtension } = getFilenameData(absolutePathToTemplate);

  const templateFile = fs.readFileSync(absolutePathToTemplate, "utf-8");

  const buildFilename =
    filename === "index"
      ? `index.${fileExtension}`
      : `${filename}.${fileExtension}`.replace(
          defaultBuilderFilename,
          inputFilenameForBuild
        );

  fs.writeFileSync(
    path.resolve(inputPathToBuild, buildFilename),
    templateFile.replaceAll(defaultBuilderFilename, inputFilenameForBuild)
  );

  Logger({
    name: `${mode.toUpperCase()} MODE`,
    message: `The ${buildFilename} file has been created successfully`,
    type: "success",
  });
};
