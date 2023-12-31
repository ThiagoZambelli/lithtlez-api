import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: [true, "O nome é obrigatório"] },
    email: { type: String, required: [true, "O email é obrigatório"] },    
    //                      faz com que o campo n seja apresentado em uma pesquisa
    senha: { type: String, select: false, required: [true, "A senha é obrigatório"] },
    itensFavoritos: { type: [mongoose.Schema.Types.ObjectId], ref: "itens" },
    contosFavoritos: { type: [mongoose.Schema.Types.ObjectId], ref: "contos" },
    personagens: { type: [mongoose.Schema.Types.ObjectId], ref: "personagem" },
    // 
    endereco: { type: String, required: [false, "O endereço é obrigatório"] },
    cep: { type: String, required: [false, "O CEP é obrigatório"] },
    complemento: { type: String, required: [false, "O complemento é obrigatório"] }
  }
  // unique:true,
);

userSchema.pre("save", async function (next) {
  // Verifica se a senha foi fornecida ou se já foi hashed (flag hashPasswordProvided)
  if (this.isModified("senha") && !this.hashPasswordProvided) {
    try {
      const saltRounds = 10;
      this.senha = await bcrypt.hash(this.senha, saltRounds);
      this.hashPasswordProvided = true; // Adiciona a flag
    } catch (error) {
      return next(error);
    }
  }
  next();
});

const users = mongoose.model("users", userSchema);

export default users;
