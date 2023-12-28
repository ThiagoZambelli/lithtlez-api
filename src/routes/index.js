import express from "express";
import ItensRoutes from "./ItensRoutes.js";
import UsersRoutes from "./UserRoutes.js";
import AuthRoutes from "./AuthRoutes.js";
import RacaRoutes from "./RacasRoutes.js";
import ClasseRouter from "./ClasseRoutes.js";
import AntecedentesRoutes from "./AntecedentesRoutes.js";
import PersonagemRoutes from "./PersonagemRoutes.js";
import NewRouter from "./NewRouters.js";
import ContosRouter from "./ContosRoutes.js";
import ComentarioRouter from "./ComentarioRoutes.js";
import OpinioesRoutes from "./OpinioesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Conectado com Banco");
  }),
  app.use(
    express.json(),
    ItensRoutes,
    UsersRoutes,
    AuthRoutes,
    RacaRoutes,
    ClasseRouter,
    AntecedentesRoutes,
    PersonagemRoutes,
    NewRouter,
    ContosRouter,
    ComentarioRouter,
    OpinioesRoutes
  );
};

export default routes;