import { InputType } from "../../types/input.types";
interface IMultipleProps extends Pick<InputType, "inputFilenameForBuild" | "inputPathToBuild"> {
    absolutePathToTemplate: string;
    rootPath: string;
}
export declare const multiple: ({ rootPath, inputPathToBuild, inputFilenameForBuild, absolutePathToTemplate, }: IMultipleProps) => void;
export {};
