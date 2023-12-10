import PaginaNaoEncontrada from "../erros/PaginaNaoEncontrada.js";
import { Conto, users } from "../models/index.js";

class UserController {
  static validarUser = async (req, res, next) => {
    const { senha, email } = req.body;
    try {
      const user = await users.findOne({ senha, email }); // Use await para aguardar o resultado da consulta
      if (user) {
        res.status(200).json({ message: `'Usuário encontrado!' ${user}` });
      } else {
        next(new PaginaNaoEncontrada("Email ou Senha Incorreto"));
      }
    } catch (err) {
      next(err);
    }
  };

  static cadastrarUser = async (req, res, next) => {
    let user = new users(req.body);
    let busca = {};
    busca.email = user.email;
    const emailJaExiste = await users.find(busca);

    try {
      if (emailJaExiste.length > 0) {
        res.status(206).json({ menssage: "Este Email ja foi cadastrado!" });
      } else {
        await user.save();
        res.status(201).json({ menssage: "Usuario cadastrado com sucesso." });
      }
    } catch (err) {
      next(err);
    }
  };

  static favoritarConto = async (req, res, next) => {
    const { id } = req.body;
    const idUser = req.userID;
    try {
      let user = await users.findById(idUser);

      if (!user) {
        return res.status(404).send({ message: "User não encontrado!" });
      }

      user.contosFavoritos = user.contosFavoritos ?? [];

      const isFavorito = user.contosFavoritos.includes(id);

      if (!isFavorito) {
        user.contosFavoritos.push(id);
      } else {
        const indexToRemove = user.contosFavoritos.indexOf(id);
        user.contosFavoritos.splice(indexToRemove, 1);
      }

      user.hashPasswordProvided = true; // Define a flag para evitar a re-hashing da senha
      await user.save();

      return res
        .status(200)
        .send({ message: isFavorito ? "DesFavoritado" : "Favoritado" });
    } catch (err) {
      next(err);
    }
  };

  static favoritosContos = async (req, res, next) => {
    const idUser = req.userID;
    try {
      const user = await users.findById(idUser);
      if (!user) {
        return res.status(404).send({ message: "User não encontrado!" });
      }

      const contosFavoritosPromises = user.contosFavoritos.map(
        async (contoFavorito) => {
          const novoConto = await Conto.findById(contoFavorito);
          return novoConto;
        }
      );
      const contosFavoritos = await Promise.all(contosFavoritosPromises);
      return res.status(201).json(contosFavoritos);
    } catch (err) {
      next(err);
    }
  };

  static listaContosFavoritos = async (req, res, next) => {
    const idUser = req.userID;
    try {
      const user = await users.findById(idUser);
      if (!user) {
        res.status(404).send({ message: "User não encontrado!" });
      } else {
        return res.status(201).json(user.contosFavoritos);
      }
    } catch (err) {
      next(err);
    }
  };

  static meuPerfil = async (req, res, next) => {
    const idUser = req.userID;
    try {
      const user = await users
        .findById(idUser)
        .populate({
          path: "personagens",
          populate: [
            { path: "raca" },
            { path: "classe" },
            { path: "antecedente" },
          ],
        })
        .exec();

      if (!user) {
        return res.status(404).send({ message: "User não encontrado!" });
      }

      return res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
}

export default UserController;
