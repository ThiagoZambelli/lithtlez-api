import { Router } from "express";
import RacaController from "../controllers/RacaController.js";
const route = Router();

route
  .get("/raca", RacaController.listaRacas)
  .get("raca/:id", RacaController.pegaRacaPorId)
  .post("/raca", RacaController.salvaRaca);

export default route;