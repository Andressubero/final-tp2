import { Router } from "express";
import Controller from "../controllers/Controller.js";

const appRoutes = Router();

const controller = new Controller();

appRoutes.get("/", controller.getAll);
appRoutes.get("/:id", controller.getById);
appRoutes.post("/", controller.create);
appRoutes.put("/:id", controller.update);
appRoutes.delete("/:id", controller.delete);

export default appRoutes;
