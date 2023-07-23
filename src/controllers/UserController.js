import users from "../models/User.js";

class UserController {
  static validarUser = async (req, res, next) => {
    const { senha, email } = req.body;
    try {
      const user = await users.findOne({ senha, email }); // Use await para aguardar o resultado da consulta
      if (user) {
        res.status(200).json({ message: `'Usuário encontrado!' ${user}` });
      } else {
        res.status(404).json({ message: "Usuário não encontrado." });
      }
    } catch (err) {
      next(err);
    }
  };

  static cadastrarUser = async (req, res, next) => {
    let user = new users(req.body);
    try{
      await user.save();
      res.status(201).json({menssage:"Usuario cadastrado com sucesso."});
    }
    catch(err){
      next(err);
    }
  };

}

export default UserController;