import type { ConfigReplaceOption, IConfig } from "../types/config.types";
import type { InputType } from "../types/input.types";

export interface ModeParams extends Omit<InputType, "inputTemplateName"> {
  pathToTemplate: string;
  replaceOption: ConfigReplaceOption;
}
