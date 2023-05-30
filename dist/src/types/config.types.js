"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailableConfigExtensionsEnum = exports.ModeEnum = void 0;
var ModeEnum;
(function (ModeEnum) {
    ModeEnum["SINGLE"] = "single";
    ModeEnum["MULTIPLE"] = "multiple";
})(ModeEnum = exports.ModeEnum || (exports.ModeEnum = {}));
var AvailableConfigExtensionsEnum;
(function (AvailableConfigExtensionsEnum) {
    AvailableConfigExtensionsEnum["JS"] = "js";
    // TS = "ts",
    AvailableConfigExtensionsEnum["YML"] = "yml";
    AvailableConfigExtensionsEnum["YAML"] = "yaml";
    AvailableConfigExtensionsEnum["JSON"] = "json";
})(AvailableConfigExtensionsEnum = exports.AvailableConfigExtensionsEnum || (exports.AvailableConfigExtensionsEnum = {}));
// export type ConfigReplaceOption =
//   | {
//       filename: boolean;
//     }
//   | string;
