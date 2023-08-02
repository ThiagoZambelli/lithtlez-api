import { Classe } from "../models/index.js";

class ClasseController {
  static listaClasses = async (req, res, next) => {
    try {
      const lista = await Classe.find();
      res.status(200).json(lista);
    }
    catch (err) {
      next(err);
    }
  };
  static pegaPorId = async (req, res, next) => {
    const id = req.params.id;
    try {
      const classe = await Classe.findById(id);
      if (!classe) {
        res.status(206).send({ message: "ID não encontrado!" });
      }
      res.status(200).json(classe);
    }    
    catch(err) {
      next(err);
    }
  };
  static cadastraClasse = async (req, res, next) => {
    let novaClasse = new Classe(req.body);
    try {
      await novaClasse.save();
      res.status(201).send({ message: "Cadastrado com sucesso" });
    }
    catch (err) {
      next(err);
    }
  };
}

export default ClasseController;