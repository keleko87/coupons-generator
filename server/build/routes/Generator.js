"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../components");
const express_1 = require("express");
const upload_1 = require("../config/middleware/upload");
const router = express_1.Router();
router.post("/", upload_1.upload.single("file"), components_1.GeneratorComponent.generateCoupons);
exports.default = router;
//# sourceMappingURL=Generator.js.map