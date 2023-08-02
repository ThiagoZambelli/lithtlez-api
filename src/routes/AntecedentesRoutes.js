import { Router } from "express";
import AntecedentesController from "../controllers/AntecedentesController.js";

const router = Router();

router
  .get("/antecedente", AntecedentesController.listaAntecedentes)
  .get("/antecedente/:id", AntecedentesController.pegaPorId)
  .post("/antecedente", AntecedentesController.cadastra);

export default router;