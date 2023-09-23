import { Router } from "express";
import ContosController from "../controllers/ContosController.js";

const router = Router();

router
  .get("/contos", ContosController.listaContos)
  .get("/conto/:id", ContosController.pegaPorId)
  .post("/conto/:id", ContosController.novoCapitulo)
  .post("/conto", ContosController.salvaConto);

export default router;