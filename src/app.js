/* eslint-disable no-unused-vars */
// o app fica responsavel por abrir a conexão com o banco e mandar as chamadas do app para o roteador 

import express from "express";
import db from "./config/dbItensConect.js";
import routes from "./routes/index.js";
import cors from "cors";
import tratamentoDeErros from "./middlewares/tratamentoDeErros.js";
import manipulador404 from "./middlewares/manipulador404.js";


db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", ()=>{
  console.log("Conexão realizada com sucesso");
});

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));

routes(app);

app.use(manipulador404);

app.use(tratamentoDeErros);






export default app;