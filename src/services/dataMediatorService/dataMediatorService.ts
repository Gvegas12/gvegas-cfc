import { resolve } from "path";
import { readdirSync } from "fs";
import { FileRepository, ConfigFileRepository } from "@/repositories";
import { CONFIG_FILENAME_REGEXP } from "@/entities";

export class DataMediatorService {
  constructor(
    private readonly fileRepository: FileRepository,
    private readonly configFileRepository: ConfigFileRepository
  ) {}

  // private getConfigFile() {
  //   const filesFromRootPath = readdirSync(resolve(__dirname));
  //   const configFileOfAnyExtension = filesFromRootPath.filter(
  //     ConfigFileNameRegExp.exec
  //   );



  //   return configFileOfAnyExtension;
  // }

  getData() {
    
  }
}
