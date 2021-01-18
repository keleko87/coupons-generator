"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const Generator_1 = require("./Generator");
/**
 * @export
 * @param {express.Application} app
 */
function init(app) {
    const router = express.Router();
    app.use("/api/create", Generator_1.default);
    app.use((req, res, next) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });
    app.use(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map