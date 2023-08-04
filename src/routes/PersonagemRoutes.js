import { Router } from "express";
import PersonagemController from "../controllers/PersonagemController.js";

const router = Router();

router
  .get("/personagem/:id", PersonagemController.pegaPersonagemId)
  .post("/personagem/:idUser", PersonagemController.cadastraPersonagem);

export default router;