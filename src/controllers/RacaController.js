import {Raca} from "../models/index.js";

class RacaController {
  static listaRacas = async (req, res, next) => {
    try{
      const lista = await Raca.find();
      res.status(200).json(lista);
    }
    catch(err){
      next(err);
    }
  };
  static pegaRacaPorId = async (req, res,next) => {
    const id = req.params.id;
    try{
      const raca = await Raca.findById(id);

      if(!raca){
        res.status(200).send({message:"ID não encontrado"});
      }
      res.status(200).json(raca);
    }
    catch(err){
      next(err);
    }
  };
  static salvaRaca = async (req, res,next) => {
    let raca = new Raca(req.body);
    try{
      await raca.save();
      res.status(201).send({menssage: "Cadastrado com sucesso!"});
    }
    catch(err){
      next(err);
    }
  };
}

export default RacaController;