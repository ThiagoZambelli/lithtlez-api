import { Conto } from "../models/index.js";

class ComentarioController {
  static setComentario = async (req, res, next) => {
    const { nomeUser, idUser, idConto, texto } = req.body;
    const novoComentario = {
      texto: texto,
      nomeUser: nomeUser,
      idUser: idUser,
    };
    try {
      const conto = await Conto.findById(idConto);
      if (!conto) {
        return res.status(404).json({ message: "conto não encontrado" });
      }
      conto.comentarios.push(novoComentario);
      await conto.save();
      return res.status(201).send({ message: "Comentario Cadastrado" });
    } catch (err) {
      next(err);
    }
  };
  
  static deletComentario = async (req, res, next) => {
    const { idConto, idComentario } = req.body;
    try {
      const conto = await Conto.findById(idConto);
      if (!conto) {
        return res.status(404).send({ message: "Conto não encontrado" });
      }
      console.log(idComentario);
      const comentarioIndex = conto.comentarios.findIndex(
        (e) => e._id == idComentario
      );      
      if (comentarioIndex === -1) {
        return res.status(404).send({ message: "Comentario não encontrado" });
      }
      conto.comentarios.splice(comentarioIndex, 1);
      await conto.save();
      return res.status(200).json({ message: "Comentário deletado" });
    } catch (err) {
      next(err);
    }
  };
}

export default ComentarioController;
