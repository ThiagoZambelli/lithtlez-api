// import bcrypt from "bcrypt";
import User from "../models/User.js";

class AuthController {
  static login = async (req, res, next) => {
    const { email} = req.body;

    try {
      //                                                *Ira traser a senha que o model bloqueou o get()
      const user = await User.findOne({ email: email }).select("+senha");
      // const senhaIsValid = bcrypt.compare(senha, user.senha);
      res.status(200).json(user);
    }
    catch (err) {
      next(err);
    }
  };
}

export default AuthController;