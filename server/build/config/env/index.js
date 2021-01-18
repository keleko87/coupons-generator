"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const NODE_ENV = process.env.NODE_ENV || "development";
const development = {
    port: process.env.PORT || 3000,
};
const production = {
    port: process.env.PORT || 3000,
};
const test = {
    port: process.env.PORT || 3000,
};
const config = {
    test,
    development,
    production,
};
exports.default = config[NODE_ENV];
//# sourceMappingURL=index.js.map