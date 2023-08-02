import { Antecedentes } from "../models/index.js";

class AntecedentesController {
  static listaAntecedentes = async (req, resn, next) => {
    try {
      const lista = await Antecedentes.find();
      resn.status(200).json(lista);
    }
    catch (err) {
      next(err);
    }
  };
  static cadastra = async(req, res, next) => {
    let antecedente = new Antecedentes(req.body);
    try{
      await antecedente.save();
      res.status(201).send({message:"Cadastro realizado com sucesso"});
    }
    catch(err){
      next(err);
    }
  };
  static pegaPorId = async (req, res, next) => {
    const id = req.params.id;
    try{
      const antecedente = await Antecedentes.findById(id);
      if(!antecedente){
        res.status(206).send({message:"ID não encontrado"});
      }
      res.status(200).json(antecedente);
    }
    catch(err){
      next(err);
    }
  };
}

export default AntecedentesController;