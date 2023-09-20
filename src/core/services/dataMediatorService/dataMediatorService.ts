import { resolve } from "path";
import { readdirSync } from "fs";
import { FileRepository, ConfigFileRepository } from "@/core/repositories";
import { CONFIG_FILENAME_REGEXP } from "@/core/entities";

export class DataMediatorService {
  constructor(
    private readonly fileRepository: FileRepository,
    private readonly configFileRepository: ConfigFileRepository
  ) {}

  start() {
    //
  }
}
