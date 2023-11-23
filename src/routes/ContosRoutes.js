import { Router } from "express";
import ContosController from "../controllers/ContosController.js";
import validacaoDeToken from "../middlewares/validacaoDeToken.js";

const router = Router();

router
  .get("/contos", ContosController.listaContos)
  .get("/conto/:id", ContosController.pegaPorId)
  .post("/conto/:id", ContosController.novoCapitulo)
  .patch("/likeConto/:id", validacaoDeToken, ContosController.likeConto)
  .post("/conto", ContosController.salvaConto);

export default router;