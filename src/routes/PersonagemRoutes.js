import { Router } from "express";
import PersonagemController from "../controllers/PersonagemController.js";
import validacaoDeToken from "../middlewares/validacaoDeToken.js";

const router = Router();

router
  .get("/personagem/:id", PersonagemController.pegaPersonagemId)
  .post("/meusPersonagens",validacaoDeToken, PersonagemController.meusPersonagens)
  .post("/personagem", validacaoDeToken, PersonagemController.cadastraPersonagem);

export default router;