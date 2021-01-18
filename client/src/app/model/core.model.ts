export interface ICoupon {
  id: string;
  code: string;
  type: CouponType;
}

export interface IFileUpload {
  file: File;
  isValidSize?: boolean;
  isValidType?: boolean;
}

export enum CouponType {
  SEQ_NUM = 'numbers',
  RANDOM_CHARS = 'chars',
}

export enum FileUploadType {
  JSON = 'text/json',
}
