const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req: Request, file: any, callback: Function) => {
    callback(null, "./public/uploads");
  },
  filename: (req: Request, file: any, callback: Function) => {
    const fileName = `${file.fieldname}-${Date.now()}_${file.originalname}`;
    callback(null, fileName);
  },
});

export const upload = multer({ storage });
