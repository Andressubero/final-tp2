import { Router } from "express";
import Controller from "../controllers/JuegoController.js";

const juegoRoutes = Router();

const controller = new Controller();

juegoRoutes.get("/", controller.getAll);
juegoRoutes.post("/", controller.create);

export default juegoRoutes;
