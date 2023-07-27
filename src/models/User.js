import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {type:String},
    nome: {type:String, required: [true, "O nome é obrigatório"]},
    endereco: {type:String, required: [true, "O endereço é obrigatório"]},
    email: {type:String,  required: [true, "O email é obrigatório"]},
    senha: {type:String, required: [true, "A senha é obrigatório"]},
    cep: {type:String, required: [true, "O CEP é obrigatório"]},
    complemento: {type:String, required: [true, "O complemento é obrigatório"]}    ,
    itensFavoritos: {type: mongoose.Schema.Types.ObjectId, ref:"itens"}    
  }
  // unique:true,
);

const users = mongoose.model("users", userSchema);

export default users;
