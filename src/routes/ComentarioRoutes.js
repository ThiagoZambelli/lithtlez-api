import { Router } from "express";
import ComentarioController from "../controllers/ComentarioController.js";

const router = Router();

router
  .post("/comentario", ComentarioController.setComentario)
  .patch("/comentario", ComentarioController.deletComentario);

export default router;
