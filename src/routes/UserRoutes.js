import { Router } from "express";
import UserController from "../controllers/UserController.js";
import validacaoDeToken from "../middlewares/validacaoDeToken.js";

const router = Router();

router
  .get("/user", UserController.validarUser)
  .get("/contosFavoritos", validacaoDeToken, UserController.favoritosContos)
  .get("/meuPerfil", validacaoDeToken, UserController.meuPerfil)
  .get("/listaContosFavoritos", validacaoDeToken, UserController.listaContosFavoritos)
  .patch("/favoritarConto", validacaoDeToken, UserController.favoritarConto)
  .post("/user", UserController.cadastrarUser);

export default router;
