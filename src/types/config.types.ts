// export enum ModeEnum {
//   SINGLE = "single",
//   MULTIPLE = "multiple",
// }

// export type ConfigReplaceOption =
//   | {
//       filename: boolean;
//     }
//   | string;

export enum AvailableConfigExtensionsEnum {
  JS = "js",
  TS = "ts",
  YML = "yml",
  YAML = "yaml",
  JSON = "json",
}

export interface IConfig {
  [template: string]: {
    path: string;
    // mode: ModeEnum;
    // replace: ConfigReplaceOption;
  };
}
