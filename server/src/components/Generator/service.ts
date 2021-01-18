import { IFileConfigModel, ICouponModel, CouponType } from "./model";
import { IGeneratorService } from "./interface";
import Utils from "./utils";

const path = require("path");
const fs = require("fs");

const GeneratorService: IGeneratorService = {
  async extractContentFile(filename: string): Promise<IFileConfigModel> {
    const jsonPath = path.join(
      __dirname,
      "../../..",
      "public",
      "uploads",
      filename
    );

    const rawData = fs.readFileSync(jsonPath, "utf8");
    let fileConfig = JSON.parse(rawData);

    return fileConfig;
  },

  async createCoupons(config: IFileConfigModel): Promise<ICouponModel[]> {
    switch (config.type) {
      case CouponType.SEQ_NUM:
        return Utils.generateNumSeqCodes(config.amount);
      case CouponType.RANDOM_CHARS:
        return Utils.generateCharCodes(config.amount);
    }
  },
};

export default GeneratorService;
