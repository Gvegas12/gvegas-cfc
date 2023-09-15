import { IConfigFileOptions } from "@/entities";

export interface ConfigFileRepository {
  getOptions(): Promise<IConfigFileOptions | undefined>;
}
