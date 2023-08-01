import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: [true, "O nome é obrigatório"] },
    email: { type: String, required: [true, "O email é obrigatório"] },
    //                      faz com que o campo n seja apresentado em uma pesquisa
    senha: { type: String, select: false, required: [true, "A senha é obrigatório"] },
    itensFavoritos: { type: [mongoose.Schema.Types.ObjectId], ref: "itens" },
    endereco: { type: String, required: [false, "O endereço é obrigatório"] },
    cep: { type: String, required: [false, "O CEP é obrigatório"] },
    complemento: { type: String, required: [false, "O complemento é obrigatório"] }
  }
  // unique:true,
);

const users = mongoose.model("users", userSchema);

export default users;
