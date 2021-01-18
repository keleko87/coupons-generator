import { IFileConfigModel, ICouponModel } from "./model";

export interface IGeneratorService {
  extractContentFile(file: string): Promise<IFileConfigModel>;
  createCoupons(config: IFileConfigModel): Promise<ICouponModel[]>;
}
