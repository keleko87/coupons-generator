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
const service_1 = require("./service");
const service_2 = require("../FileConfig/service");
function generateCoupons(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const request = req;
            // 1 Read uploaded File
            const config = yield service_2.default.extractContentFile(request.file.filename);
            if (!config) {
                res.json({
                    status: 400,
                    message: "Error en el contenido del archivo cargado!",
                });
            }
            // 2 Generate coupons list
            const couponsList = yield service_1.default.createCoupons(config);
            res.status(200).json(couponsList);
        }
        catch (error) {
            res.json(error);
        }
    });
}
exports.generateCoupons = generateCoupons;
//# sourceMappingURL=index.js.map