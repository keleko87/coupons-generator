"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const FileConfigService = {
    uploadFile(file) {
        return __awaiter(this, void 0, void 0, function* () { });
    },
    extractContentFile(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonPath = path.join(__dirname, "../../..", "public", "uploads", filename);
            const rawData = fs.readFileSync(jsonPath, "utf8");
            let fileConfig = JSON.parse(rawData);
            return fileConfig;
        });
    },
};
exports.default = FileConfigService;
//# sourceMappingURL=service.js.map