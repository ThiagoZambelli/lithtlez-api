import { Personagem, users } from "../models/index.js";

class PersonagemController {
  static pegaPersonagemId = async (req, res, next) => {
    const id = req.params.id;
    try {
      const personagem = await Personagem.findById(id);
      if (!personagem) {
        res.status(200).send({ menssage: "ID não encontrado!" });
      }
      res.status(200).json(personagem);
    }
    catch (err) {
      next(err);
    }
  };

  static cadastraPersonagem = async (req, res, next) => {
    const personagem = new Personagem(req.body);
    const idUser = req.params.idUser;
    try {
      const user = await users.findById(idUser);
      await personagem.save();
      const favoritos = [...user.itensFavoritos,personagem.id];
      await users.findByIdAndUpdate(idUser, { $set: favoritos }, { new: true });
      res.status(201).send({ message: "perssonagem cadastrado!" });
    }
    catch (err) {
      next(err);
    }
  };
}

export default PersonagemController;