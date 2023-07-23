import express from "express";
import ItensRoutes from "./ItensRoutes.js";
import UsersRoutes from "./UserRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Conectado com Banco");
  }),
  app.use(
    express.json(),
    ItensRoutes,
    UsersRoutes        
  );
};

export default routes;