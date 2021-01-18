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
const crypto = require("crypto");
const model_1 = require("../Coupon/model");
const fs = require("fs");
class GenerateUtils {
    constructor() { }
    // ALGORITMO A: Códigos secuencia de números
    generateNumSeqCodes(amount, totalDigits = 6) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            for (var i = 1; i <= amount; i++) {
                const code = this.setNumCodeTemplate(i, totalDigits);
                const id = crypto.createHash("md5").update(code).digest("hex");
                result.push({
                    id,
                    code,
                    type: model_1.CouponType.SEQ_NUM,
                });
            }
            return result;
        });
    }
    // ALGORITMO B: Códigos aleatorios de letras y números
    generateCharCodes(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = [];
            for (var i = 1; i <= amount; i++) {
                const code = this.setCharCode();
                const id = crypto.createHash("md5").update(code).digest("hex");
                result.push({
                    id,
                    code,
                    type: model_1.CouponType.RANDOM_CHARS,
                });
            }
            return result;
        });
    }
    // Construir la temaple con el numero correspondiente Ej: totalDigits = 4 --> '0001'
    setNumCodeTemplate(num, totalDigits) {
        let zeros = "";
        const numLength = String(num).length;
        for (var i = 0; i < totalDigits - numLength; i++) {
            zeros = zeros + "0";
        }
        return zeros + num; // Concatenamos el string de "zeros" con con el "Num" (el cual es de tipo number) obteniendo string => '0001'
    }
    // Generar un código de carácteres aleatorios
    setCharCode(codeCharslength = 6) {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Como mejora se podría añadir este valor como parámentro del método.
        const charactersLength = characters.length;
        for (var i = 0; i < codeCharslength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
exports.default = new GenerateUtils();
//# sourceMappingURL=utils.js.map