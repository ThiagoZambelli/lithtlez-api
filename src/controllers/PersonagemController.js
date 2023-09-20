import { Personagem, users } from "../models/index.js";

class PersonagemController {
  static atualizaAtributo = async (req, res, next) => {
    const { atributos, id } = req.body;
    try {
      const personagemAtualizado = await Personagem.findByIdAndUpdate(
        id,
        { atributos },
        { new: true }
      );
      if (!personagemAtualizado) {
        res.status(404).send({ menssage: "Personagem não encontrado" });
      }
      res.status(200).send({ menssage: "Atualizado com sucesso" });
    }
    catch (err) {
      next(err);
    }
  };
  static atualizaPericias = async (req, res, next) => {
    const { pericias, id } = req.body;
    try {
      const personagemAtualizado = await Personagem.findByIdAndUpdate(
        id,
        { pericias },
        { new: true }
      );
      if (!personagemAtualizado) {
        res.status(404).send({ menssage: "Personagem não encontrado" });
      }
      res.status(200).send({ menssage: "Atualizado com sucesso" });
    }
    catch (err) {
      next(err);
    }
  };
  static atualizaPersonagem = async (req, res, next) => {
    const { campo, valor, id } = req.body;
    const mudanca = {};
    mudanca[campo] = valor;
    try {
      const personagemAtualizado = await Personagem.findByIdAndUpdate(
        id,
        mudanca,
        { new: true }
      );
      if (!personagemAtualizado) {
        res.status(404).send({ menssage: "Personagem não encontrado" });
      }
      res.status(200).send({ menssage: "Atualizado com sucesso" });
    }
    catch (err) {
      next(err);
    }
  };
  static atualizaImg = async (req, res, next) => {
    const { img, id } = req.body;
    try {
      const personagemAtualizado = await Personagem.findByIdAndUpdate(
        id,
        { img },
        { new: true }
      );
      if (!personagemAtualizado) {
        res.status(404).send({ menssage: "Personagem não encontrado" });
      }
      res.status(200).send({ menssage: "Atualizado com sucesso" });
    }
    catch (err) {
      next(err);
    }
  };
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
    personagem.atributos = [10, 10, 10, 10, 10, 10];
    const idUser = req.userID;
    try {
      let user = await users.findById(idUser);
      await personagem.save();
      const personagens = { personagens: [...user.personagens, personagem._id] };
      await users.findByIdAndUpdate(idUser, { $set: personagens }, { new: true });
      res.status(201).send({ message: "perssonagem cadastrado!" });
    }
    catch (err) {
      next(err);
    }
  };
  static meusPersonagens = async (req, res, next) => {
    const idUser = req.userID;
    try {
      const personagens = await users.findById(idUser).populate({
        path: "personagens",
        populate: [
          {
            path: "raca",
          },
          {
            path: "classe",
          },
          {
            path: "antecedente",
          },
        ],
      });
      res.status(200).json(personagens.personagens);
    }
    catch (err) {
      next(err);
    }
  };
  static deletarPersonagem = async (req, res, next) => {
    const id = req.params.id;
    const idUser = req.userID;
    try {
      console.log(idUser);
      let user = await users.findById(idUser);
      const personagemIndex = user.personagens.indexOf(id);
      if (personagemIndex !== -1) {
        // Se o personagem estiver na lista, remove-o
        const novalista = user.personagens.splice(personagemIndex, 1);
        console.log(novalista);
        await Personagem.findByIdAndUpdate(
          id,
          { personagens: novalista }
        );
        await Personagem.findByIdAndDelete(id);
        res.status(200).send({ message: "Personagem deeltado com sucesso!" });
      }
      else {
        res.status(404).send({ message: "Personagem não encontrado na lista do usuário." });
      }
    }
    catch (err) {
      next(err);
    }
  };

}

export default PersonagemController;