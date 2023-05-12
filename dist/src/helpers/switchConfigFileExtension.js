"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const js_yaml_1 = __importDefault(require("js-yaml"));
exports.default = (configFileName) => {
    // const extension = configFileName.slice(11);
    return js_yaml_1.default.load(fs_1.default.readFileSync(configFileName, "utf8"));
    // switch (extension) {
    //   case "yml" || "yaml": {
    //     console.log(configFileName);
    //     return yaml.load(fs.readFileSync(configFileName, "utf8"));
    //   }
    //   case "js" || "ts": {
    //     console.log(configFileName);
    //   }
    //   case "json": {
    //     console.log(configFileName);
    //   }
    //   default: {
    //     console.log("default", configFileName);
    //   }
    // }
};
