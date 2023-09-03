import { New } from "../models/index.js";

class NewController {
  static listaNews = async (req, res, next) => {
    try {
      const lista = await New.find().sort({ nome: -1 });
      res.status(200).json(lista);
    }
    catch (err) {
      next(err);
    }
  };
  static cadastraNew = async (req, res, next) => {
    const noticia = new New(req.body);
    try {
      await noticia.save();
      res.status(201).send({menssage: "Noticia cadastrada"});
    }
    catch (err) {
      next(err);
    }
  };
}

export default NewController;