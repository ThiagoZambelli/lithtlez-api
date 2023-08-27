import { Router } from "express";
import NewsController from "../controllers/NewsController.js";

const router = Router();

router
  .get("/new", NewsController.listaNews)
  .post("/new", NewsController.cadastraNew);

export default router;