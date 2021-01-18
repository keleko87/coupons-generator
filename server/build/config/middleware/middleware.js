"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const index_1 = require("../error/index");
const sendHttpError_1 = require("../error/sendHttpError");
const path = require("path");
/**
 * @export
 * @param {express.Application} app
 */
function configure(app) {
    // express middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "public")));
    app.use(compression()); // returns the compression middleware
    app.use(helmet()); // helps you secure your Express apps by setting various HTTP headers
    app.use(cors());
    // custom errors
    app.use(sendHttpError_1.sendHttpErrorModule);
    // cors
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS ");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With," +
            " Content-Type, Accept," +
            " Authorization," +
            " Access-Control-Allow-Credentials");
        res.header("Access-Control-Allow-Credentials", "true");
        next();
    });
}
exports.configure = configure;
/**
 * @export
 * @param {express.Application} app
 */
function initErrorHandler(app) {
    app.use((error, req, res, next) => {
        if (typeof error === "number") {
            error = new index_1.HttpError(error); // next(404)
        }
        if (error instanceof index_1.HttpError) {
            res.sendHttpError(error);
        }
        else {
            if (app.get("env") === "development") {
                error = new index_1.HttpError(500, error.message);
                res.sendHttpError(error);
            }
            else {
                error = new index_1.HttpError(500);
                res.sendHttpError(error, error.message);
            }
        }
        console.error(error);
    });
}
exports.initErrorHandler = initErrorHandler;
//# sourceMappingURL=middleware.js.map