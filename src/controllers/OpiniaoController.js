import { Opiniao } from "../models/index.js";

class OpiniaoController {
  static enviar = async (req, res, next) => {
    const novaOpiniao = new Opiniao(req.body);
    try {
      await novaOpiniao.save();
      res.status(201).json({ message: "Opinião salva" });
    } catch (err) {
      next(err);
    }
  };
}

export default OpiniaoController;
