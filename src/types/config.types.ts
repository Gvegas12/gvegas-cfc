export enum ModeEnum {
  SINGLE = "single",
  MULTIPLE = "multiple",
}

export type ConfigReplaceOption =
  | {
      filename: boolean;
    }
  | string;

export interface IConfig {
  [template: string]: {
    mode: ModeEnum;
    path: string;
    replace: ConfigReplaceOption;
  };
}
