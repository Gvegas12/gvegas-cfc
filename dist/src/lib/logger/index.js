"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_alerts_1 = __importDefault(require("cli-alerts"));
exports.default = ({ name, message, type = "error" }) => {
    (0, cli_alerts_1.default)({
        type,
        name,
        msg: message,
    });
};
