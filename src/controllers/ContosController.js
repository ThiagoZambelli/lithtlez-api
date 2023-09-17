import { Conto } from "../models/index.js";

class ContosController {
  static listaContos = async (req, res, next) => {
    try {
      const lista = await Conto.find();
      res.status(200).json(lista);
    }
    catch (err) {
      next(err);
    }
  };
  static salvaConto = async (req, res, next) => {
    let conto = new Conto(req.body);
    try {
      await conto.save();
      res.status(201).send({ menssage: "Conto Cadastrado" });
    }
    catch (err) {
      next(err);
    }
  };
  static novoCapitulo = async (req, res, next) => {
    const id = req.params.id;
    const {tituloCap, conteudo} = req.body;
    const novoCapitulo = {tituloCap, conteudo};
    try {
      const conto = await Conto.findById(id);
      if (!conto) {
        return res.status(404).json({ message: "Conto não encontrado" });
      }
      conto.capitulos.push(novoCapitulo);
      await conto.save();
      return res.status(201).send({menssage:"Capitulo Cadastrado!"});
    }
    catch (err) {
      next(err);
    }
  };
}


export default ContosController;