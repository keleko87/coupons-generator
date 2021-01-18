import * as crypto from "crypto";
import { CouponType, ICouponModel } from "./model";

const fs = require("fs");

class GenerateUtils {
  constructor() {}

  // ALGORITMO A: Códigos secuencia de números
  async generateNumSeqCodes(
    amount: number,
    totalDigits = 6
  ): Promise<ICouponModel[]> {
    let result: ICouponModel[] = [];

    for (var i = 1; i <= amount; i++) {
      const code = this.setNumCodeTemplate(i, totalDigits);
      const id: string = crypto.createHash("md5").update(code).digest("hex");

      result.push({
        id,
        code,
        type: CouponType.SEQ_NUM,
      });
    }

    return result;
  }

  // ALGORITMO B: Códigos aleatorios de letras y números
  async generateCharCodes(amount: number): Promise<ICouponModel[]> {
    let result: ICouponModel[] = [];

    for (var i = 1; i <= amount; i++) {
      const code = this.setCharCode();
      const id: string = crypto.createHash("md5").update(code).digest("hex");

      result.push({
        id,
        code,
        type: CouponType.RANDOM_CHARS,
      });
    }

    return result;
  }

  // Construir la temaple con el numero correspondiente Ej: totalDigits = 4 --> '0001'
  setNumCodeTemplate(num: number, totalDigits: number): string {
    let zeros = "";
    const numLength = String(num).length;

    for (var i = 0; i < totalDigits - numLength; i++) {
      zeros = zeros + "0";
    }

    return zeros + num; // Concatenamos el string de "zeros" con con el "Num" (el cual es de tipo number) obteniendo string => '0001'
  }

  // Generar un código de carácteres aleatorios
  setCharCode(codeCharslength = 6): string {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Como mejora se podría añadir este valor como parámentro del método.
    const charactersLength = characters.length;

    for (var i = 0; i < codeCharslength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}

export default new GenerateUtils();
