import fs from "fs";
import path from "path";
import type { ModeParams } from "../types";
import singleMode from "../single";
import getFilenameData from "../../helpers/getFilenameData";

// TODO
const multipleMode = ({
  pathToTemplate,
  replaceOption,
  inputFileNameForBuild,
  inputPathToBuild,
}: ModeParams) => {
  // const templateDir = fs.readdirSync(path.resolve(pathToTemplate), {
  //   withFileTypes: true,
  // });
  // const pathToNewDir = path.join(inputPathToBuild, inputFileNameForBuild);
  // const checkDir = (dirFiles: fs.Dirent[]) => {
  //   const dirs = [];
  //   const files = [];
  //   for (const file of dirFiles) {
  //     if (file.isDirectory()) {
  //       dirs.push(file);
  //     } else {
  //       files.push(file);
  //     }
  //   }
  //   return {
  //     dirs,
  //     files,
  //   };
  // };
  // const createFiles = (
  //   files: fs.Dirent[],
  //   dirName: string,
  //   pathToTemplate: string,
  //   inputPathToBuild: string
  // ) => {
  //   files.forEach((file) => {
  //     const pathTmp = path.join(pathToTemplate, file.name);
  //     const { filename, fileExtension } = getFilenameData(pathTmp);
  //     const templateFile = fs.readFileSync(pathTmp, "utf-8");
  //     let outputFilename: string;
  //     if (
  //       typeof replaceOption === "object" &&
  //       replaceOption.filename === false
  //     ) {
  //       outputFilename = filename;
  //     } else {
  //       outputFilename = inputFileNameForBuild;
  //     }
  //     console.log(
  //       "inputPathToBuild, dirName,",
  //       path.resolve(
  //         inputPathToBuild,
  //         dirName,
  //         `${outputFilename}.${fileExtension}`
  //       )
  //     );
  //     fs.writeFileSync(
  //       path.resolve(inputPathToBuild, `${outputFilename}.${fileExtension}`),
  //       templateFile.replaceAll(filename, inputFileNameForBuild),
  //       { encoding: "utf-8" }
  //     );
  //   });
  // };
  // try {
  //   fs.mkdirSync(pathToNewDir);
  // } catch (e) {
  //   console.log("err", e);
  // }
  // const recursiveCheckDir = (
  //   dirFiles: fs.Dirent[],
  //   dirName: string,
  //   pathToTemplate: string,
  //   inputPathToBuild: string
  // ) => {
  //   const { dirs, files } = checkDir(dirFiles);
  //   if (files.length) {
  //     createFiles(files, dirName, pathToTemplate, inputPathToBuild);
  //   }
  //   if (dirs.length) {
  //     dirs.forEach((dir) => {
  //       const pathTmp = path.resolve(pathToTemplate, dir.name);
  //       console.log("[dirs.forEach]", pathTmp);
  //       const pathDir = path.resolve(inputPathToBuild, dirName, dir.name);
  //       console.log("pathDirpathDir", pathDir);
  //       const dirFiles = fs.readdirSync(pathTmp, {
  //         withFileTypes: true,
  //       });
  //       recursiveCheckDir(dirFiles, dir.name, pathTmp, pathDir);
  //     });
  //   }
  // };
  // recursiveCheckDir(
  //   templateDir,
  //   pathToNewDir,
  //   pathToTemplate,
  //   inputPathToBuild
  // );
};

export default multipleMode;
