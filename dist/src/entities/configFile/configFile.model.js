"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigFileModel = exports.CONFIG_FILENAME_REGEXP = exports.CONFIG_FILENAME = exports.ConfigFileAvailableExtensionsEnum = void 0;
var ConfigFileAvailableExtensionsEnum;
(function (ConfigFileAvailableExtensionsEnum) {
    ConfigFileAvailableExtensionsEnum["JavaScript"] = "js";
    ConfigFileAvailableExtensionsEnum["TypeScript"] = "ts";
    ConfigFileAvailableExtensionsEnum["YML"] = "yml";
    ConfigFileAvailableExtensionsEnum["YAML"] = "yaml";
    ConfigFileAvailableExtensionsEnum["JSON"] = "json";
})(ConfigFileAvailableExtensionsEnum || (exports.ConfigFileAvailableExtensionsEnum = ConfigFileAvailableExtensionsEnum = {}));
exports.CONFIG_FILENAME = "gvegas-cfc.config";
exports.CONFIG_FILENAME_REGEXP = new RegExp(`/^${exports.CONFIG_FILENAME}\.?.+/m`);
class ConfigFileModel {
    name;
    extension;
    options;
    constructor(name, extension, options) {
        this.name = name;
        this.extension = extension;
        this.options = options;
    }
}
exports.ConfigFileModel = ConfigFileModel;
