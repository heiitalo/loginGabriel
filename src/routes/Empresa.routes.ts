import { EmpresaController } from "../controllers/Empresa.controller";
import { Router } from "express";

const empresaRoute = Router();
const empresaController = new EmpresaController();

empresaRoute.post("/", empresaController.create);
empresaRoute.get("/", empresaController.findAll);
empresaRoute.get("/:id", empresaController.findById);
empresaRoute.patch("/:id", empresaController.update);

export { empresaRoute };
