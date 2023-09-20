import { IConfigFileOptions } from "../../../core/entities";
export interface ConfigFileRepository {
    getOptions(): Promise<IConfigFileOptions | undefined>;
}
