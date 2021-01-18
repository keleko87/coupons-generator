import { GeneratorComponent } from "../components";
import { Router } from "express";
import { upload } from "../config/middleware/upload";

const router: Router = Router();

router.post("/", upload.single("file"), GeneratorComponent.generateCoupons);

export default router;
