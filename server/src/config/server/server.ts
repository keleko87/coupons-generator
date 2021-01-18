import * as express from "express";
import * as Middleware from "../middleware/middleware";
import * as Routes from "../../routes";

const app: express.Application = express();

Middleware.configure(app);
Routes.init(app);
Middleware.initErrorHandler(app);

app.set("port", process.env.PORT || 3000);

export default app;
