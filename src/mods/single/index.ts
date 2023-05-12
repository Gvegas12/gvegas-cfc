import fs from "fs";
import path from "path";
import getFilenameData from "../../helpers/getFilenameData";
import Logger from "../../lib/logger";
import type { ModeParams } from "../types";

const singleMode = ({
  pathToTemplate,
  replaceOption,
  inputPathToBuild,
  inputFileNameForBuild,
}: ModeParams) => {
  const { filename, fileExtension } = getFilenameData(pathToTemplate);

  const templateFile = fs.readFileSync(pathToTemplate, "utf-8");

  let outputFilename: string;
  if (typeof replaceOption === "object" && replaceOption.filename === false) {
    outputFilename = filename;
  } else {
    outputFilename = inputFileNameForBuild;
  }

  fs.writeFileSync(
    path.resolve(inputPathToBuild, `${outputFilename}.${fileExtension}`),
    templateFile.replaceAll(filename, inputFileNameForBuild),
    { encoding: "utf-8" }
  );

  Logger({
    name: "SIMPLE MODE",
    message: `The ${outputFilename}.${fileExtension} file has been created successfully`,
    type: "success",
  });
};

export default singleMode;
