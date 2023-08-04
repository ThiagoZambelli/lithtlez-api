import express from "express";
import ItensRoutes from "./ItensRoutes.js";
import UsersRoutes from "./UserRoutes.js";
import AuthRoutes from "./AuthRoutes.js";
import RacaRoutes from "./RacasRoutes.js";
import ClasseRouter from "./ClasseRoutes.js";
import AntecedentesRoutes from "./AntecedentesRoutes.js";
import PersonagemRoutes from "./PersonagemRoutes.js";

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
    PersonagemRoutes
  );
};

export default routes;