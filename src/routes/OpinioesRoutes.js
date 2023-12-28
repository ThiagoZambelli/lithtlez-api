import { Router } from "express";
import OpiniaoController from "../controllers/OpiniaoController.js";

const router = Router();

router  
  .post("/opiniao", OpiniaoController.enviar);

export default router;