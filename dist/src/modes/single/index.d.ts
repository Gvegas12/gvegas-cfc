import { ModeEnum } from "../../types/config.types";
import type { InputType } from "../../types/input.types";
interface ISingleProps extends Pick<InputType, "inputFilenameForBuild" | "inputPathToBuild"> {
    absolutePathToTemplate: string;
    mode?: ModeEnum;
}
export declare const single: ({ inputPathToBuild, inputFilenameForBuild, absolutePathToTemplate, mode, }: ISingleProps) => void;
export {};
