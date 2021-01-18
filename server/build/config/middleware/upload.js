"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./public/uploads");
    },
    filename: (req, file, callback) => {
        const fileName = `${file.fieldname}-${Date.now()}_${file.originalname}`;
        callback(null, fileName);
    },
});
exports.upload = multer({ storage });
//# sourceMappingURL=upload.js.map