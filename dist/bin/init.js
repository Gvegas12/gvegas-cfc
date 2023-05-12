"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const welcome = require("cli-welcome");
const unhandled = require("cli-handle-unhandled");
const pkg = require("../package.json");
module.exports = ({ clear = true }) => {
    unhandled();
    welcome({
        title: pkg.name,
        tagLine: `by ${pkg.author.name}`,
        description: pkg.description,
        version: pkg.version,
        bgColor: "#36BB09",
        color: "#000000",
        bold: true,
        clear,
    });
};
