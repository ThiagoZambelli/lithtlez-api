import { Router } from "express";
import ClasseController from "../controllers/ClasseController.js";

const router = Router();

router
  .get("/classe", ClasseController.listaClasses)
  .get("/classe/:id", ClasseController.pegaPorId)
  .post("/classe", ClasseController.cadastraClasse);

export default router;