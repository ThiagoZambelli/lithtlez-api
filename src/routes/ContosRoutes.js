import { Router } from "express";
import ContosController from "../controllers/ContosController.js";

const router = Router();

router
  .get("/contos", ContosController.listaContos)
  .post("/conto", ContosController.salvaConto);

export default router;