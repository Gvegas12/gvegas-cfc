#!/usr/bin/env node

/**
 * create-file-cli
 * Create file from Templates
 *
 * @author Gvegas <none>
 */

import init from "./bin/init.js";
import cli from "./bin/cli";
import config from "./src";
// import log from "./bin/log";

const { input } = cli;
const { flags } = cli;
const { clear }: { clear?: boolean } = flags;

const start = () => {
  init({ clear });
  // if (debug) log(flags);
  if (input.includes("--help" || "-h" || "help")) {
    cli.showHelp(0);
  }
  config({
    inputFileNameForBuild: input[2],
    inputPathToBuild: input[1],
    inputTemplateName: input[0],
  });
};

start();
