import { Router } from "express";
import VentaController from "../controllers/VentaController.js";

const ventasRoutes = Router();

const controller = new VentaController();

ventasRoutes.get("/", controller.getAll);
ventasRoutes.post("/", controller.create);


export default ventasRoutes;
