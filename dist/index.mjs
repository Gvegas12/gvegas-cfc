#!/usr/bin/env node
import { join, /* resolve */ } from "path";
import { Command } from "commander";
import { FileService, /* ConfigFileService */ } from "./src/core/services/index.js";
import * as p from "./package.json" with { type: "json" };
const commander = new Command();
commander.version(p.default.version).description("template file creator.");
commander
    .command("create <name>")
    .requiredOption("-t, --template <path | base_template_name>", "Template name.")
    .requiredOption("-o, --output <path>", "Output path.")
    .alias("c")
    .description("Create files.")
    .action(async (name, { output, template }) => {
    console.log({
        name,
        output,
        template: join(template),
    });
    // teminal: node dist/index.mjs create -t UITemplate -o ./ UITest
    new FileService().create(join(template), output, name);
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
