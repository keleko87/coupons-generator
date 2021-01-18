export interface IFileConfigModel {
  amount: number;
  type: CouponType;
}

export interface IGeneratorModel {
  config: IFileConfigModel;
}

export interface ICouponModel {
  id: string;
  code: string;
  type: CouponType;
}

export enum CouponType {
  SEQ_NUM = "numbers",
  RANDOM_CHARS = "chars",
}
