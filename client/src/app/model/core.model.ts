export enum FileUploadType {
  JSON = 'application/json',
}

export interface CustomFileUpload {
  file: File;
  isValidSize?: boolean;
  isValidType?: boolean;
}
