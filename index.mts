#!/usr/bin/env node

import { join } from "path";
import { Command } from "commander";
import { FileService } from "@/services/index.js";
import * as p from "./package.json" assert { type: "json" };

const commander = new Command();

commander.version(p.default.version).description("template file creator.");

interface ICreateCommandOptions {
  template: string;
  output: string;
}

const DEFAULT_TEMPLATES_FOLDER_NAME = "templates";

commander
  .command("create <name>")
  .requiredOption(
    "-t, --template <path | base_template_name>",
    "Template name."
  )
  .requiredOption("-o, --output <path>", "Output path.")
  .alias("c")
  .description("Create files.")
  .action((name: string, { output, template }: ICreateCommandOptions) => {
    new FileService().create(
      join(DEFAULT_TEMPLATES_FOLDER_NAME, template),
      output,
      name
    );
  });

commander.parse(process.argv);

// import chalk from "chalk";
// import { createPromptModule } from "inquirer";
// const prompt = createPromptModule();
// const { red, green, grey, bgBlue } = chalk;

// commander
//   .command("all")
//   .alias("a")
//   .description("Show all configuration files.")
//   .action(() => {
//     const files = readdirSync("templates");
//     const fserv = new FileService();
//     fserv.create("templates", "output", "TestFi");

//     let data = "";
//     for (let file of files) data += `${file} \n`;

//     console.log(
//       grey(`\nConfiguration files: \n\n${data}`),
//       bgBlue("asdasdasdas")
//     );
//   });

// commander
//   .command("init")
//   .alias("c")
//   .description("Create new configuration file and create folder with templates.")
//   .action((name, cmd) => {
//      prompt([
//        {
//          type: "input",
//          name: "max_ram_usage",
//          message: "Max RAM usage, Mb: ",
//        },
//      ]).then((options) => {
//        console.log(
//          green(`\nFile "${name}.${cmd.extension || "cfg"}" created.`)
//        );
//      });
//   });
