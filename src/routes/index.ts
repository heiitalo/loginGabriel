import { Router } from "express";
import { empresaRoute } from "./Empresa.routes";

const router = Router();

router.use("/empresas", empresaRoute);

export { router };
