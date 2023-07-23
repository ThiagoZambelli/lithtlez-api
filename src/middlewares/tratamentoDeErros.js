/* eslint-disable no-unused-vars */
import mongoose from "mongoose";

function tratamentoDeErros (erro, req, res, next) {
  console.log(erro);
  if(erro instanceof mongoose.Error.CastError) {
    res.status(400).send({menssage: "Um ou mais dados fornecidos estão incompativeis"});
  } else{
    res.status(500).send({menssage: "Erro interno do servidor"});
  }
}
export default tratamentoDeErros;