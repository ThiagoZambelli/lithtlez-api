import { Router } from "express";
import PersonagemController from "../controllers/PersonagemController.js";
import validacaoDeToken from "../middlewares/validacaoDeToken.js";

const router = Router();

router
  .get("/personagem/:id", PersonagemController.pegaPersonagemId)
  .post("/meusPersonagens",validacaoDeToken, PersonagemController.meusPersonagens)
  .patch("/atualizaAtributo",validacaoDeToken, PersonagemController.atualizaAtributo)
  .patch("/atualizaImg",validacaoDeToken, PersonagemController.atualizaImg)
  .patch("/atualizaPericias",validacaoDeToken, PersonagemController.atualizaPericias)
  .patch("/atualizaPersonagem",validacaoDeToken, PersonagemController.atualizaPersonagem)
  .patch("/deletaPersonagem/:id",validacaoDeToken, PersonagemController.deletarPersonagem)
  .post("/personagem", validacaoDeToken, PersonagemController.cadastraPersonagem);

export default router;