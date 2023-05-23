#!/usr/bin/env node
"use strict";
/**
 * create-file-cli
 * Create file from Templates
 *
 * @author Gvegas <none>
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_js_1 = __importDefault(require("./bin/init.js"));
const cli_1 = __importDefault(require("./bin/cli"));
const src_1 = __importDefault(require("./src"));
// import log from "./bin/log";
const { input } = cli_1.default;
const { flags } = cli_1.default;
const { clear } = flags;
const start = () => {
    (0, init_js_1.default)({ clear });
    // if (debug) log(flags);
    if (input.includes("--help" || "-h" || "help")) {
        cli_1.default.showHelp(0);
    }
    (0, src_1.default)({
        inputFilenameForBuild: input[2],
        inputPathToBuild: input[1],
        inputTemplateName: input[0],
    });
};
start();
