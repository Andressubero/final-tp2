import { Router } from "express";
import appRoutes from "./appRoutes.js";

const routes = Router();

routes.use("/app", appRoutes);

export default routes;