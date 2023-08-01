import express from "express";
import ItensRoutes from "./ItensRoutes.js";
import UsersRoutes from "./UserRoutes.js";
import AuthRoutes from "./AuthRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Conectado com Banco");
  }),
  app.use(
    express.json(),
    ItensRoutes,
    UsersRoutes,
    AuthRoutes     
  );
};

export default routes;