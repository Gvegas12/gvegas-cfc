const meow = require("meow");
const meowHelp = require("cli-meow-help");
const pkg = require("../package.json");

const flags = {
  clear: {
    type: "boolean",
    default: true,
    alias: "c",
    desc: "Clear the console",
  },
  version: {
    alias: "v",
    desc: "Print CLI version",
  },
  help: {
    desc: "Show help",
  },
  create: {
    alias: "c",
    desc: "Create template file.",
  },
};

const helpText = meowHelp({
  name: pkg.name,
  flags,
  defaults: false,
});

const options = {
  flags,
};

module.exports = meow(helpText, options);
