"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Middleware = require("../middleware/middleware");
const Routes = require("../../routes");
const app = express();
Middleware.configure(app);
Routes.init(app);
Middleware.initErrorHandler(app);
app.set("port", process.env.PORT || 3000);
exports.default = app;
//# sourceMappingURL=server.js.map