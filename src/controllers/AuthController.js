import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

class AuthController {
  static login = async (req, res, next) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
      res.status(300).send({ message: "Os campos de email e senha são obrigatórios" });
    }
    try {
      //                                                *Ira traser a senha que o model bloqueou o get()
      const user = await User.findOne({ email: email }).select("+senha");
      if (!user) {
        res.status(202).send({ message: "Email ou senha Invalidos" });
      }
      const senhaIsValid = await bcrypt.compare(senha, user.senha);
      if (!senhaIsValid) {
        res.status(202).send({ message: "Email ou senha Invalidos" });
      }
      const token = genereteToken(user._id);
      res.status(200).send({token});
    }
    catch (err) {
      next(err);
    }
  };
}

const genereteToken = (id) => jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });
export default AuthController;