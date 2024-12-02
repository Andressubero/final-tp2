import { Router } from "express";
import ventasRoutes from "./ventasRoutes.js";
import juegoRoutes from "./juegoRoutes.js";

const routes = Router();

routes.use("/ventas", ventasRoutes);
routes.use("/juegos", juegoRoutes);

export default routes;