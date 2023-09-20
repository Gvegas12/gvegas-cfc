import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";

import { FileModel } from "@/core/entities";
import { FileRepository } from "@/core/repositories";

const replaceTemplate = (filename: string, replace: string) => {
  return filename.replace(/Template/gim, replace);
};

export class FileService implements FileRepository {
  create(
    pathToTemplate: string,
    pathToOutput: string,
    outputFilename: string
  ): void {
    const outputPath = join(pathToOutput, outputFilename);

    if (!this.getFilenameData(outputFilename).extension) {
      mkdirSync(outputPath, { recursive: true });
    }

    this.createNestedFiles(pathToTemplate, outputPath, outputFilename);
  }

  getByName(filenameWithExtension: FileModel["name"]): FileModel {
    const content = readFileSync(filenameWithExtension, "utf8");

    const filenameData = this.getFilenameData(filenameWithExtension);

    return {
      content,
      ...filenameData,
    };
  }

  getFilenameData(path: string) {
    const execResult = /\.[^.]+$/.exec(path);

    let name: string, extension: string | undefined;

    if (execResult) {
      extension = execResult[0];
      name = execResult.input.split(extension)[0];
    } else {
      name = path;
    }

    return {
      name,
      extension,
    };
  }

  private createNestedFiles(
    pathToTemplate: string,
    pathToOutput: string,
    outputFilename: string
  ) {
    mkdirSync(pathToOutput, { recursive: true });

    readdirSync(pathToTemplate).forEach((name) => {
      const rootFilenameData = this.getFilenameData(name);
      const currentPathToOutput = join(
        pathToOutput,
        replaceTemplate(name, outputFilename)
      );
      const currentPathToTemplate = join(pathToTemplate, name);

      if (rootFilenameData.extension) {
        const content = readFileSync(currentPathToTemplate, "utf-8");

        writeFileSync(
          currentPathToOutput,
          replaceTemplate(content, outputFilename)
        );
      } else {
        mkdirSync(currentPathToOutput, { recursive: true });

        this.createNestedFiles(
          currentPathToTemplate,
          currentPathToOutput,
          outputFilename
        );
      }
    });
  }
}
