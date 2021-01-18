import { Request, Response } from "express";
import { IFileConfigModel, ICouponModel } from "./model";
import GeneratorService from "./service";

export interface MulterRequest extends Request {
  file: any;
}

export async function generateCoupons(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const request = req as MulterRequest;

    // 1 Read uploaded File
    const config: IFileConfigModel = await GeneratorService.extractContentFile(
      request.file.filename
    );

    if (!config) {
      res.json({
        status: 400,
        message: "Error en el contenido del archivo cargado!",
      });
    }

    // 2 Generate coupons list
    const couponsList: ICouponModel[] = await GeneratorService.createCoupons(
      config
    );

    res.status(200).json(couponsList);
  } catch (error) {
    res.json(error);
  }
}
