/* eslint-disable import/no-extraneous-dependencies */
import { IConfig } from "../types/config.types";
import fs from "fs";
import yaml from "js-yaml";

export default (configFileName: string): IConfig => {
  // const extension = configFileName.slice(11);

  return yaml.load(fs.readFileSync(configFileName, "utf8")) as IConfig;
  // switch (extension) {
  //   case "yml" || "yaml": {
  //     console.log(configFileName);
  //     return yaml.load(fs.readFileSync(configFileName, "utf8"));
  //   }
  //   case "js" || "ts": {
  //     console.log(configFileName);
  //   }
  //   case "json": {
  //     console.log(configFileName);
  //   }
  //   default: {
  //     console.log("default", configFileName);
  //   }
  // }
};
