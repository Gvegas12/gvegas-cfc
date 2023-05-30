import fs from "fs";
import path from "path";
import Logger from "../../lib/logger";
import { single } from "../single";
import { InputType } from "../../types/input.types";
import { ModeEnum } from "../../types/config.types";

const checkFolder = (pathToFolder: string) => {
  try {
    const files = fs.readdirSync(pathToFolder);

    const lastSlahIndex = pathToFolder.lastIndexOf("/");
    const folderName = pathToFolder.slice(lastSlahIndex - 1);

    return { files, folderName: folderName, boolean: true };
  } catch {
    return { boolean: false };
  }
};

interface IMultipleProps
  extends Pick<InputType, "inputFilenameForBuild" | "inputPathToBuild"> {
  absolutePathToTemplate: string;
  rootPath: string;
}

export const multiple = ({
  rootPath,
  inputPathToBuild,
  inputFilenameForBuild,
  absolutePathToTemplate,
}: IMultipleProps): void => {
  const rootFiles = fs.readdirSync(absolutePathToTemplate);

  type StackItemType = {
    data: Array<{
      file: string;
      parent?: string;
      type: "folder" | "file";
      iterationCount: number;
    }>;
    maxIterationCount?: number;
  };
  const stack: StackItemType = { data: [] } as StackItemType;

  if (!checkFolder(absolutePathToTemplate).boolean) {
    Logger({
      name: "MULTIPLE MODE",
      message: `Указанный файл в поле path не является папкой: ${absolutePathToTemplate}`,
      type: "error",
    });
    return;
  }

  const folders: string[] = [];
  const files: string[] = [];

  let iterationCount = 0;
  const inputToStack = (filesProp: string[], parent?: string) => {
    iterationCount++;
    for (let file of filesProp) {
      const folder = checkFolder(path.join(absolutePathToTemplate, file));
      if (folder.boolean) {
        folders.push(file);

        stack.data.push({
          file,
          parent,
          type: "folder",
          iterationCount,
        });
      } else {
        files.push(file);

        stack.data.push({
          file,
          parent,
          type: "file",
          iterationCount,
        });
      }

      if (folder.files && folder.files.length) {
        inputToStack(folder.files, folder.folderName);
      }
    }
    stack.maxIterationCount = iterationCount;
  };
  inputToStack(rootFiles);

  try {
    const arrayFromMaxIterationCount = new Array(stack.maxIterationCount);
    for (let i = 0; i < arrayFromMaxIterationCount.length; i++) {
      stack.data.forEach(({ file, iterationCount, type, parent }) => {
        const rootOutputDirPath = path.join(
          rootPath,
          inputPathToBuild,
          inputFilenameForBuild
        );

        fs.mkdir(rootOutputDirPath, { recursive: true }, () => {
          if (type === "file" && iterationCount === i + 1) {
            const outputFilePath = parent
              ? path.join(rootOutputDirPath, parent)
              : rootOutputDirPath;

            const inputTemplateFilePath = parent
              ? path.join(absolutePathToTemplate, parent, file)
              : path.join(absolutePathToTemplate, file);

            single({
              mode: ModeEnum.MULTIPLE,
              inputFilenameForBuild,
              inputPathToBuild: outputFilePath,
              absolutePathToTemplate: inputTemplateFilePath,
            });
          }

          if (type === "folder") {
            fs.mkdir(path.join(rootOutputDirPath, file), () => {});
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};
