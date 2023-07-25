//o router faz as rotas para os verbos http e linca eles com os metodos criados no controler.

import express from "express";
import ItemController from "../controllers/ItensController.js";


const router = express.Router();

router
  .get("/item", ItemController.listarItens)
  .get("/item/busca", ItemController.filtrarItem)
  .get("/item/pagina", ItemController.itensPorVez)
  .put("/item/:id", ItemController.atualizarItem)
  .get("/item/:id", ItemController.pegarItemPorId)
  .delete("/item/:id", ItemController.deletarItemPorId)
  .post("/item", ItemController.cadastrarItem);

export default router;